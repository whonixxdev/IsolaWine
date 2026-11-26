"use client";

import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, type Variants } from "motion/react";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const labelFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const maskRise: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1, ease: EASE } },
};

type HeadingTag = "h1" | "h2" | "h3";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  as?: HeadingTag;
}

export default function SectionHeading({
  eyebrow,
  title,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={group}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 md:gap-5"
    >
      <motion.div
        variants={rise}
        className="flex w-full items-center gap-4 md:gap-8"
      >
        <span aria-hidden="true" className="h-px flex-1 bg-[#8C6B70]" />
        <span
          className={`${labelFont.className} -mr-[0.34em] shrink-0 text-[10px] font-medium uppercase tracking-[0.34em] text-[#4A1C26] sm:text-xs md:text-sm`}
        >
          {eyebrow}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-[#8C6B70]" />
      </motion.div>

      <Heading
        className={`${titleFont.className} overflow-hidden pb-[0.1em] text-center text-[clamp(2.5rem,6vw,5rem)] font-normal uppercase leading-none text-[#1E2A21]`}
      >
        <motion.span variants={maskRise} className="block">
          {title}
        </motion.span>
      </Heading>
    </motion.div>
  );
}