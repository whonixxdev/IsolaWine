export type WineCategory = "Limited" | "Standard" | "Small";

export type WineFilterValue = WineCategory | "All";

export interface WineSpec {
  label: string;
  value: string;
}

export interface WineItemData {
  id: string;
  name: string;
  type: string;
  category: WineCategory;
  image: string;
  imageAlt: string;
  grape: string;
  notes?: string;
  specs: WineSpec[];
  tasting: string;
  pairing: string;
}

export const WINE_HERO = {
  eyebrow: "Our Collection",
  title: "Wine",
  description:
    "Every Isola wine is grown and made in Bali to Italian standards. Choose a selection to see its grape varieties, character, serving details, and how to order.",
} as const;

export const WINE_FILTERS: readonly WineFilterValue[] = [
  "Limited",
  "Standard",
  "Small",
  "All",
];

export const WINE_FILTER_NOTES: Record<WineFilterValue, string> = {
  All: "Every wine in the Isola collection.",
  Limited: "Limited editions, available while stock lasts.",
  Standard: "The core range, made every year.",
  Small: "Small batches, made in reduced quantities.",
};

export const WINES: WineItemData[] = [
  {
    id: "limited-bianco",
    name: "Isola Bianco Limited",
    type: "White wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedBianco.png",
    imageAlt: "Isola Bianco Limited bottle",
    grape: "Muscat St. Vallier and Chenin Blanc",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12% ABV" },
      { label: "Serving", value: "7–10 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "Fresh, mineral, and aromatic with pale yellow color, yellow-fleshed fruits, citrus blossom, jasmine, and a savory, well-balanced finish.",
    pairing:
      "Aperitif, white meats, seafood, soft cheeses, green vegetables, and spicy or garlicky cuisine.",
  },
  {
    id: "limited-moscato-dolce",
    name: "Isola Moscato Dolce Limited",
    type: "Medium sweet & semi-sparkling white wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedMoscatoDolce.png",
    imageAlt: "Isola Moscato Dolce Limited bottle",
    grape: "100% Muscat St. Vallier",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 10% ABV" },
      { label: "Serving", value: "6–8 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "Straw yellow color with an intensely aromatic bouquet of tropical fruits and white flowers; medium sweet, gently effervescent, and refreshing.",
    pairing:
      "Aperitif, light dishes, Asian cuisine, or desserts.",
  },
  {
    id: "limited-riserva",
    name: "Isola Riserva",
    type: "Dry red wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedRiserva.png",
    imageAlt: "Isola Riserva limited edition bottle",
    grape: "100% Syrah",
    notes: "Aged in tank and barrel, refinement in the bottle",
    specs: [
      { label: "Size & ABV", value: "750ml – 13.5% ABV" },
      { label: "Serving", value: "14–16 °C" },
      { label: "Consume", value: "Improves for more than 5 years" },
    ],
    tasting:
      "Sensual and enveloping with an intense ruby colour, rich ripe red and black fruits, spice, balsamic undertones, and savoury depth.",
    pairing:
      "Pasta, lasagna, roasted or stewed meats, cheeses, and cured meats.",
  },
  {
    id: "limited-rosato",
    name: "Isola Rosato Limited",
    type: "Dry rose wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedRosato.png",
    imageAlt: "Isola Rosato Limited bottle",
    grape: "Malvasia Nera and Muscat Bleu",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12.5% ABV" },
      { label: "Serving", value: "9–12 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "Delicate pink color with refined freshness and minerality, fresh red berries, floral hints of rose, and a touch of spice.",
    pairing:
      "Aperitif, seafood, cured meats, roasted poultry, and starchy sides.",
  },
  {
    id: "limited-rosso",
    name: "Isola Rosso Limited",
    type: "Dry red wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedRosso.png",
    imageAlt: "Isola Rosso Limited bottle",
    grape: "Malvasia Nera and Syrah",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 13% ABV" },
      { label: "Serving", value: "12–15 °C" },
      { label: "Consume", value: "Over 3 years" },
    ],
    tasting:
      "Ruby red color with violet reflections, ripe red fruits, balsamic undertones, complex spicy notes, and a hint of dark chocolate.",
    pairing:
      "Eggplant-based dishes, mushrooms, roasted or stewed meats, cheeses, and cured meats.",
  },
  {
    id: "standar-bianco",
    name: "Bianco",
    type: "Dry white wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarBianco.png",
    imageAlt: "Isola Bianco standard bottle",
    grape: "Muscat St. Vallier and Chenin Blanc",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12% ABV" },
      { label: "Serving", value: "7–10 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "This wine is fresh, mineral, and aromatic. It presents a pale yellow color and a rich bouquet of yellow-fleshed fruits, harmoniously blended with delicate white floral notes of citrus blossom and jasmine. On the palate, it's savory, fresh, and well-balanced, offering both elegance and versatility.",
    pairing:
      "Excellent as an aperitif and perfectly suited for a wide range of dishes, including white meats, seafood, soft cheeses, green vegetables, and spicy or garlicky cuisine.",
  },
  {
    id: "standar-bianco-raw",
    name: "Bianco Raw",
    type: "Natural dry white wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarBiancoRaw.png",
    imageAlt: "Isola Bianco Raw bottle",
    grape: "100% Muscat St Vallier",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12.5% ABV" },
      { label: "Serving", value: "7–12 °C" },
      { label: "Consume", value: "Over 2 years" },
    ],
    tasting:
      "Fermented spontaneously, unfiltered and crafted without added sulphites, it offers a golden yellow color with orange reflections and an exotic and aromatic bouquet, with notes of citrus zest, ginger, tropical fruit, and honey, accompanied by floral and herbal nuances. On the palate, it's fresh, savoury, and elegant.",
    pairing:
      "Excellent as an aperitif or paired with light seafood, vegetables, or white meats – even ideal as a meditation wine.",
  },
  {
    id: "standar-moscato-dolce-reg",
    name: "Moscato Dolce",
    type: "Medium sweet & semi-sparkling white wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarMoscatoDolcereg.png",
    imageAlt: "Isola Moscato Dolce regular bottle",
    grape: "100% Muscat St. Vallier",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 10% ABV" },
      { label: "Serving", value: "6–8 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "This sweet and lightly sparkling white wine presents a straw yellow color. The bouquet is intensely aromatic, highlighting tropical fruits delicately intertwined with notes of white flowers. On the palate, it is medium sweet, gently effervescent, and delivers a refreshing yet intense finish.",
    pairing:
      "An excellent choice as an aperitif, or paired with light dishes, Asian cuisine, or desserts.",
  },
  {
    id: "standar-rosato-reg",
    name: "Rosato",
    type: "Dry rose wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRosatoreg.png",
    imageAlt: "Isola Rosato regular bottle",
    grape: "Malvasia Nera and Muscat Bleu",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12.5% ABV" },
      { label: "Serving", value: "9–12 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "This wine showcases a refined balance of freshness and minerality. Radiant in appearance with a delicate pink color, it opens with an inviting bouquet of fresh red berries, floral hints of rose, and a touch of spice. Smooth and vibrant on the palate.",
    pairing:
      "Excellent as an aperitif, this versatile wine complements a wide range of dishes, including seafood, cured meats, roasted poultry, and starchy sides, making it a delightful choice for any occasion.",
  },
  {
    id: "standar-rosso-raw",
    name: "Rosso Raw",
    type: "Natural dry red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRossoRaw.png",
    imageAlt: "Isola Rosso Raw bottle",
    grape: "Malvasia Nera and Syrah",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 13% ABV" },
      { label: "Serving", value: "12–16 °C" },
      { label: "Consume", value: "Over 3 years" },
    ],
    tasting:
      "Fermented spontaneously, unfiltered and crafted without added sulphites, this wine reveals a lively ruby red colour with purple reflections. On the nose, it presents layered aromas of red fruit, enhanced by balsamic and spicy notes. Fresh, mineral, and fruity on the palate, it is soft yet complex.",
    pairing:
      "Pairing beautifully with eggplant, mushrooms, roasted meats, cheeses, and cured meats.",
  },
  {
    id: "standar-rosso-reg",
    name: "Rosso",
    type: "Dry red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRossoreg.png",
    imageAlt: "Isola Rosso standard bottle",
    grape: "Malvasia Nera and Syrah",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 13% ABV" },
      { label: "Serving", value: "12–15 °C" },
      { label: "Consume", value: "Over 3 years" },
    ],
    tasting:
      "Displaying a ruby red color with violet reflections, it opens with an expressive bouquet of ripe red fruits, beautifully layered with balsamic undertones, complex spicy notes, and a hint of dark chocolate. On the palate, it's soft, elegant, and well-rounded, offering both freshness and depth.",
    pairing:
      "This wine pairs harmoniously with eggplant-based dishes, mushrooms, roasted or stewed meats, as well as a variety of cheeses and cured meats, making it a versatile choice for refined dining experiences.",
  },
  {
    id: "standar-rubino-dolce",
    name: "Rubino Dolce",
    type: "Medium sweet & semi-sparkling red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRubinoDolce.png",
    imageAlt: "Isola Rubino Dolce bottle",
    grape: "100% Malvasia Nera",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12.5% ABV" },
      { label: "Serving", value: "8–12 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "It displays a light ruby red color and a vibrant aromatic profile of red fruit and mixed berries, complemented by floral notes, as well as a touch of spice. On the palate, it's soft, fresh, and delicately sweet, with a balanced sparkle and pleasant intensity.",
    pairing:
      "Ideal for versatile pairings, it complements chicken, pork, soft to medium cheeses, chocolate, and fruit-based desserts.",
  },
  {
    id: "standar-syrah-riserve",
    name: "Riserva Syrah",
    type: "Dry red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarSyrahRiserve.PNG",
    imageAlt: "Isola Riserva Syrah bottle",
    grape: "100% Syrah",
    notes: "Aged in tank and barrel, refinement in the bottle",
    specs: [
      { label: "Size & ABV", value: "750ml – 13.5% ABV" },
      { label: "Serving", value: "14–16 °C" },
      { label: "Consume", value: "Improves for more than 5 years" },
    ],
    tasting:
      "This red wine is sensual and enveloping, revealing an intense ruby colour. The bouquet is rich with ripe red and black fruits, layered with spice and balsamic undertones. On the palate, it's well-balanced, persistent, and marked by savoury depth and character.",
    pairing:
      "It pairs beautifully with pasta, lasagna, roasted or stewed meats, cheeses, and cured meats.",
  },
  {
    id: "small-isola-1",
    name: "Isola Small Batch No. 01",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola.jpg",
    imageAlt: "Isola Small Batch No. 01 selection",
    grape: "Malvasia Nera and Syrah",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 13% ABV" },
      { label: "Serving", value: "12–15 °C" },
      { label: "Consume", value: "Over 3 years" },
    ],
    tasting:
      "Small-batch expression with ruby red color, ripe red fruits, balsamic undertones, spicy notes, and a soft, well-rounded finish.",
    pairing:
      "Eggplant-based dishes, mushrooms, roasted or stewed meats, cheeses, and cured meats.",
  },
  {
    id: "small-isola-2",
    name: "Isola Small Batch No. 02",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola2.jpg",
    imageAlt: "Isola Small Batch No. 02 selection",
    grape: "Muscat St. Vallier and Chenin Blanc",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12% ABV" },
      { label: "Serving", value: "7–10 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "Small-batch crisp expression with pale yellow color, yellow-fleshed fruits, citrus blossom, and a fresh, mineral finish.",
    pairing:
      "Aperitif, white meats, seafood, soft cheeses, green vegetables, and spicy or garlicky cuisine.",
  },
  {
    id: "small-isola-3",
    name: "Isola Small Batch No. 03",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola3.jpg",
    imageAlt: "Isola Small Batch No. 03 selection",
    grape: "100% Malvasia Nera",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12.5% ABV" },
      { label: "Serving", value: "8–12 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "Small-batch release with light ruby red color, red fruit and mixed berries, floral hints, and soft, fresh balance.",
    pairing:
      "Chicken, pork, soft to medium cheeses, chocolate, and fruit-based desserts.",
  },
  {
    id: "small-isola-4",
    name: "Isola Small Batch No. 04",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola4.jpg",
    imageAlt: "Isola Small Batch No. 04 selection",
    grape: "Malvasia Nera and Muscat Bleu",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12.5% ABV" },
      { label: "Serving", value: "9–12 °C" },
      { label: "Consume", value: "Within 2–3 years" },
    ],
    tasting:
      "Small-batch rosé with delicate pink color, fresh red berries, rose floral notes, and a smooth, vibrant finish.",
    pairing:
      "Aperitif, seafood, cured meats, roasted poultry, and starchy sides.",
  },
  {
    id: "small-isola-5",
    name: "Isola Small Batch No. 05",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola5.jpg",
    imageAlt: "Isola Small Batch No. 05 selection",
    grape: "100% Muscat St Vallier",
    specs: [
      { label: "Size & ABV", value: "750ml & 187ml – 12.5% ABV" },
      { label: "Serving", value: "7–12 °C" },
      { label: "Consume", value: "Over 2 years" },
    ],
    tasting:
      "Unfiltered small-batch white with golden yellow color, citrus zest, tropical fruit, honey, and a fresh, savoury finish.",
    pairing:
      "Aperitif, light seafood, vegetables, white meats, or relaxed tasting.",
  },
];