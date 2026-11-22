import TimelineItem from "../components/animations/Progress/TimelineItem";
import TimelineProgress from "../components/animations/Progress/TimelineProgress";

interface Milestone {
  id: string;
  label: string;
  side: "left" | "right";
  description: string;
  logo: string;
  logoAlt: string;
}

const MILESTONES: Milestone[] = [
  {
    id: "2012",
    label: "In 2012",
    side: "right",
    description:
      "we embarked on our mission to produce authentic, high-quality organic wine variations in Bali. This period marked the beginning of the long road cultivating our vineyards and developing a unique agronomy program in the tropics.",
    logo: "/assets/logo/LogoAbout.png",
    logoAlt: "Isola Wine crest",
  },
  {
    id: "2014",
    label: "2014",
    side: "left",
    description:
      "was the year we released our first and limited batch of wine to the market. Two years of relentless experimentation, research, and development, as well as an iron will to succeed without compromising our non-negotiable quality standards, were required to reach this milestone in our history.",
    logo: "/assets/logo/LogoPura.png",
    logoAlt: "Balinese temple illustration",
  },
  {
    id: "today",
    label: "Today",
    side: "right",
    description:
      "our vineyards are mature and productive, and our winery is operating at full capacity. The quality of our wine is meeting and exceeding our expectations, as we continue to fine-tune our production process. We are now years into the development of Isola Wines, and we have only just started. This is a reflection of where we are today, and you can expect great things from us!",
    logo: "/assets/logo/LogoDance.png",
    logoAlt: "Balinese dancer illustration",
  },
];

export default function AboutTimeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <TimelineProgress>
        {MILESTONES.map((item) => (
          <TimelineItem
            key={item.id}
            label={item.label}
            side={item.side}
            description={item.description}
            logo={item.logo}
            logoAlt={item.logoAlt}
          />
        ))}
      </TimelineProgress>
    </section>
  );
}