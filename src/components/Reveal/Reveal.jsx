import { Children, cloneElement, useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal animations.
 *
 * Replaces the unmaintained `react-reveal`, which relied on `findDOMNode` and
 * therefore cannot run on React 19. Like the original, this clones its single
 * child and applies the animation directly to it rather than introducing a
 * wrapper element, so it never disturbs the surrounding layout.
 */

const DISTANCE = { fade: 40, slide: 90 };
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

const translate = (direction, px) => {
  switch (direction) {
    case "top":
      return `translate3d(0, -${px}px, 0)`;
    case "bottom":
      return `translate3d(0, ${px}px, 0)`;
    case "left":
      return `translate3d(-${px}px, 0, 0)`;
    case "right":
      return `translate3d(${px}px, 0, 0)`;
    default:
      return "none";
  }
};

const rotate = (direction) => {
  switch (direction) {
    case "top":
      return "perspective(1000px) rotateX(-90deg)";
    case "bottom":
      return "perspective(1000px) rotateX(90deg)";
    case "right":
      return "perspective(1000px) rotateY(90deg)";
    default:
      return "perspective(1000px) rotateY(-90deg)";
  }
};

const wantsReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveals once the element scrolls into view. Falls back to "visible
 * immediately" whenever observation is impossible — no IntersectionObserver
 * (jsdom), a child that does not forward its ref, or reduced-motion — so
 * content can never end up stranded at opacity 0.
 */
const useRevealOnScroll = (skip) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(skip);

  useEffect(() => {
    if (skip) return undefined;

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [skip]);

  return [ref, revealed];
};

const Reveal = ({
  children,
  effect = "fade",
  duration = 1000,
  delay = 0,
  top,
  bottom,
  left,
  right,
}) => {
  const [reducedMotion] = useState(wantsReducedMotion);
  const [ref, revealed] = useRevealOnScroll(reducedMotion);

  const child = Children.only(children);
  const direction =
    (top && "top") || (bottom && "bottom") || (left && "left") || (right && "right") || null;

  const hidden =
    effect === "flip" ? rotate(direction) : translate(direction, DISTANCE[effect] ?? DISTANCE.fade);

  const style = {
    ...child.props.style,
    opacity: revealed ? 1 : 0,
    transform: revealed ? "none" : hidden,
    transition: reducedMotion
      ? undefined
      : `opacity ${duration}ms ${EASING} ${delay}ms, transform ${duration}ms ${EASING} ${delay}ms`,
    willChange: revealed ? undefined : "opacity, transform",
  };

  return cloneElement(child, { ref, style });
};

export const Fade = (props) => <Reveal {...props} effect="fade" />;
export const Slide = (props) => <Reveal {...props} effect="slide" />;
export const Flip = (props) => <Reveal {...props} effect="flip" />;

export default Reveal;
