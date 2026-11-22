"use client";

import { useRef, useState, type RefObject } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  type PanInfo,
  type Variants,
} from "motion/react";
import MagneticWrapper from "../components/animations/Magnetic/MagneticWrapper";
import OurStoryButton from "../components/ui/button/OurStoryButton";
import DiscoverOurWinesButton from "../components/ui/button/DiscoverOurWinesButton";
import { SERIF_FONT, WINE_SHOWCASE } from "./home-hero.data";

interface HeroRelaxSectionProps {
  relaxRef: RefObject<HTMLDivElement | null>;
  landingRef: RefObject<HTMLDivElement | null>;
}

const SLIDE_DURATION = 1;
const SLIDE_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const TEXT_EASE_IN: [number, number, number, number] = [0.22, 1, 0.36, 1];
const TEXT_EASE_OUT: [number, number, number, number] = [0.64, 0, 0.78, 0];
const TRACK_STEP = "-33.3333%";
const SWIPE_DISTANCE = 60;
const SWIPE_VELOCITY = 400;

const infoGroupVariants: Variants = {
  enter: {},
  center: { transition: { staggerChildren: 0.09 } },
  exit: { transition: { staggerChildren: 0.04 } },
};

const infoItemVariants: Variants = {
  enter: { opacity: 0, y: -18, x: 28 },
  center: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: TEXT_EASE_IN },
  },
  exit: {
    opacity: 0,
    y: 14,
    x: -28,
    transition: { duration: 0.3, ease: TEXT_EASE_OUT },
  },
};

export default function HeroRelaxSection({
  relaxRef,
  landingRef,
}: HeroRelaxSectionProps) {
  const totalWines = WINE_SHOWCASE.length;
  const [startIndex, setStartIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const slidingRef = useRef(false);
  const trackControls = useAnimationControls();

  const trackWines = [0, 1, 2].map(
    (offset) => WINE_SHOWCASE[(startIndex + offset) % totalWines],
  );
  const textWines = [0, 1].map(
    (offset) => WINE_SHOWCASE[(textIndex + offset) % totalWines],
  );

  const handleNextWine = async () => {
    if (slidingRef.current) return;
    slidingRef.current = true;
    setIsSliding(true);

    const nextIndex = (startIndex + 1) % totalWines;
    setTextIndex(nextIndex);

    await trackControls.start({
      x: TRACK_STEP,
      transition: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
    });

    flushSync(() => {
      setStartIndex(nextIndex);
    });
    trackControls.set({ x: "0%" });

    slidingRef.current = false;
    setIsSliding(false);
  };

  const handlePanEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const isHorizontal = Math.abs(info.offset.x) > Math.abs(info.offset.y);
    const isSwipeLeft =
      info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY;

    if (isHorizontal && isSwipeLeft) {
      void handleNextWine();
    }
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
          <div className="flex flex-1 flex-col justify-center px-[6vw] py-14 lg:px-[4.5vw] lg:py-10">
            <h1
              data-relax
              style={SERIF_FONT}
              className="text-[clamp(2.75rem,5.6vw,6rem)] font-normal leading-[1.02] tracking-[-0.015em] text-[#1E2A21]"
            >
              Just relax, and
              <br />
              go with the flow
            </h1>

            <p
              data-relax
              className="mt-7 max-w-[44ch] text-[15px] leading-[1.65] text-[#1E2A21]/80 lg:text-[16.5px]"
            >
              Wine Relax is a premium semi-sweet wine produced from Rkatsiteli
              grapes using the ancient technology, which has been used by
              Georgian winemakers for 8000 years.
            </p>

            <div data-relax className="mt-12">
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

        <div className="relative flex flex-col lg:col-span-6 lg:h-full lg:min-h-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 w-px bg-[#1E2A21]/15"
          />

          <div className="absolute left-1/2 top-[34%] z-30 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
            <MagneticWrapper range={0.35}>
              <div className="-m-4 p-4">
                <button
                  type="button"
                  onClick={handleNextWine}
                  disabled={isSliding}
                  aria-label="Next wine bottle"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[#1E2A21]/55 bg-[#F8F6EF]/90 text-[11px] tracking-[0.04em] text-[#1E2A21] backdrop-blur-xs transition-colors duration-300 hover:border-[#1E2A21] hover:bg-[#1E2A21] hover:text-[#F8F6EF] disabled:cursor-default"
                >
                  Next
                </button>
              </div>
            </MagneticWrapper>
          </div>

          <div
            data-relax
            className="relative h-[56svh] lg:h-auto lg:min-h-0 lg:flex-1"
          >
            <motion.div
              onPanEnd={handlePanEnd}
              className="absolute inset-0 touch-pan-y overflow-hidden"
            >
              <motion.div
                initial={{ x: "0%" }}
                animate={trackControls}
                className="flex h-full w-[150%] will-change-transform"
              >
                {trackWines.map((wine, slot) => (
                  <div
                    key={wine.id}
                    ref={slot === 0 ? landingRef : undefined}
                    className="flex h-full w-1/3 items-center justify-center px-2 py-4"
                  >
                    <div className="relative flex h-[50svh] w-full items-center justify-center lg:h-[62svh]">
                      <Image
                        src={wine.image}
                        alt={wine.alt}
                        width={420}
                        height={1200}
                        priority={slot < 2}
                        draggable={false}
                        className="h-full w-auto max-w-full select-none object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div data-relax className="grid grid-cols-2">
            {textWines.map((wine, column) => (
              <div key={column} className="px-4 pb-6 sm:px-6 lg:px-8">
                <div className="min-h-[5.5rem] border-t border-[#1E2A21]/15 pt-3.5">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={wine.id}
                      variants={infoGroupVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <motion.p
                        variants={infoItemVariants}
                        className="text-[12.5px] font-normal text-[#1E2A21]"
                      >
                        {wine.title}
                      </motion.p>
                      <motion.div
                        variants={infoItemVariants}
                        className="mt-3 flex items-center justify-between"
                      >
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
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end border-t border-[#1E2A21]/15 px-6 py-4 sm:hidden">
            <button
              type="button"
              onClick={handleNextWine}
              disabled={isSliding}
              className="rounded-full border border-[#1E2A21]/60 bg-[#F8F6EF] px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#1E2A21] transition-colors duration-300 hover:bg-[#1E2A21] hover:text-[#F8F6EF] disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}