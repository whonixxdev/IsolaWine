"use client";

import { useState, type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticWrapper from "../components/animations/Magnetic/MagneticWrapper";
import OurStoryButton from "../components/ui/button/OurStoryButton";
import DiscoverOurWinesButton from "../components/ui/button/DiscoverOurWinesButton";
import { SERIF_FONT, WINE_SHOWCASE } from "./home-hero.data";

interface HeroRelaxSectionProps {
  relaxRef: RefObject<HTMLDivElement | null>;
  landingRef: RefObject<HTMLDivElement | null>;
}

export default function HeroRelaxSection({
  relaxRef,
  landingRef,
}: HeroRelaxSectionProps) {
  const [startIndex, setStartIndex] = useState(0);

  const totalWines = WINE_SHOWCASE.length;
  const visibleWines = [
    WINE_SHOWCASE[startIndex % totalWines],
    WINE_SHOWCASE[(startIndex + 1) % totalWines],
  ];

  const handleNextWine = () => {
    setStartIndex((prev) => (prev + 1) % totalWines);
  };

  return (
    <div
      ref={relaxRef}
      className="relative left-0 top-full z-20 min-h-svh w-full overflow-hidden bg-[#F8F6EF] text-[#1E2A21] lg:absolute lg:h-full"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12vw] top-[14%] z-0 h-[70svh] w-[52vw] rounded-full bg-[#E5DBC0] opacity-85 blur-[130px]"
      />

      <div className="relative z-10 grid h-full w-full grid-cols-1 border-t border-[#1E2A21]/15 lg:grid-cols-12">
        <div className="flex flex-col justify-between border-b border-[#1E2A21]/15 lg:col-span-6 lg:border-b-0 lg:border-r">
          <div className="px-[6vw] pb-12 pt-12 lg:px-[4.5vw] lg:pb-10 lg:pt-30">
            <h2
              data-relax
              style={SERIF_FONT}
              className="text-[clamp(2.5rem,4.6vw,4.75rem)] font-normal leading-[1.03] tracking-[-0.01em] text-[#1E2A21]"
            >
              Just relax, and
              <br />
              go with the flow
            </h2>

            <p
              data-relax
              className="mt-6 max-w-[38ch] text-[14px] leading-[1.6] text-[#1E2A21]/80 lg:text-[15px]"
            >
              Wine Relax is a premium semi-sweet wine produced from Rkatsiteli
              grapes using the ancient technology, which has been used by
              Georgian winemakers for 8000 years.
            </p>

            <div data-relax className="mt-20">
              <DiscoverOurWinesButton href="/Gallery/wine" />
            </div>
          </div>

          <div
            data-relax
            className="flex flex-col justify-between gap-4 border-t border-[#1E2A21]/15 px-[6vw] py-4 sm:flex-row sm:items-center lg:px-[4.5vw] lg:py-3.5"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-24 shrink-0 overflow-hidden bg-[#E5DBC0]/60">
                <Image
                  src="/assets/imgs/Background/BackgroundHome.png"
                  alt="Wine tasting"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="max-w-[30ch]">
                <p
                  style={SERIF_FONT}
                  className="text-[16px] font-medium leading-snug text-[#1E2A21]"
                >
                  Come to the wine-tasting
                </p>
                <p className="mt-1 text-[11.5px] leading-[1.45] text-[#1E2A21]/75">
                  Only on June 1 there will be a tasting of our new wines in
                  Tbilisi. To sign up for the tasting.
                </p>
              </div>
            </div>

            <MagneticWrapper range={0.1}>
              <div className="-m-4 shrink-0 p-4">
                <div className="origin-center scale-[0.65]">
                  <OurStoryButton />
                </div>
              </div>
            </MagneticWrapper>
          </div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:col-span-6">
          <div className="pointer-events-none absolute left-1/2 top-[34%] z-30 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
            <MagneticWrapper range={0.35}>
              <div className="-m-4 p-4">
                <button
                  type="button"
                  onClick={handleNextWine}
                  aria-label="Next wine bottle"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[#1E2A21]/55 bg-[#F8F6EF]/90 text-[11px] tracking-[0.04em] text-[#1E2A21] backdrop-blur-xs transition-colors duration-300 hover:border-[#1E2A21] hover:bg-[#1E2A21] hover:text-[#F8F6EF]"
                >
                  Next
                </button>
              </div>
            </MagneticWrapper>
          </div>

          {visibleWines.map((wine, idx) => (
            <div
              key={`${wine.id}-${startIndex}-${idx}`}
              data-relax
              className={`flex flex-col justify-between px-6 pb-6 pt-10 lg:px-8 lg:pb-6 lg:pt-12 ${
                idx === 0
                  ? "border-b border-[#1E2A21]/15 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div
                ref={idx === 0 ? landingRef : undefined}
                className="flex flex-1 items-center justify-center py-4"
              >
                <div className="relative flex h-[38svh] w-full items-center justify-center lg:h-[44svh]">
                  <Image
                    src={wine.image}
                    alt={wine.alt}
                    width={420}
                    height={1200}
                    className="h-full w-auto object-contain transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="border-t border-[#1E2A21]/15 pt-3.5">
                <p className="text-[12.5px] font-normal text-[#1E2A21]">
                  {wine.title}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[12px] text-[#1E2A21]/75">
                    {wine.price}
                  </span>
                  <Link
                    href={wine.href}
                    aria-label={`View details for ${wine.title}`}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-[#1E2A21]/45 text-[12px] leading-none text-[#1E2A21] transition-colors duration-300 hover:border-[#1E2A21] hover:bg-[#1E2A21] hover:text-[#F8F6EF]"
                  >
                    +
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-end border-t border-[#1E2A21]/15 px-6 py-4 sm:hidden">
            <button
              type="button"
              onClick={handleNextWine}
              className="rounded-full border border-[#1E2A21]/60 bg-[#F8F6EF] px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#1E2A21] transition-colors duration-300 hover:bg-[#1E2A21] hover:text-[#F8F6EF]"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}