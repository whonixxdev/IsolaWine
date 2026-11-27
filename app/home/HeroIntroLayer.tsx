"use client";

import type { RefObject } from "react";
import Image from "next/image";
import MagneticWrapper from "../components/animations/Magnetic/MagneticWrapper";
import OurStoryButton from "../components/ui/button/OurStoryButton";
import { GATE_WINDOW, SERIF_FONT } from "./home-hero.data";

interface HeroIntroLayerProps {
  photoRef: RefObject<HTMLDivElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
  gateRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  labelsRef: RefObject<HTMLDivElement | null>;
}

export default function HeroIntroLayer({
  photoRef,
  overlayRef,
  gateRef,
  titleRef,
  labelsRef,
}: HeroIntroLayerProps) {
  return (
    <>
      <div ref={photoRef} className="absolute inset-0 z-0">
        <Image
          src="/assets/imgs/Background/home/BackgroundHome.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        ref={overlayRef}
        className="absolute inset-0 z-[5] bg-[#1E2A21] opacity-0"
      />

      <div ref={gateRef} className="absolute inset-0 z-10">
        <svg
          viewBox="0 0 1512 982"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <path
            d={`M-4000 -4000H5500V5000H-4000Z ${GATE_WINDOW}`}
            fill="#F4F1EA"
            fillRule="evenodd"
          />
          <path
            d={GATE_WINDOW}
            fill="none"
            stroke="#C49A3C"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <h1
        ref={titleRef}
        aria-label="Isola"
        style={SERIF_FONT}
        className="absolute inset-0 z-20 flex items-center justify-center pb-[8svh] text-[27vw] font-medium leading-none tracking-[0.04em] text-[#C49A3C] lg:text-[23vw]"
      >
        {"ISOLA".split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            aria-hidden="true"
            className="-mx-[0.05em] -my-[0.1em] inline-block overflow-hidden px-[0.05em] py-[0.1em]"
          >
            <span data-letter className="inline-block opacity-0">
              {letter}
            </span>
          </span>
        ))}
      </h1>

      <div ref={labelsRef} className="absolute inset-0 z-20">
        <div className="absolute left-[5vw] top-[12.5%] lg:left-[10vw] lg:top-[200px]">
          <p
            data-intro
            className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#1E2A21] opacity-0 lg:gap-4 lg:text-[11px] lg:tracking-[0.4em]"
          >
            <span className="hidden h-px w-10 bg-[#C49A3C] lg:block" />
            Pure Italian Wine
          </p>
          <p
            data-intro
            style={SERIF_FONT}
            className="mt-5 hidden text-[clamp(1.5rem,2.1vw,2.5rem)] italic leading-[1.15] text-[#1E2A21] opacity-0 lg:block"
          >
            Poured slowly,
            <br />
            enjoyed unhurried.
          </p>
        </div>

        <div className="pointer-events-auto absolute bottom-[12%] left-[8vw] hidden lg:block">
          <div data-intro className="opacity-0">
            <MagneticWrapper range={0.35}>
              <div className="-m-5 p-5">
                <OurStoryButton />
              </div>
            </MagneticWrapper>
          </div>
        </div>

        <div className="absolute right-[6vw] top-[12.5%] text-right lg:bottom-[12%] lg:right-[8vw] lg:top-auto">
          <p
            data-intro
            className="flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.3em] text-[#1E2A21] opacity-0 lg:gap-4 lg:text-[11px] lg:tracking-[0.4em]"
          >
            Produced in Bali
            <span className="hidden h-px w-10 bg-[#C49A3C] lg:block" />
          </p>
          <p
            data-intro
            style={SERIF_FONT}
            className="mt-5 hidden text-[clamp(1.5rem,2.1vw,2.5rem)] italic leading-[1.15] text-[#1E2A21] opacity-0 lg:block"
          >
            Italian craft,
            <br />
            island sunsets.
          </p>
        </div>
      </div>
    </>
  );
}