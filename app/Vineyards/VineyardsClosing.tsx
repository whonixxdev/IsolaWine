"use client";

import { Jost } from "next/font/google";
import { motion, type Variants } from "motion/react";
import DiscoverOurWinesButton from "../components/ui/button/DiscoverOurWinesButton";
import SectionHeading from "./SectionHeading";
import { VINEYARDS_CLOSING } from "./Vineyards.data";

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const group: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.14 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function VineyardsClosing() {
  return (
    <section className="relative w-full px-[6vw] pb-20 pt-12 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20">
      <SectionHeading
        eyebrow={VINEYARDS_CLOSING.eyebrow}
        title={VINEYARDS_CLOSING.title}
      />

      <motion.div
        variants={group}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="mt-7 flex flex-col items-center lg:mt-9"
      >
        <motion.p
          variants={rise}
          className={`${bodyFont.className} max-w-[28rem] text-center text-[14px] font-light leading-[1.8] text-[#1E2A21]/75 sm:text-[15px] lg:text-[16px]`}
        >
          {VINEYARDS_CLOSING.text}
        </motion.p>

        <motion.div variants={rise} className="mt-8 lg:mt-10">
          <DiscoverOurWinesButton href={VINEYARDS_CLOSING.href} />
        </motion.div>
      </motion.div>
    </section>
  );
}