"use client";

import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, type Variants } from "motion/react";
import ImageSlot from "./ImageSlot";
import SectionHeading from "./SectionHeading";
import { GRAPE_SECTION, GRAPE_VARIETIES } from "./Vineyards.data";

const nameFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const gridGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardRise: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const introRise: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function GrapeVarieties() {
  return (
    <section className="relative w-full px-[6vw] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow={GRAPE_SECTION.eyebrow}
          title={GRAPE_SECTION.title}
        />

        <motion.p
          variants={introRise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className={`${bodyFont.className} mx-auto mt-7 max-w-[46rem] text-center text-[14px] font-light leading-[1.8] text-[#1E2A21]/75 sm:text-[15px] lg:mt-9 lg:text-[16px]`}
        >
          {GRAPE_SECTION.intro}
        </motion.p>

        <motion.div
          variants={gridGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        >
          {GRAPE_VARIETIES.map((variety) => (
            <motion.article
              key={variety.id}
              variants={cardRise}
              className="group flex flex-row overflow-hidden rounded-[1.125rem] border border-[#1E2A21]/15 transition-colors duration-500 hover:border-[#1E2A21]/40 sm:flex-col"
            >
              <ImageSlot
                src={variety.image}
                alt={variety.imageAlt}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 38vw"
                className="aspect-square w-[38%] shrink-0 sm:aspect-[4/3] sm:w-full"
                imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="flex flex-1 flex-col justify-center p-4 sm:justify-start sm:p-6">
                <p
                  className={`${bodyFont.className} text-[10px] font-medium uppercase tracking-[0.24em] text-[#5A1C26]`}
                >
                  {variety.type}
                </p>
                <h3
                  className={`${nameFont.className} mt-2 text-[1.5rem] font-normal leading-tight text-[#1E2A21] sm:text-[1.625rem]`}
                >
                  {variety.name}
                </h3>
                <p
                  className={`${bodyFont.className} mt-3 text-[13px] font-light leading-[1.7] text-[#1E2A21]/75 sm:text-[14px]`}
                >
                  {variety.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}