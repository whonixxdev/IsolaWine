"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BAR_THICKNESS = 10;
const DROP = 88;
const DIAGONAL_WIDTH = 32;
const SPLIT_RATIO = 0.48;
const INITIAL_FILL = 0;
const LINE_COLOR = "#5A1C26";

interface SectionProgressDividerProps {
  className?: string;
}

export default function SectionProgressDivider({
  className = "",
}: SectionProgressDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateWidth = () => {
      setWidth(node.getBoundingClientRect().width || window.innerWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [INITIAL_FILL, 1]);

  const half = BAR_THICKNESS / 2;
  const yTop = half;
  const yBottom = half + DROP;
  const svgHeight = DROP + BAR_THICKNESS;

  const xTop = Math.max(0, width * SPLIT_RATIO);
  const xBottom = Math.min(width, xTop + DIAGONAL_WIDTH);

  const pathD = `M 0 ${yTop} L ${xTop} ${yTop} L ${xBottom} ${yBottom} L ${width} ${yBottom}`;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`relative w-full ${className}`}
      style={{ height: svgHeight }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${width} ${svgHeight}`}
        fill="none"
        className="block overflow-visible"
      >
        <path
          d={pathD}
          stroke={LINE_COLOR}
          strokeWidth={1.25}
          strokeLinejoin="round"
        />
        <motion.path
          d={pathD}
          stroke={LINE_COLOR}
          strokeWidth={BAR_THICKNESS}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}