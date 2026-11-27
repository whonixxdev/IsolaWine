"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  WINES,
  WINE_FILTERS,
  WINE_FILTER_NOTES,
  type WineFilterValue,
} from "./Winedata";
import { labelFont } from "./Winefonts";

interface WineFilterProps {
  active: WineFilterValue;
  onChange: (value: WineFilterValue) => void;
}

const countOf = (value: WineFilterValue) =>
  value === "All"
    ? WINES.length
    : WINES.filter((wine) => wine.category === value).length;

export default function WineFilter({ active, onChange }: WineFilterProps) {
  const count = countOf(active);

  return (
    <div
      className={`${labelFont.className} mt-10 flex flex-col items-center gap-6`}
    >
      <div
        role="group"
        aria-label="Filter wines"
        className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
      >
        {WINE_FILTERS.map((item) => {
          const selected = item === active;

          return (
            <motion.button
              key={item}
              type="button"
              aria-pressed={selected}
              whileTap={{ scale: 0.97 }}
              onClick={() => onChange(item)}
              className={`inline-flex h-11 items-center justify-center rounded-full border px-8 text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E2A21] ${
                selected
                  ? "border-[#1E2A21] bg-[#1E2A21] text-[#F8F6EF] shadow-xs"
                  : "border-[#1E2A21]/35 bg-transparent text-[#1E2A21] hover:border-[#1E2A21] hover:bg-[#1E2A21]/5"
              }`}
            >
              <span className="-mr-[0.25em]">{item}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="flex min-h-8 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-center text-[13px] tracking-[0.03em] text-[#1E2A21]/75"
          >
            <span>{WINE_FILTER_NOTES[active]}</span>
            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[#C49A3C] sm:inline-block"
            />
            <span className="font-medium text-[#1E2A21]">
              {count} {count === 1 ? "selection" : "selections"}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}