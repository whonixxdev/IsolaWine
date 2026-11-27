"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WineActions from "./WineActions";
import type { WineItemData } from "./Winedata";
import { labelFont, titleFont } from "./Winefonts";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.2 } as const;

const sectionLabelClass =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-[#5A1C26]";

const bodyClass = "text-[14px] leading-[1.8] text-[#1E2A21]/80 sm:text-[15px]";

interface WineItemProps {
  wine: WineItemData;
  index: number;
}

export default function WineItem({ wine, index }: WineItemProps) {
  const reversed = index % 2 === 1;

  return (
    <article className="border-t border-[#D8D0C2] py-14 first:border-t-0 first:pt-0 lg:py-24 lg:first:pt-4">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.0, ease: EASE }}
          className={`lg:col-span-5 lg:row-start-1 ${
            reversed ? "lg:col-start-8" : "lg:col-start-1"
          }`}
        >
          <div className="group relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={wine.image}
              alt={wine.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-6"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
          className={`${labelFont.className} lg:row-start-1 lg:col-span-6 ${
            reversed ? "lg:col-start-1" : "lg:col-start-7"
          }`}
        >
          <p className="flex items-center gap-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#5A1C26]">
            <span aria-hidden="true" className="h-px w-10 bg-[#C49A3C]" />
            <span>{wine.type}</span>
          </p>

          <h2
            className={`${titleFont.className} mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[0.01em] text-[#1E2A21]`}
          >
            {wine.name}
          </h2>

          <div className="mt-6 max-w-[34rem] border-y border-[#D8D0C2] py-4">
            <p className={sectionLabelClass}>Grape Variety</p>
            <p className="mt-1.5 text-[15px] font-medium text-[#1E2A21]">
              {wine.grape}
            </p>
            {wine.notes ? (
              <p className="mt-1 text-[13px] italic text-[#1E2A21]/70">
                {wine.notes}
              </p>
            ) : null}
          </div>

          <dl className="mt-7 grid max-w-[34rem] grid-cols-1 gap-x-6 border-b border-[#D8D0C2] sm:grid-cols-3">
            {wine.specs.map((spec) => (
              <div
                key={spec.label}
                className="border-t border-[#D8D0C2] py-3.5 sm:border-t-0"
              >
                <dt className="text-[11px] uppercase tracking-[0.08em] text-[#1E2A21]/60">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-[13px] font-medium text-[#1E2A21]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid max-w-[34rem] gap-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <h3 className={sectionLabelClass}>Tasting notes</h3>
              <p className={`${bodyClass} mt-2`}>{wine.tasting}</p>
            </div>
            <div>
              <h3 className={sectionLabelClass}>Food pairing</h3>
              <p className={`${bodyClass} mt-2`}>{wine.pairing}</p>
            </div>
          </div>

          <div className="mt-9 lg:mt-10">
            <WineActions name={wine.name} type={wine.type} />
          </div>
        </motion.div>
      </div>
    </article>
  );
}