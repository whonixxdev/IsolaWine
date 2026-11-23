"use client";

import { SERIF_FONT, STATS } from "./home-hero.data";

export default function HeroSunsetPhase() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[6vw] top-[11%] w-[88vw] sm:left-[7vw] sm:top-[14%] sm:w-[65vw] md:w-[46vw] lg:left-[8vw] lg:top-[17%] lg:w-[32vw]">
        <p
          data-phase
          className="invisible mb-3 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-[#F4F1EA] sm:mb-4 sm:text-[10px] sm:tracking-[0.34em] lg:mb-5 lg:gap-4 lg:text-[11px] lg:tracking-[0.4em]"
        >
          <span className="h-px w-6 bg-[#C49A3C] sm:w-8 lg:w-10" />
          Born on the island
        </p>
        <h2
          data-phase
          style={SERIF_FONT}
          className="invisible text-[clamp(1.65rem,7.2vw,2.25rem)] font-medium leading-[1.06] text-[#F4F1EA] sm:text-[clamp(2.1rem,4.5vw,2.85rem)] lg:text-[clamp(2.25rem,3.6vw,4rem)] lg:leading-[1.05]"
        >
          Italian soul,
          <br />
          Balinese sunset.
        </h2>
      </div>

      <div
        data-phase
        className="invisible absolute bottom-[12%] left-[8vw] hidden items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-[#F4F1EA] lg:flex"
      >
        <span className="h-12 w-px animate-pulse bg-[#C49A3C]" />
        Scroll
      </div>

      <div
        data-phase
        className="invisible absolute bottom-[3%] left-[6vw] w-[88vw] border-t border-[#C49A3C] bg-[#1E2A21]/85 px-4 pb-4 pt-4 sm:bottom-[5%] sm:left-[7vw] sm:w-[76vw] sm:px-5 sm:pb-5 sm:pt-5 md:w-[54vw] lg:hidden"
      >
        <p className="text-[12.5px] leading-[1.6] text-[#F4F1EA] sm:text-[13.5px]">
          Isola Wine is a boutique Balinese winery bringing the character of
          Italian winemaking to the island. Every bottle is made to be shared
          slowly, with good company.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#F4F1EA]/20 pt-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                style={SERIF_FONT}
                className="text-[20px] leading-none text-[#F4F1EA]"
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#F4F1EA]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[12%] right-[8vw] hidden w-[26vw] lg:block">
        <p
          data-phase
          className="invisible text-[15px] leading-relaxed text-[#F4F1EA]/90"
        >
          Isola brings the character of Italian winemaking to the island of Bali.
          Every bottle is made to be shared slowly, with good company and a long
          view of the horizon.
        </p>
        <div
          data-phase
          className="invisible mt-8 grid grid-cols-3 gap-6 border-t border-[#C49A3C] pt-5"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                style={SERIF_FONT}
                className="text-[28px] leading-none text-[#F4F1EA]"
              >
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#F4F1EA]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}