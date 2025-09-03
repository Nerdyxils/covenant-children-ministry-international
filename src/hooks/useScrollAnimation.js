import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Enhanced ResizeObserver error suppression
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes?.('ResizeObserver') || 
          args[0]?.includes?.('ResizeObserver loop') ||
          args[0]?.includes?.('undelivered notifications')) {
        return;
      }
      originalError.apply(console, args);
    };

    let observer;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }
    } catch (error) {
      // Handle any IntersectionObserver errors gracefully
      console.warn('IntersectionObserver error:', error);
    }

    return () => {
      try {
        if (observer && currentRef) {
          observer.unobserve(currentRef);
        }
        if (observer) {
          observer.disconnect();
        }
      } catch (error) {
        // Handle cleanup errors gracefully
        console.warn('Observer cleanup error:', error);
      }
      // Restore original console.error
      console.error = originalError;
    };
  }, [threshold]);

  return [ref, isVisible];
};
