import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero text reveal animation
 */
export const heroTextReveal = (element: HTMLElement) => {
  gsap.set(element, { opacity: 0, y: 50 });
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.2,
  });
};

/**
 * Scroll-triggered fade and slide in animation
 */
export const scrollReveal = (element: HTMLElement, delay = 0) => {
  gsap.set(element, { opacity: 0, y: 60 });
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Staggered children animation
 */
export const staggerReveal = (container: HTMLElement, staggerDelay = 0.1) => {
  gsap.set(container.children, { opacity: 0, y: 30 });
  gsap.to(container.children, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: staggerDelay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Card hover animation with 3D tilt effect
 */
export const cardHoverAnimation = (element: HTMLElement) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      y: 0,
      boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2)',
      duration: 0.3,
      ease: 'power2.out',
    });
  });
};

/**
 * Smooth parallax effect on scroll
 */
export const parallaxEffect = (element: HTMLElement, speed = 0.5) => {
  gsap.to(element, {
    y: () => {
      const distance = gsap.getProperty(element, 'offsetTop');
      return (distance as number) * speed;
    },
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      onUpdate: (self) => {
        gsap.to(element, {
          y: -(self.getVelocity() * 0.5),
          overwrite: 'auto',
          duration: 0.5,
        });
      },
    },
  });
};

/**
 * Button click ripple effect
 */
export const rippleEffect = (e: React.MouseEvent<HTMLElement>) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('div');

  ripple.style.position = 'absolute';
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  ripple.style.borderRadius = '50%';
  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  ripple.style.left = e.clientX - rect.left + 'px';
  ripple.style.top = e.clientY - rect.top + 'px';
  ripple.style.pointerEvents = 'none';

  button.appendChild(ripple);

  gsap.to(ripple, {
    width: 400,
    height: 400,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    onComplete: () => ripple.remove(),
  });
};

/**
 * Number counter animation
 */
export const countUpAnimation = (
  element: HTMLElement,
  endValue: number,
  duration = 2
) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.innerText = Math.floor(obj.value).toString();
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};
