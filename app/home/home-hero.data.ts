export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  number: string;
  title: string;
  text: string;
}

export interface WineShowcaseItem {
  id: string;
  title: string;
  price: string;
  image: string;
  alt: string;
  href: string;
}

export const SERIF_FONT = { fontFamily: '"Cormorant Garamond", Georgia, serif' };

export const GATE_WINDOW = "M586 300L676 210H836L926 300V982H586Z";

export const BOTTLE_VISIBLE_RATIO = 0.8;

export const STATS: StatItem[] = [
  { value: "2012", label: "Established" },
  { value: "Bali", label: "Produced in" },
  { value: "Italian", label: "Pure wine" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    number: "01",
    title: "Vineyard walk",
    text: "Wander between the vines and breathe in the island air.",
  },
  {
    number: "02",
    title: "Winery visit",
    text: "See the place where every bottle of Isola is made.",
  },
  {
    number: "03",
    title: "Slow tasting",
    text: "Pour, sip and take your time with good company.",
  },
];

export const WINE_SHOWCASE: WineShowcaseItem[] = [
  {
    id: "isola-rosso",
    title: "Isola Wine: Isola Rosso",
    price: "$10 / $42",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Isola Wine: Isola Rosso bottle",
    href: "/Gallery/wine",
  },
  {
    id: "wine-relax-semi-sweet",
    title: "Wine Relax: red semi-sweet",
    price: "$12 / $48",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Wine Relax: red semi-sweet bottle",
    href: "/Gallery/wine",
  },
  {
    id: "solaris-solero",
    title: "Isola Reserve: Solaris Solero",
    price: "$15 / $58",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Isola Reserve: Solaris Solero bottle",
    href: "/Gallery/wine",
  },
  {
    id: "sunset-cuvee",
    title: "Isola Estate: Sunset Cuvee",
    price: "$18 / $68",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Isola Estate: Sunset Cuvee bottle",
    href: "/Gallery/wine",
  },
];