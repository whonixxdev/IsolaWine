import SectionProgressDivider from "../components/animations/Progress/SectionProgressDivider";
import AboutBackground from "./AboutBackground";
import AboutMission from "./AboutMission";
import AboutStory from "./AboutStory";
import AboutTimeline from "./AboutTimeline";

export default function AboutPage() {
  return (
    <main>
      <AboutBackground>
        <div className="pt-28">
          <AboutMission />
          <AboutTimeline />
          <SectionProgressDivider className="mb-1" />
          <AboutStory />
        </div>
      </AboutBackground>
    </main>
  );
}