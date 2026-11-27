"use client";

import { useRef, useState, type RefObject } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const handlePrevWine = async () => {
    if (slidingRef.current) return;
    slidingRef.current = true;
    setIsSliding(true);

    const prevIndex = (startIndex - 1 + totalWines) % totalWines;
    setTextIndex(prevIndex);

    flushSync(() => {
      setStartIndex(prevIndex);
    });
    trackControls.set({ x: TRACK_STEP });

    await trackControls.start({
      x: "0%",
      transition: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
    });

    slidingRef.current = false;
    setIsSliding(false);
  };

  const handlePanEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const isHorizontal = Math.abs(info.offset.x) > Math.abs(info.offset.y);
    if (!isHorizontal) return;

    const isSwipeLeft =
      info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY;
    const isSwipeRight =
      info.offset.x > SWIPE_DISTANCE || info.velocity.x > SWIPE_VELOCITY;

    if (isSwipeLeft) {
      void handleNextWine();
    } else if (isSwipeRight) {
      void handlePrevWine();
    }
  };

  return (
    <div
      ref={relaxRef}
      className="absolute left-0 top-full z-20 h-full w-full overflow-hidden bg-[#F8F6EF] pt-[4.75rem] text-[#1E2A21] lg:pt-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12vw] top-[14%] z-0 hidden h-[70svh] w-[52vw] rounded-full bg-[#E5DBC0] opacity-85 blur-[130px] lg:block"
      />

      <div className="relative z-10 flex h-full w-full flex-col border-t border-[#1E2A21]/15 lg:grid lg:grid-cols-12">
        <div className="order-2 flex min-h-0 flex-1 flex-col justify-between border-[#1E2A21]/15 lg:order-1 lg:col-span-6 lg:border-r">
          <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-[6vw] py-3 sm:px-[5vw] sm:py-6 lg:overflow-visible lg:px-[4.5vw] lg:py-10">
            <h1
              data-relax
              style={SERIF_FONT}
              className="text-[clamp(1.75rem,7.4vw,2.4rem)] font-normal leading-[1.02] tracking-[-0.015em] text-[#1E2A21] sm:text-[clamp(2.25rem,5vw,3.25rem)] lg:text-[clamp(2.75rem,5.6vw,6rem)]"
            >
              Just relax, and
              <br />
              go with the flow
            </h1>

            <p
              data-relax
              className="mt-2.5 line-clamp-2 max-w-[44ch] text-[13px] leading-[1.55] text-[#1E2A21]/80 [@media(max-height:600px)]:hidden sm:mt-5 sm:line-clamp-none sm:text-[15.5px] sm:leading-[1.65] lg:mt-7 lg:text-[16.5px]"
            >
              Wine Relax is a premium semi-sweet wine produced from Rkatsiteli
              grapes using the ancient technology, which has been used by
              Georgian winemakers for 8000 years.
            </p>

            <div data-relax className="mt-3 sm:mt-8 lg:mt-12">
              <DiscoverOurWinesButton href="/Wine" />
            </div>
          </div>

          <div
            data-relax
            className="flex shrink-0 flex-row items-center justify-between gap-3 border-t border-[#1E2A21]/15 px-[6vw] py-2 sm:gap-4 sm:px-[5vw] sm:py-4 lg:px-[4.5vw] lg:py-3.5"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="relative hidden h-14 w-24 shrink-0 overflow-hidden bg-[#E5DBC0]/60 sm:block">
                <Image
                  src="/assets/imgs/Background/home/BackgroundHome.png"
                  alt="Wine tasting"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="max-w-[30ch]">
                <p
                  style={SERIF_FONT}
                  className="text-[14px] font-medium leading-snug text-[#1E2A21] sm:text-[16px]"
                >
                  Come to the wine-tasting
                </p>
                <p className="mt-0.5 line-clamp-2 text-[11.5px] leading-[1.45] text-[#1E2A21]/75 sm:mt-1 sm:line-clamp-none">
                  Only on June 1 there will be a tasting of our new wines in
                  Tbilisi. To sign up for the tasting.
                </p>
              </div>
            </div>

            <MagneticWrapper range={0.1}>
              <div className="-m-4 shrink-0 p-4">
                <div className="relative h-[72px] w-[72px] lg:h-auto lg:w-auto">
                  <div className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.6] lg:static lg:translate-x-0 lg:translate-y-0 lg:scale-[0.65]">
                    <OurStoryButton />
                  </div>
                </div>
              </div>
            </MagneticWrapper>
          </div>
        </div>

        <div className="relative order-1 flex shrink-0 flex-col border-b border-[#1E2A21]/15 lg:order-2 lg:col-span-6 lg:h-full lg:min-h-0 lg:border-b-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 w-px bg-[#1E2A21]/15"
          />

          <div className="absolute left-1/2 top-[34%] z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
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
            className="relative h-[32svh] sm:h-[36svh] md:h-[38svh] lg:h-auto lg:min-h-0 lg:flex-1"
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
                    className="flex h-full w-1/3 items-center justify-center px-2 py-2 sm:py-4"
                  >
                    <div className="relative flex h-[28svh] w-full items-center justify-center sm:h-[32svh] md:h-[34svh] lg:h-[62svh]">
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

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-2 lg:hidden">
              <button
                type="button"
                onClick={handlePrevWine}
                disabled={isSliding}
                aria-label="Previous wine bottle"
                className="pointer-events-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#1E2A21]/55 bg-[#F8F6EF] text-[#1E2A21] transition-colors duration-300 active:border-[#1E2A21] active:bg-[#1E2A21] active:text-[#F8F6EF] disabled:cursor-default disabled:opacity-60"
              >
                <ChevronLeft aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNextWine}
                disabled={isSliding}
                aria-label="Next wine bottle"
                className="pointer-events-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#1E2A21]/55 bg-[#F8F6EF] text-[#1E2A21] transition-colors duration-300 active:border-[#1E2A21] active:bg-[#1E2A21] active:text-[#F8F6EF] disabled:cursor-default disabled:opacity-60"
              >
                <ChevronRight aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div data-relax className="grid grid-cols-2">
            {textWines.map((wine, column) => (
              <div key={column} className="px-3.5 pb-3 sm:px-6 sm:pb-6 lg:px-8">
                <div className="min-h-[4.75rem] border-t border-[#1E2A21]/15 pt-3.5 sm:min-h-[5.5rem]">
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
                        className="text-[12px] font-normal leading-snug text-[#1E2A21] sm:text-[12.5px]"
                      >
                        {wine.title}
                      </motion.p>
                      <motion.div
                        variants={infoItemVariants}
                        className="mt-3 flex items-center justify-between gap-2"
                      >
                        <span className="text-[12px] text-[#1E2A21]/75">
                          {wine.price}
                        </span>
                        <Link
                          href={wine.href}
                          aria-label={`View details for ${wine.title}`}
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1E2A21]/45 text-[12px] leading-none text-[#1E2A21] transition-colors duration-300 hover:border-[#1E2A21] hover:bg-[#1E2A21] hover:text-[#F8F6EF]"
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
        </div>
      </div>
    </div>
  );
}