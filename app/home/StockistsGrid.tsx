"use client";

import Image from "next/image";
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
}

const MIN_COLUMNS = 6;
const LABEL_WIDTH = "clamp(124px, 17vw, 260px)";
const CELL_WIDTH = "clamp(112px, 15vw, 230px)";

export default function StockistsGrid({ online, offline }: StockistsGridProps) {
  const columnCount = Math.max(MIN_COLUMNS, online.length, offline.length);

  const gridStyle = {
    gridTemplateColumns: `${LABEL_WIDTH} repeat(${columnCount}, ${CELL_WIDTH})`,
  };

  const rows: StockistRow[] = [
    {
      key: "online",
      title: "Online",
      caption: "Order from home",
      logos: online,
    },
    {
      key: "offline",
      title: "Offline",
      caption: "Find us in store",
      logos: offline,
    },
  ];

  return (
    <section className="relative w-full bg-[#F8F6EF] pb-16 pt-16 text-[#1E2A21] sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-[6vw] text-center lg:px-[4.5vw]">
        <div className="flex justify-center text-center [&_:is(h1,h2,h3,h4)]:text-[clamp(2rem,3.2vw,2.75rem)]! [&_:is(h1,h2,h3,h4)]:leading-[1.1]!">
          <TextTitle eyebrow="Stockists" title="Where to find us" as="h2" />
        </div>
        <p className="mt-4 max-w-[48ch] text-[12.5px] leading-[1.6] text-[#1E2A21]/65">
          Find our bottles online and at selected stores across Bali.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto [scrollbar-width:none] sm:mt-12 lg:mt-14 [&::-webkit-scrollbar]:hidden">
        <div className="relative w-max min-w-full py-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid"
            style={gridStyle}
          >
            {Array.from({ length: columnCount + 1 }).map((_, index) => (
              <div
                key={index}
                className={index === 0 ? "" : "border-l border-[#1E2A21]/20"}
              />
            ))}
          </div>

          <div className="relative border-y border-[#1E2A21]/20">
            {rows.map((row, rowIndex) => (
              <div
                key={row.key}
                className={`grid ${rowIndex > 0 ? "border-t border-[#1E2A21]/20" : ""}`}
                style={gridStyle}
              >
                <div className="flex h-[84px] flex-col justify-center pl-[6vw] pr-2 lg:h-[112px] lg:pl-[4.5vw] lg:pr-0">
                  <p
                    style={SERIF_FONT}
                    className="text-[clamp(0.95rem,1.25vw,1.15rem)] uppercase leading-none tracking-[0.2em] text-[#1E2A21]"
                  >
                    {row.title}
                  </p>
                  <p className="mt-2 text-[11px] leading-none text-[#1E2A21]/60">
                    {row.caption}
                  </p>
                </div>

                {Array.from({ length: columnCount }).map((_, index) => {
                  const logo = row.logos[index];

                  return (
                    <div
                      key={logo ? logo.src : `${row.key}-empty-${index}`}
                      className="relative h-[84px] lg:h-[112px]"
                    >
                      {logo ? (
                        <div className="absolute inset-3.5 sm:inset-4 lg:inset-5">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            sizes="(min-width: 1024px) 15vw, 112px"
                            unoptimized={logo.src.toLowerCase().endsWith(".svg")}
                            className="object-contain"
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}