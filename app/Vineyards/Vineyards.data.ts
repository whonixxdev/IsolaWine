export interface ImageSource {
  image: string | null;
  imageAlt: string;
}

export interface GrapeVariety extends ImageSource {
  id: string;
  name: string;
  type: string;
  description: string;
}

export interface VineyardsFeatureContent extends ImageSource {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export const VINEYARDS_HERO: ImageSource = {
  image: "/assets/imgs/Background/BackgroundVineyards.png",
  imageAlt: "Ripe dark grapes on the vine at the Isola vineyards in Bali",
};

export const GRAPE_SECTION = {
  eyebrow: "Italian grapes in the tropics",
  title: "Grape Varieties",
  intro:
    "Our vineyards grow a small selection of grape varieties on the island of Bali, cultivated with organic methods and tended by our local team under the guidance of our Sicilian winemaker.",
};

export const GRAPE_VARIETIES: GrapeVariety[] = [
  {
    id: "malvasia-nera",
    name: "Malvasia Nera",
    type: "Red grape",
    description:
      "A dark-skinned Italian grape known for its aromatic, fruit-forward character.",
    image: null,
    imageAlt: "Malvasia Nera grapes on the vine",
  },
  {
    id: "syrah",
    name: "Syrah",
    type: "Red grape",
    description:
      "A classic red grape that thrives in warm climates, giving deep colour and structure.",
    image: null,
    imageAlt: "Syrah grapes on the vine",
  },
  {
    id: "muscat-bleu",
    name: "Muscat Bleu",
    type: "Aromatic grape",
    description:
      "An aromatic grape with the distinctive perfume of the muscat family.",
    image: null,
    imageAlt: "Muscat Bleu grapes on the vine",
  },
  {
    id: "chenin-blanc",
    name: "Chenin Blanc",
    type: "White grape",
    description:
      "A versatile white grape with bright acidity and a fresh, fruity character.",
    image: null,
    imageAlt: "Chenin Blanc grapes on the vine",
  },
];

export const VINEYARDS_FEATURES: VineyardsFeatureContent[] = [
  {
    id: "italian-knowledge-balinese-tradition",
    eyebrow: "Italy meets Bali",
    title: "Italian Knowledge and Balinese Tradition",
    paragraphs: [
      "Our vineyards are tended by a local Balinese team, working alongside our Sicilian winemaker, Giacomo Anselmi, who personally trains our staff.",
      "Italian know-how guides the way we care for the vines, while the daily experience of our Balinese team shapes how that knowledge is applied to the island’s land and climate.",
      "Together they follow organic principles and the highest European standards, in the vineyard as in the winery.",
    ],
    image: null,
    imageAlt: "A Balinese vineyard worker and an Italian winemaker picking grapes together",
  },
  {
    id: "concept-of-terroir",
    eyebrow: "Terroir",
    title: "Concept of Terroir",
    paragraphs: [
      "Terroir is the sum of everything that shapes a vine: the soil, the climate, the landscape and the people who tend it.",
      "In Bali, that means a tropical island setting very different from the classic wine regions of Europe, and it gives our wines a sense of place that is their own.",
    ],
    image: null,
    imageAlt: "A vineyard worker holding a bunch of freshly picked grapes",
  },
];

export const VINEYARDS_CLOSING = {
  eyebrow: "From the vine",
  title: "Discover our wines",
  text: "Every bottle of Isola begins in these vineyards.",
  href: "/Gallery/wine",
};