import type { Metadata } from "next";
import SectionProgressDivider from "../components/animations/Progress/SectionProgressDivider";
import AboutBackground from "./AboutBackground";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutStory from "./AboutStory";
import AboutTimeline from "./AboutTimeline";

export const metadata: Metadata = {
  title: "About | Isola Wine",
  description:
    "Discover the mission, timeline, and Italian winemaking heritage behind Isola Wine in Bali, Indonesia.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutBackground>
        <div className="pt-4 md:pt-6">
          <AboutMission />
          <AboutTimeline />
          <SectionProgressDivider className="mb-1" />
          <AboutStory />
        </div>
      </AboutBackground>
    </main>
  );
}