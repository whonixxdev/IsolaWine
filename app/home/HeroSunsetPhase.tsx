"use client";

import { SERIF_FONT, STATS } from "./home-hero.data";

export default function HeroSunsetPhase() {
  return (
    <div className="absolute inset-0 z-20">
      <div className="absolute left-[6vw] top-[12.5%] w-[88vw] lg:left-[8vw] lg:top-[17%] lg:w-[32vw]">
        <p
          data-phase
          className="invisible mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#F4F1EA] lg:mb-5 lg:gap-4 lg:text-[11px] lg:tracking-[0.4em]"
        >
          <span className="h-px w-6 bg-[#C49A3C] lg:w-10" />
          Born on the island
        </p>
        <h2
          data-phase
          style={SERIF_FONT}
          className="invisible text-[clamp(1.75rem,7.6vw,2.4rem)] font-medium leading-[1.05] text-[#F4F1EA] lg:text-[clamp(2.25rem,3.6vw,4rem)]"
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

      <div className="absolute bottom-[4%] left-[6vw] w-[88vw] lg:bottom-[12%] lg:left-auto lg:right-[8vw] lg:w-[26vw]">
        <p
          data-phase
          className="invisible text-[12.5px] leading-relaxed text-[#F4F1EA]/90 lg:text-[15px]"
        >
          Isola brings the character of Italian winemaking to the island of Bali.
          Every bottle is made to be shared slowly, with good company and a long
          view of the horizon.
        </p>
        <div
          data-phase
          className="invisible mt-8 hidden grid-cols-3 gap-6 border-t border-[#C49A3C] pt-5 lg:grid"
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