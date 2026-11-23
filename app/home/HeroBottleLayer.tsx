"use client";

import type { RefObject } from "react";
import Image from "next/image";

interface HeroBottleLayerProps {
  bottleRef: RefObject<HTMLDivElement | null>;
}

export default function HeroBottleLayer({ bottleRef }: HeroBottleLayerProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-center">
      <div ref={bottleRef} className="-mb-[7svh] will-change-transform">
        <Image
          src="/assets/imgs/botol/isolabottle3.png"
          alt="Isola Wine bottle"
          width={600}
          height={1800}
          priority
          className="h-[80svh] w-auto"
        />
      </div>
    </div>
  );
}