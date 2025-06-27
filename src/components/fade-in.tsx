// components/fade-in.tsx
"use client";

import { useRef, useEffect, useState, type ReactNode, type FC } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeIn: FC<FadeInProps> = ({
  children,
  className,
  delay = "0s",
  direction = "up",
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);

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
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  };

  const animatedStateClasses = isVisible
    ? "opacity-100 translate-x-0 translate-y-0"
    : `opacity-0 ${directionClasses[direction]}`;

  return (
    <div
      ref={ref}
      className={cn(
        hasMounted ? "transition-all duration-700 ease-out" : "",
        animatedStateClasses,
        className
      )}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};
