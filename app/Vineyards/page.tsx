import { Fragment } from "react";
import type { Metadata } from "next";
import SectionProgressDivider from "../components/animations/Progress/SectionProgressDivider";
import GrapeVarieties from "./GrapeVarieties";
import VineyardsClosing from "./VineyardsClosing";
import VineyardsFeature from "./VineyardsFeature";
import VineyardsHero from "./VineyardsHero";
import { VINEYARDS_FEATURES } from "./Vineyards.data";

export const metadata: Metadata = {
  title: "Vineyards | Isola Wine",
  description: "The vineyards behind Isola Wine, in Bali, Indonesia.",
};

export default function VineyardsPage() {
  return (
    <main className="bg-[#F8F6EF]">
      <VineyardsHero />
      <GrapeVarieties />
      {VINEYARDS_FEATURES.map((feature, index) => {
        const isEven = index % 2 === 0;

        return (
          <Fragment key={feature.id}>
            <div className={isEven ? "" : "-scale-x-100"}>
              <SectionProgressDivider />
            </div>
            <VineyardsFeature
              content={feature}
              imagePosition={isEven ? "left" : "right"}
            />
          </Fragment>
        );
      })}
      <VineyardsClosing />
    </main>
  );
}