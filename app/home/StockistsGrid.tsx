"use client";

import Image from "next/image";
import { motion } from "motion/react";
import TextTitle from "../components/ui/title/Texttitle";
import { SERIF_FONT } from "./home-hero.data";
import type { CollabLogo } from "./collabLogos";

interface StockistsGridProps {
  online: CollabLogo[];
  offline: CollabLogo[];
}

interface StockistRow {
  key: string;
  title: string;
  caption: string;
  logos: CollabLogo[];
  duration: number;
}

const EASE_LINEAR = [0, 0, 1, 1] as const;

export default function StockistsGrid({ online, offline }: StockistsGridProps) {
  const rows: StockistRow[] = [
    {
      key: "online",
      title: "Online",
      caption: "Order from home",
      logos: online,
      duration: 14,
    },
    {
      key: "offline",
      title: "Offline",
      caption: "Find us in store",
      logos: offline,
      duration: 34,
    },
  ];

  return (
    <section className="relative w-full bg-[#F8F6EF] pb-16 pt-16 text-[#1E2A21] sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-[6vw] text-center lg:px-[4.5vw]">
        <div className="flex justify-center text-center [&_:is(h1,h2,h3,h4)]:text-[clamp(2rem,6.5vw,2.75rem)]! [&_:is(h1,h2,h3,h4)]:leading-[1.1]!">
          <TextTitle eyebrow="Stockists" title="Where to find us" as="h2" />
        </div>
        <p className="mt-3.5 max-w-[48ch] text-[12.5px] leading-[1.6] text-[#1E2A21]/65 sm:text-[13px]">
          Find our bottles online and at selected stores across Bali.
        </p>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1360px] px-[6vw] sm:mt-12 lg:mt-14 lg:px-[4.5vw]">
        <div className="overflow-hidden border-y border-[#1E2A21]/20">
          {rows.map((row, rowIndex) => {
            const repeatedLogos = [...row.logos, ...row.logos];

            return (
              <div
                key={row.key}
                className={`group/row flex flex-col sm:grid sm:grid-cols-[150px_1fr] lg:grid-cols-[220px_1fr] ${
                  rowIndex > 0 ? "border-t border-[#1E2A21]/20" : ""
                }`}
              >
                <div className="flex items-center justify-between border-b border-[#1E2A21]/15 px-4 py-3 sm:flex-col sm:items-start sm:justify-center sm:border-b-0 sm:border-r sm:border-[#1E2A21]/20 sm:px-5 sm:py-5">
                  <p
                    style={SERIF_FONT}
                    className="text-[clamp(0.95rem,1.25vw,1.15rem)] uppercase leading-none tracking-[0.2em] text-[#1E2A21]"
                  >
                    {row.title}
                  </p>
                  <p className="text-[11px] leading-none text-[#1E2A21]/60 sm:mt-2">
                    {row.caption}
                  </p>
                </div>

                <div className="relative flex h-[84px] items-center overflow-hidden sm:h-[96px] lg:h-[112px]">
                  <motion.div
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: row.duration,
                      ease: EASE_LINEAR,
                    }}
                    className="flex w-max shrink-0 items-center will-change-transform group-hover/row:[animation-play-state:paused]"
                  >
                    {repeatedLogos.map((logo, index) => (
                      <div
                        key={`${row.key}-${logo.src}-${index}`}
                        className="relative flex h-[84px] w-[128px] shrink-0 items-center justify-center border-r border-[#1E2A21]/15 px-4 sm:h-[96px] sm:w-[152px] sm:px-5 lg:h-[112px] lg:w-[184px] lg:px-6"
                      >
                        <div className="relative h-9 w-full sm:h-11 lg:h-12">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            sizes="(min-width: 1024px) 184px, (min-width: 640px) 152px, 128px"
                            unoptimized={logo.src.toLowerCase().endsWith(".svg")}
                            className="object-contain opacity-85 transition-opacity duration-300 hover:opacity-100"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}