"use client";

import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const eyebrowFont = Jost({
  subsets: ["latin"],
  weight: ["500", "600"],
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextTitleProps {
  eyebrow: string;
  title: string;
  as?: HeadingTag;
  className?: string;
  titleClassName?: string;
}

export default function TextTitle({
  eyebrow,
  title,
  as: Heading = "h2",
  className = "",
  titleClassName = "",
}: TextTitleProps) {
  const pathname = usePathname();

  const letters = title.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div
      key={pathname}
      className={`mx-auto flex w-fit max-w-full flex-col items-center gap-3 md:gap-5 ${className}`}
    >
      <div className="flex w-full items-center gap-4 md:gap-8">
        <motion.span
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1, originX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="h-[2px] flex-1 bg-[#8C6B70]"
        />

        <span
          className={`${eyebrowFont.className} -mr-[0.4em] shrink-0 text-xs font-semibold uppercase tracking-[0.4em] text-[#4A1C26] sm:text-sm md:text-xl`}
        >
          {eyebrow}
        </span>

        <motion.span
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1, originX: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="h-[2px] flex-1 bg-[#8C6B70]"
        />
      </div>

      <Heading
        className={`${titleFont.className} text-center font-normal uppercase leading-none tracking-tight text-[#1E2A21] ${
          titleClassName || "text-5xl sm:text-7xl md:text-8xl"
        }`}
      >
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex flex-wrap justify-center"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </Heading>
    </div>
  );
}