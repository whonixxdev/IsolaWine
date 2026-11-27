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
    id: "standar-rosso-reg",
    title: "Rosso",
    price: "$10 / $42",
    image: "/assets/imgs/botol/standar/StandarRossoreg.png",
    alt: "Isola Rosso bottle",
    href: "/Shop",
  },
  {
    id: "standar-bianco",
    title: "Bianco",
    price: "$12 / $48",
    image: "/assets/imgs/botol/standar/StandarBianco.png",
    alt: "Isola Bianco bottle",
    href: "/Shop",
  },
  {
    id: "limited-riserva",
    title: "Isola Riserva",
    price: "$15 / $58",
    image: "/assets/imgs/botol/limited/LimitedRiserva.png",
    alt: "Isola Riserva limited edition bottle",
    href: "/Shop",
  },
  {
    id: "standar-moscato-dolce-reg",
    title: "Moscato Dolce",
    price: "$12 / $48",
    image: "/assets/imgs/botol/standar/StandarMoscatoDolcereg.png",
    alt: "Isola Moscato Dolce bottle",
    href: "/Shop",
  },
  {
    id: "standar-rubino-dolce",
    title: "Rubino Dolce",
    price: "$12 / $48",
    image: "/assets/imgs/botol/standar/StandarRubinoDolce.png",
    alt: "Isola Rubino Dolce bottle",
    href: "/Shop",
  },
  {
    id: "standar-bianco-raw",
    title: "Bianco Raw",
    price: "$14 / $54",
    image: "/assets/imgs/botol/standar/StandarBiancoRaw.png",
    alt: "Isola Bianco Raw bottle",
    href: "/Shop",
  },
  {
    id: "standar-rosso-raw",
    title: "Rosso Raw",
    price: "$14 / $54",
    image: "/assets/imgs/botol/standar/StandarRossoRaw.png",
    alt: "Isola Rosso Raw bottle",
    href: "/Shop",
  },
  {
    id: "limited-bianco",
    title: "Isola Bianco Limited",
    price: "$16 / $62",
    image: "/assets/imgs/botol/limited/LimitedBianco.png",
    alt: "Isola Bianco Limited bottle",
    href: "/Shop",
  },
  {
    id: "limited-moscato-dolce",
    title: "Isola Moscato Dolce Limited",
    price: "$16 / $62",
    image: "/assets/imgs/botol/limited/LimitedMoscatoDolce.png",
    alt: "Isola Moscato Dolce Limited bottle",
    href: "/Shop",
  },
  {
    id: "limited-rosato",
    title: "Isola Rosato Limited",
    price: "$16 / $62",
    image: "/assets/imgs/botol/limited/LimitedRosato.png",
    alt: "Isola Rosato Limited bottle",
    href: "/Shop",
  },
  {
    id: "limited-rosso",
    title: "Isola Rosso Limited",
    price: "$16 / $62",
    image: "/assets/imgs/botol/limited/LimitedRosso.png",
    alt: "Isola Rosso Limited bottle",
    href: "/Shop",
  },
];