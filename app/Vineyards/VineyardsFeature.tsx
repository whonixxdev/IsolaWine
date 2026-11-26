"use client";

import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, type Variants } from "motion/react";
import ImageSlot from "./ImageSlot";
import type { VineyardsFeatureContent } from "./Vineyards.data";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const EASE = [0.22, 1, 0.36, 1] as const;

const LAYOUT_IMAGE_LEFT =
  "lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:pl-[8vw] lg:pr-[5vw]";

const LAYOUT_IMAGE_RIGHT =
  "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:pl-[9vw] lg:pr-[5vw]";

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

const textGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const maskRise: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1, ease: EASE } },
};

interface VineyardsFeatureProps {
  content: VineyardsFeatureContent;
  imagePosition?: "left" | "right";
}

export default function VineyardsFeature({
  content,
  imagePosition = "left",
}: VineyardsFeatureProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="relative w-full overflow-hidden text-[#1E2A21]">
      <div
        className={`mx-auto grid w-full max-w-[1600px] items-center gap-9 px-[6vw] py-12 sm:py-14 lg:gap-[5vw] lg:py-20 ${
          isImageLeft ? LAYOUT_IMAGE_LEFT : LAYOUT_IMAGE_RIGHT
        }`}
      >
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={isImageLeft ? "" : "lg:order-2"}
        >
          <ImageSlot
            src={content.image}
            alt={content.imageAlt}
            sizes="(min-width: 1024px) 40vw, 88vw"
            className="aspect-[4/5] w-full rounded-[1.125rem] lg:aspect-[3/4]"
          />
        </motion.div>

        <motion.div
          variants={textGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={isImageLeft ? "" : "lg:order-1"}
        >
          <motion.p
            variants={fadeUp}
            className={`${bodyFont.className} flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#5A1C26] sm:text-[11px] lg:text-[12px]`}
          >
            <span aria-hidden="true" className="h-px w-8 bg-[#C49A3C] lg:w-10" />
            {content.eyebrow}
          </motion.p>

          <h2
            className={`${titleFont.className} mt-4 overflow-hidden pb-[0.12em] text-[clamp(2rem,3.4vw,3.25rem)] font-normal uppercase leading-[1.04] lg:mt-5`}
          >
            <motion.span variants={maskRise} className="block">
              {content.title}
            </motion.span>
          </h2>

          <div className="mt-6 space-y-3 lg:mt-8">
            {content.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                className={`${bodyFont.className} text-[14px] font-light leading-[1.8] text-[#1E2A21]/75 sm:text-[15px] lg:text-[16px]`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}