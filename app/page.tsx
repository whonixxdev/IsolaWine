"use client";

import dynamic from "next/dynamic";
import LocationExplorer from "@/app/components/location/LocationExplorer";
import HomeHero from "./home/HomeHero";
import SectionAboutHome from "./home/sectionAbouthome";

export default function Home() {
  return (
    <main className="bg-[#F8F6EF]">
      <HomeHero />
      <SectionAboutHome />
    </main>
  );
}
