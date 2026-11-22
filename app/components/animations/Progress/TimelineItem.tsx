"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { bodyFont, numberFont } from "../../../About/about-fonts";

interface TimelineItemProps {
  label: string;
  description: string;
  side?: "left" | "right";
  logo?: string;
  logoAlt?: string;
}

export default function TimelineItem({
  label,
  description,
  side = "right",
  logo,
  logoAlt = "",
}: TimelineItemProps) {
  const dotRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: dotRef,
    offset: ["start 0.6", "end 0.6"],
  });
  const dotScale = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const isRight = side === "right";

  return (
    <div className="relative py-10 pl-12 md:grid md:grid-cols-2 md:py-16 md:pl-0">
      <span
        ref={dotRef}
        aria-hidden="true"
        className="absolute left-4 top-10 mt-2.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#5A1C26] bg-[#F8F6EF] md:left-1/2 md:top-16 md:mt-3"
      >
        <motion.span
          className="h-2 w-2 rounded-full bg-[#5A1C26]"
          style={{ scale: dotScale }}
        />
      </span>

      <div
        className={
          isRight
            ? "md:col-start-2 md:row-start-1 md:pl-16"
            : "md:col-start-1 md:row-start-1 md:pr-16 md:text-right"
        }
      >
        <p
          className={`${numberFont.className} text-3xl text-[#5A1C26] md:text-4xl`}
        >
          {label}
        </p>
        <p
          className={`${bodyFont.className} mt-4 text-sm font-light leading-relaxed text-[#1E2A21] md:text-base`}
        >
          {description}
        </p>
      </div>

      {logo && (
        <div
          className={`hidden md:flex md:items-center ${
            isRight
              ? "md:col-start-1 md:row-start-1 md:justify-end md:pr-50"
              : "md:col-start-2 md:row-start-1 md:justify-start md:pl-50"
          }`}
        >
          <div className="relative h-56 w-56">
            <Image
              src={logo}
              alt={logoAlt}
              fill
              sizes="224px"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}