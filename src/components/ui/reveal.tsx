"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface RevealProps {
  children?: ReactNode;
  className?: string;
  /** Jeda animasi dalam detik */
  delay?: number;
  as?: ElementType;
}

/** Memunculkan konten dengan efek fade-up saat masuk ke layar */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
