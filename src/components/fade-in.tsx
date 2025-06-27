'use client';

import { useRef, useEffect, useState, type ReactNode, type FC } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn: FC<FadeInProps> = ({ children, className, delay = '0s', direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};
