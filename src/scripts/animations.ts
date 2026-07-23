import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const setupAnimations = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .fromTo('[data-hero-media]', { scale: 1.025 }, { scale: 1, duration: 1.35 })
    .from(
      '[data-hero-copy]',
      {
        y: 14,
        duration: 0.65,
        stagger: 0.09,
      },
      '-=0.92',
    );

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
    gsap.fromTo(
      element,
      { y: 24 },
      {
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          once: true,
        },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-image]').forEach((element) => {
    gsap.fromTo(
      element,
      { y: 18 },
      {
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          once: true,
        },
      },
    );
  });

  gsap.fromTo(
    '[data-service-card]',
    { y: 18 },
    {
      y: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services__list',
        start: 'top 90%',
        once: true,
      },
    },
  );
};

export default setupAnimations;
