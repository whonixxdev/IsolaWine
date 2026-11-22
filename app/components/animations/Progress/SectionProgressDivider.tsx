"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const PILL_HEIGHT = 24;
const DROP = 96;
const DIAGONAL_WIDTH = 34;
const SPLIT = "48%";
const LINE_COLOR = "#5A1C26";
const END_ASSIST_DISTANCE = 240;

interface SectionProgressDividerProps {
  className?: string;
}

export default function SectionProgressDivider({
  className = "",
}: SectionProgressDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: elementProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "end 0.3"],
  });
  const { scrollY } = useScroll();

  const progress = useTransform(
    [elementProgress, scrollY],
    ([element, y]: number[]) => {
      if (typeof document === "undefined") {
        return element;
      }
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const remaining = Math.max(0, maxScroll - y);
      const assist = 1 - Math.min(1, remaining / END_ASSIST_DISTANCE);
      return Math.max(element, assist);
    },
  );

  const topPillWidth = useTransform(progress, [0, 0.35], ["27%", "100%"]);
  const diagonalProgress = useTransform(progress, [0.35, 0.6], [0, 1]);
  const bottomPillWidth = useTransform(progress, [0.6, 1], ["0%", "100%"]);
  const middle = PILL_HEIGHT / 2;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative w-full ${className}`}
      style={{ height: PILL_HEIGHT + DROP + middle }}
    >
      <div
        className="absolute left-0 top-0"
        style={{ width: SPLIT, height: PILL_HEIGHT }}
      >
        <span
          className="absolute left-0 right-0"
          style={{ top: middle, height: 1, backgroundColor: LINE_COLOR }}
        />
        <motion.span
          className="absolute left-0 top-0 rounded-r-full"
          style={{
            width: topPillWidth,
            height: PILL_HEIGHT,
            backgroundColor: LINE_COLOR,
          }}
        />
      </div>

      <svg
        className="absolute overflow-visible"
        style={{ left: SPLIT, top: middle }}
        width={DIAGONAL_WIDTH}
        height={DROP}
        viewBox={`0 0 ${DIAGONAL_WIDTH} ${DROP}`}
        fill="none"
      >
        <line
          x1="0"
          y1="0"
          x2={DIAGONAL_WIDTH}
          y2={DROP}
          stroke={LINE_COLOR}
          strokeWidth="1"
        />
        <motion.line
          x1="0"
          y1="0"
          x2={DIAGONAL_WIDTH}
          y2={DROP}
          stroke={LINE_COLOR}
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength: diagonalProgress }}
        />
      </svg>

      <div
        className="absolute right-0"
        style={{
          left: `calc(${SPLIT} + ${DIAGONAL_WIDTH}px)`,
          top: DROP,
          height: PILL_HEIGHT,
        }}
      >
        <span
          className="absolute left-0 right-0"
          style={{ top: middle, height: 1, backgroundColor: LINE_COLOR }}
        />
        <motion.span
          className="absolute left-0 top-0 rounded-r-full"
          style={{
            width: bottomPillWidth,
            height: PILL_HEIGHT,
            backgroundColor: LINE_COLOR,
          }}
        />
      </div>
    </div>
  );
}