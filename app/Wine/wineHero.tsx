"use client";

import { motion } from "motion/react";
import TextTitle from "../components/ui/title/Texttitle";
import WineFilter from "./WineFilter";
import { WINE_HERO, type WineFilterValue } from "./Winedata";
import { labelFont } from "./Winefonts";

const EASE = [0.22, 1, 0.36, 1] as const;

interface WineHeroProps {
  active: WineFilterValue;
  onChange: (value: WineFilterValue) => void;
}

export default function WineHero({ active, onChange }: WineHeroProps) {
  return (
    <section className="px-6 pb-14 pt-36 sm:pt-40 lg:pb-20 lg:pt-48">
      <div className="mx-auto max-w-4xl">
        <TextTitle
          eyebrow={WINE_HERO.eyebrow}
          title={WINE_HERO.title}
          as="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: EASE }}
          className={`${labelFont.className} mx-auto mt-7 max-w-xl text-center text-sm leading-[1.85] tracking-[0.03em] text-[#1E2A21]/80 sm:text-[15px]`}
        >
          {WINE_HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
        >
          <WineFilter active={active} onChange={onChange} />
        </motion.div>
      </div>
    </section>
  );
}