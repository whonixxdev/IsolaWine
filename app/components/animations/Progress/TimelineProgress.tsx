"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

interface TimelineProgressProps {
  children: ReactNode;
  className?: string;
}

export default function TimelineProgress({
  children,
  className = "",
}: TimelineProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-4 top-0 -ml-px w-[2px] bg-[#5A1C26]/25 md:left-1/2"
      />
      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-4 top-0 -ml-px w-[2px] bg-[#5A1C26] md:left-1/2"
        style={{ scaleY, originY: 0 }}
      />
      {children}
    </div>
  );
}