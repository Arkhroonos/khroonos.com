import { useEffect, useRef } from 'react';
import {
  heroTextReveal,
  scrollReveal,
  staggerReveal,
  cardHoverAnimation,
} from '../services/animations';

/**
 * Hook to trigger hero text reveal animation
 */
export const useHeroAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      heroTextReveal(ref.current);
    }
  }, []);

  return ref;
};

/**
 * Hook to trigger scroll reveal animation
 */
export const useScrollReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      scrollReveal(ref.current, delay);
    }
  }, [delay]);

  return ref;
};

/**
 * Hook to trigger staggered children animation
 */
export const useStaggerReveal = (staggerDelay = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      staggerReveal(ref.current, staggerDelay);
    }
  }, [staggerDelay]);

  return ref;
};

/**
 * Hook to trigger card hover animations
 */
export const useCardHover = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      cardHoverAnimation(ref.current);
    }
  }, []);

  return ref;
};
