import type { Metadata } from "next";
import WineryHero from "./WineryHero";
import WinerySection from "./WinerySection";
import { WINERY_SECTIONS } from "./Winerydata";

export const metadata: Metadata = {
  title: "Winery | Isola Wine",
  description:
    "The winery where every bottle of Isola Wine is made, in Bali, Indonesia.",
};

export default function WineryPage() {
  return (
    <main className="bg-[#F8F6EF]">
      <WineryHero />
      {WINERY_SECTIONS.map((section, index) => (
        <WinerySection
          key={section.number ?? index}
          content={section}
          imagePosition={index % 2 === 0 ? "left" : "right"}
          showTopDivider={index !== 0}
          showRings={index === WINERY_SECTIONS.length - 1}
        />
      ))}
    </main>
  );
}
