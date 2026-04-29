import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add a "visible" class
 * to elements when they scroll into view.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold }
    );

    // Observe all children with reveal class inside the ref element
    const children = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    children.forEach((child) => observer.observe(child));

    // Also observe the element itself if it has a reveal class
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
