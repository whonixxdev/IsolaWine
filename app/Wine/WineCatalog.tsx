"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import WineHero from "./wineHero";
import WineList from "./WineList";
import type { WineFilterValue } from "./Winedata";

export default function WineCatalog() {
  const [active, setActive] = useState<WineFilterValue>("All");

  return (
    <MotionConfig reducedMotion="user">
      <WineHero active={active} onChange={setActive} />
      <WineList filter={active} />
    </MotionConfig>
  );
}
