import { render, screen, act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { Fade } from './Reveal';

let observers = [];

beforeEach(() => {
  observers = [];
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback) {
        this.callback = callback;
        this.disconnected = false;
        observers.push(this);
      }
      observe(node) {
        this.node = node;
      }
      disconnect() {
        this.disconnected = true;
      }
    }
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

const scrollIntoView = () =>
  act(() => observers[0].callback([{ isIntersecting: true }]));

describe('Reveal', () => {
  test('starts hidden and reveals once it scrolls into view', () => {
    render(
      <Fade top delay={200}>
        <p>hello</p>
      </Fade>
    );

    const el = screen.getByText('hello');
    expect(el).toHaveStyle({ opacity: '0' });
    expect(el.style.transform).toBe('translate3d(0, -40px, 0)');
    expect(el.style.transition).toContain('200ms');

    scrollIntoView();

    expect(el).toHaveStyle({ opacity: '1' });
    expect(el.style.transform).toBe('none');
  });

  test('observes the child itself and adds no wrapper element', () => {
    const { container } = render(
      <div data-testid="host">
        <Fade left>
          <span className="child">x</span>
        </Fade>
      </div>
    );

    const host = container.querySelector('[data-testid="host"]');
    expect(host.children).toHaveLength(1);
    expect(host.firstElementChild.tagName).toBe('SPAN');
    expect(observers[0].node).toBe(host.firstElementChild);
  });

  test('stops observing after the first reveal', () => {
    render(
      <Fade bottom>
        <p>once</p>
      </Fade>
    );

    scrollIntoView();

    expect(observers[0].disconnected).toBe(true);
  });

  test('preserves styles already set on the child', () => {
    render(
      <Fade top>
        <p style={{ color: 'rgb(255, 0, 0)' }}>styled</p>
      </Fade>
    );

    expect(screen.getByText('styled')).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  test('renders visible and untransitioned when reduced motion is preferred', () => {
    window.matchMedia = (query) => ({ matches: true, media: query, addEventListener() {}, removeEventListener() {} });

    render(
      <Fade top duration={2000}>
        <p>calm</p>
      </Fade>
    );

    const el = screen.getByText('calm');
    expect(el).toHaveStyle({ opacity: '1' });
    expect(el.style.transition).toBe('');
    expect(observers).toHaveLength(0);
  });
});
