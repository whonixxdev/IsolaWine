"use client";

import Link from "next/link";
import MagneticWrapper from "../../animations/Magnetic/MagneticWrapper";

interface DiscoverOurWinesButtonProps {
  href?: string;
  label?: string;
  range?: number;
  className?: string;
}

export default function DiscoverOurWinesButton({
  href = "/Gallery/wine",
  label = "DISCOVER OUR WINES",
  range = 0.1,
  className = "",
}: DiscoverOurWinesButtonProps) {
  return (
    <MagneticWrapper range={range}>
      <div className={`-m-5 inline-block p-5 ${className}`}>
        <Link
          href={href}
          className="inline-flex items-center gap-3 rounded-full border border-[#1E2A21]/65 bg-[#F8F6EF]/70 px-7 py-3 text-[10px] uppercase tracking-[0.28em] text-[#1E2A21] transition-colors duration-300 hover:border-[#1E2A21] hover:bg-[#1E2A21] hover:text-[#F8F6EF]"
        >
          <span>{label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </MagneticWrapper>
  );
}