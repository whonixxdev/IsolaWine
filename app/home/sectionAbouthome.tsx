"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { SERIF_FONT } from "./home-hero.data";

interface StoryPoint {
  number: string;
  title: string;
  text: string;
}

const STORY_IMAGE = "/assets/imgs/Background/BackgroundAboutHome.png";
const STORY_LINK = "/About";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STORY_POINTS: StoryPoint[] = [
  {
    number: "01",
    title: "Organic",
    text: "Grapes grown with environmentally conscious methods.",
  },
  {
    number: "02",
    title: "Small batch",
    text: "A boutique winery focused on quality, not volume.",
  },
  {
    number: "03",
    title: "Light touch",
    text: "Paper labels, and waste returned to the vineyard.",
  },
];

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function SectionAboutHome() {
  return (
    <section className="relative w-full border-t border-[#1E2A21]/15 bg-[#F8F6EF] text-[#1E2A21]">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-[6vw] py-20 lg:grid-cols-2 lg:gap-[6vw] lg:px-[4.5vw] lg:py-28">
        <motion.div
          variants={groupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[560px]"
        >
          <motion.p
            variants={itemVariants}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#6B1E2B]"
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={itemVariants}
            style={SERIF_FONT}
            className="mt-5 text-[clamp(2.5rem,4.2vw,4.25rem)] font-normal leading-[1.05] tracking-[-0.01em]"
          >
            A boutique winery,
            <br />
            grown with patience.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[46ch] text-[15px] leading-[1.7] text-[#1E2A21]/80"
          >
            Isola Wine is a small Balinese winery that puts quality before
            volume. Our grapes are grown with environmentally conscious methods,
            and every bottle is made with restraint, so the fruit and the land
            can speak for themselves.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9">
            <Link
              href={STORY_LINK}
              className="inline-flex items-center gap-3 rounded-full border border-[#1E2A21]/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#1E2A21] transition-colors duration-300 hover:bg-[#1E2A21] hover:text-[#F8F6EF]"
            >
              Read our story
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {STORY_POINTS.map((point) => (
              <motion.div
                key={point.number}
                variants={itemVariants}
                className="border-t border-[#1E2A21]/20 pt-4"
              >
                <p
                  style={SERIF_FONT}
                  className="text-[18px] leading-none text-[#1E2A21]/70"
                >
                  {point.number}
                </p>
                <p className="mt-4 text-[10.5px] font-medium uppercase tracking-[0.24em] text-[#1E2A21]">
                  {point.title}
                </p>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-[#1E2A21]/70">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: EASE }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#E5DBC0]/60 lg:ml-auto"
        >
          <Image
            src={STORY_IMAGE}
            alt="Winery team harvesting grapes in the vineyard"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}