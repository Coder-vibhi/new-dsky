import { useEffect, useRef, useState, useCallback } from 'react';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface ScrollAnimationResult {
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
  hasAnimated: boolean;
}

export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
): ScrollAnimationResult => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) {
            setHasAnimated(true);
          }
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return {
    ref,
    isVisible,
    hasAnimated,
  };
};

export interface StaggeredScrollAnimationOptions extends ScrollAnimationOptions {
  staggerDelay?: number;
}

export interface StaggeredScrollAnimationResult {
  refs: React.RefObject<(HTMLDivElement | null)[]>;
  getItemAnimationStyles: (index: number) => React.CSSProperties;
}

export const useStaggeredScrollAnimation = (
  itemCount: number,
  options: StaggeredScrollAnimationOptions = {}
): StaggeredScrollAnimationResult => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    staggerDelay = 0.1,
  } = options;

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
            if (triggerOnce) {
              observer.unobserve(ref);
            }
          } else if (!triggerOnce) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [threshold, rootMargin, triggerOnce, itemCount]);

  const getItemAnimationStyles = useCallback(
    (index: number): React.CSSProperties => {
      const isVisible = visibleItems.has(index);
      const stagger = index * staggerDelay;

      if (!isVisible) {
        return {
          opacity: 0,
          transform: 'translateY(30px)',
        };
      }

      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${stagger}s`,
      };
    },
    [visibleItems, staggerDelay]
  );

  return {
    refs: refs as React.RefObject<(HTMLDivElement | null)[]>,
    getItemAnimationStyles,
  };
};
