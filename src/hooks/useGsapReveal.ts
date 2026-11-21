import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero subtle entrance
      const heroItems = root.querySelectorAll('[data-gsap-hero]');
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform',
          }
        );
      }

      // Editorial scroll reveals
      const reveals = root.querySelectorAll('[data-gsap-reveal]');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });

      // Subtle architectural parallax on hero or banner media
      const parallaxEls = root.querySelectorAll('[data-gsap-parallax]');
      parallaxEls.forEach((el) => {
        gsap.to(el, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [containerRef]);
}
