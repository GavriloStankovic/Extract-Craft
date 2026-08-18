import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { beforeEach, afterEach, expect, test, vi } from 'vitest';
import { CartProvider } from '../../context/CartContext/CartContext';
import Header from './Header';

let observers = [];

beforeEach(() => {
  observers = [];
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback) {
        this.callback = callback;
        observers.push(this);
      }
      observe(node) {
        this.node = node;
      }
      disconnect() {}
    }
  );
});

afterEach(() => vi.unstubAllGlobals());

const renderHeader = () =>
  render(
    <MemoryRouter>
      <CartProvider>
        <Header />
      </CartProvider>
    </MemoryRouter>
  );

// The reveal animation clones its child and attaches a ref to it. SVGR builds
// icons as plain function components that spread their props onto <svg>, which
// only forwards a ref because React 19 treats `ref` as an ordinary prop.
test('reveal styles reach the SVG icons rendered by svgr', () => {
  const { container } = renderHeader();
  const logo = container.querySelector('svg');

  expect(logo).toBeInTheDocument();
  expect(logo.style.opacity).toBe('0');
  expect(observers.some((o) => o.node === logo)).toBe(true);

  act(() => observers.forEach((o) => o.callback([{ isIntersecting: true }])));

  expect(logo.style.opacity).toBe('1');
});

test('the cart icon toggles the cart preview', async () => {
  const user = userEvent.setup();
  renderHeader();

  expect(screen.queryByText('Your Cart')).not.toBeInTheDocument();

  await user.click(document.querySelectorAll('.header svg')[1]);

  expect(screen.getByText('Your Cart')).toBeInTheDocument();
});
