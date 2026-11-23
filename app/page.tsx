"use client";

import dynamic from "next/dynamic";
import LocationExplorer from "@/app/components/location/LocationExplorer";
import HomeHero from "./home/HomeHero";
import SectionAboutHome from "./home/sectionAbouthome";
import SectionWorldHome from "./home/sectionWorldHome";
import SectionStockistsHome from "./home/sectionStockistsHome";

export default function Home() {
  return (
    <main className="bg-[#F8F6EF]">
      <HomeHero />
      <SectionAboutHome />
      <SectionWorldHome />
      <SectionStockistsHome />
    </main>
  );
}
