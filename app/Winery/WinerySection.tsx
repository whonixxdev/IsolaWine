"use client";

import Image from "next/image";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, type Variants } from "motion/react";
import type { WinerySectionContent } from "./Winerydata";
import SectionProgressDivider from "../components/animations/Progress/SectionProgressDivider";

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
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const textGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.06 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const lineRise: Variants = {
  hidden: { y: "105%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
};

interface WinerySectionProps {
  content: WinerySectionContent;
  imagePosition?: "left" | "right";
  showRings?: boolean;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
}

export default function WinerySection({
  content,
  imagePosition = "left",
  showRings = false,
  showTopDivider = true,
  showBottomDivider = false,
}: WinerySectionProps) {
  const isImageLeft = imagePosition === "left";
  const flipDividerForRightText = !isImageLeft;

  return (
    <section className="relative w-full overflow-x-clip text-[#1E2A21]">
      {showTopDivider ? (
        <div
          className={`w-full ${
            flipDividerForRightText ? "-scale-x-100" : ""
          }`}
        >
          <SectionProgressDivider />
        </div>
      ) : null}

      <div
        className={`mx-auto grid w-full max-w-[1600px] items-center gap-6 px-5 py-10 sm:gap-8 sm:px-7 sm:py-12 lg:gap-[5vw] lg:py-20 ${
          isImageLeft ? LAYOUT_IMAGE_LEFT : LAYOUT_IMAGE_RIGHT
        }`}
      >
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[4/5] lg:aspect-[3/4] ${
            isImageLeft ? "" : "lg:order-2"
          }`}
        >
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 92vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={textGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          className={`px-1 sm:px-0 ${isImageLeft ? "" : "lg:order-1"}`}
        >
          <motion.span
            variants={fadeUp}
            className={`${bodyFont.className} block text-[11px] font-medium tracking-[0.28em] text-[#5A1C26] sm:pl-6 lg:pl-8 lg:text-[12px] lg:tracking-[0.3em]`}
          >
            {content.number}
          </motion.span>

          <h2
            aria-label={content.titleLines.join(" ")}
            className={`${titleFont.className} mt-3 text-[clamp(2rem,8vw,3.75rem)] font-normal uppercase leading-[1.05] lg:mt-5 lg:leading-[1.02]`}
          >
            {content.titleLines.map((line, index) => (
              <span
                key={`${line}-${index}`}
                aria-hidden="true"
                className="-mb-[0.1em] block overflow-hidden pb-[0.1em]"
              >
                <motion.span variants={lineRise} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <div className="mt-5 space-y-3 sm:mt-7 sm:space-y-2.5 lg:mt-9 lg:space-y-0">
            {content.paragraphs.map((paragraph, index) => (
              <motion.p
                key={`${paragraph}-${index}`}
                variants={fadeUp}
                className={`${bodyFont.className} text-[15px] font-normal leading-[1.75] text-[#1E2A21]/80 sm:font-light lg:text-[16px] lg:leading-[1.8]`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {showBottomDivider ? (
        <div
          className={`w-full ${
            flipDividerForRightText ? "-scale-x-100" : ""
          }`}
        >
          <SectionProgressDivider />
        </div>
      ) : null}

      {showRings ? (
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 300 300"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="pointer-events-none absolute bottom-0 right-0 hidden h-auto w-[16vw] max-w-[300px] lg:block"
        >
          <circle cx="360" cy="340" r="280" stroke="#5A1C26" strokeWidth="1" />
          <circle cx="365" cy="345" r="255" stroke="#5A1C26" strokeWidth="1" />
          <circle cx="372" cy="352" r="225" stroke="#5A1C26" strokeWidth="1" />
        </motion.svg>
      ) : null}
    </section>
  );
}