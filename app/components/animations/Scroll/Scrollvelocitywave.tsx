"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

export interface ScrollVelocityWaveProps {
  images: string[];
  columns?: number;
  parallaxDistance?: number;
  waveIntensity?: number;
  className?: string;
}

interface ColumnProps {
  images: string[];
  index: number;
  scrollYProgress: MotionValue<number>;
  smoothVelocity: MotionValue<number>;
  parallaxDistance: number;
  waveIntensity: number;
}

function GalleryColumn({
  images,
  index,
  scrollYProgress,
  smoothVelocity,
  parallaxDistance,
  waveIntensity,
}: ColumnProps) {
  const direction = index % 2 === 0 ? -1 : 1;
  const baseY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, direction * parallaxDistance]
  );

  const phase = index * 0.9;

  const waveY = useTransform(smoothVelocity, (v) => {
    const clampedVelocity = Math.max(-1500, Math.min(1500, v));
    return Math.sin(phase) * clampedVelocity * waveIntensity;
  });

  const y = useTransform([baseY, waveY], ([b, w]: number[]) => b + w);

  return (
    <motion.div
      className="flex flex-1 flex-col gap-4 md:gap-6 transform-gpu will-change-transform"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          className="relative w-full overflow-hidden rounded-md bg-[#EAE5D9] shadow-sm transition-transform duration-300 hover:scale-[1.02] md:rounded-lg"
          style={{ aspectRatio: "4/5" }}
          key={`${index}-${i}`}
        >
          <img
            src={src}
            alt="Isola Wine gallery"
            draggable={false}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default function ScrollVelocityWave({
  images,
  columns = 4,
  parallaxDistance = 120,
  waveIntensity = 0.03,
  className,
}: ScrollVelocityWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeColumns, setActiveColumns] = useState(columns);

  useEffect(() => {
    const updateColumns = () => {
      setActiveColumns(window.innerWidth < 768 ? 2 : columns);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [columns]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 200,
    mass: 0.6,
  });

  const effectiveParallax = activeColumns === 2 ? parallaxDistance * 0.5 : parallaxDistance;

  const columnImages = useMemo(() => {
    const grouped: string[][] = Array.from({ length: activeColumns }, () => []);
    images.forEach((src, i) => grouped[i % activeColumns].push(src));
    return grouped;
  }, [images, activeColumns]);

  return (
    <div
      ref={containerRef}
      className={[
        "box-border grid w-full grid-cols-2 items-start gap-4 overflow-hidden px-4 md:grid-cols-4 md:gap-6 md:px-10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {columnImages.map((imgs, i) => (
        <GalleryColumn
          key={i}
          images={imgs}
          index={i}
          scrollYProgress={scrollYProgress}
          smoothVelocity={smoothVelocity}
          parallaxDistance={effectiveParallax}
          waveIntensity={waveIntensity}
        />
      ))}
    </div>
  );
}