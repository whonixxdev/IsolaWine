"use client";

import { AnimatePresence, motion } from "motion/react";
import WineItem from "./WineItem";
import { WINES, type WineFilterValue } from "./Winedata";
import { labelFont } from "./Winefonts";

const EASE = [0.22, 1, 0.36, 1] as const;

interface WineListProps {
  filter: WineFilterValue;
}

export default function WineList({ filter }: WineListProps) {
  const items =
    filter === "All"
      ? WINES
      : WINES.filter((wine) => wine.category === filter);

  return (
    <section aria-live="polite" className="px-[6vw] pb-24 lg:pb-32">
      <div className="mx-auto max-w-[80rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {items.length > 0 ? (
              items.map((wine, index) => (
                <WineItem key={wine.id} wine={wine} index={index} />
              ))
            ) : (
              <p
                className={`${labelFont.className} py-24 text-center text-[14px] tracking-[0.03em] text-[#1E2A21]/70`}
              >
                No wines in this selection yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}