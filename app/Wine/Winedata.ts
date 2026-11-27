export type WineCategory = "Limited" | "Standard" | "Small";

export type WineFilterValue = WineCategory | "All";

export interface WineComposition {
  grape: string;
  percentage: number;
}

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
  description: string;
  composition: WineComposition[];
  specs: WineSpec[];
  tasting: string;
  pairing: string;
}

export const WINE_HERO = {
  eyebrow: "Our Collection",
  title: "Wine",
  description:
    "Every Isola wine is grown and made in Bali to Italian standards. Choose a selection to see its composition, its character, and how to order.",
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
    description:
      "A limited-release white wine crafted from selected parcels in Bali, offering layered aromatics and a structured, crisp finish.",
    composition: [
      { grape: "Vermentino", percentage: 80 },
      { grape: "Chardonnay", percentage: 20 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "12.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "8 to 10 °C" },
    ],
    tasting: "White peach, lemon blossom, and subtle minerality.",
    pairing: "Pan-seared scallops, coastal seafood, and aged goat cheese.",
  },
  {
    id: "limited-moscato-dolce",
    name: "Isola Moscato Dolce Limited",
    type: "Sweet wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedMoscatoDolce.png",
    imageAlt: "Isola Moscato Dolce Limited bottle",
    description:
      "A fragrant, sweet limited edition with bright fruit expression and gentle poise, crafted for relaxed pairings and desserts.",
    composition: [{ grape: "Moscato", percentage: 100 }],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "10.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "6 to 8 °C" },
    ],
    tasting: "Orange blossom, lychee, and fresh honeyed notes.",
    pairing: "Fruit tarts, almond pastries, and mild blue cheese.",
  },
  {
    id: "limited-riserva",
    name: "Isola Riserva",
    type: "Red wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedRiserva.png",
    imageAlt: "Isola Riserva limited edition bottle",
    description:
      "Our limited red, made only from the best barrels of the harvest and aged longer before release.",
    composition: [
      { grape: "Sangiovese", percentage: 60 },
      { grape: "Cabernet Sauvignon", percentage: 25 },
      { grape: "Merlot", percentage: 15 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "14%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "16 to 18 °C" },
    ],
    tasting: "Dark plum and cocoa, with firm tannins and a long finish.",
    pairing: "Slow-cooked beef, roast lamb, and hard cheese.",
  },
  {
    id: "limited-rosato",
    name: "Isola Rosato Limited",
    type: "Rosé wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedRosato.png",
    imageAlt: "Isola Rosato Limited bottle",
    description:
      "A special limited rosé with delicate colour, lively acidity, and a dry, refined finish suited to warm island afternoons.",
    composition: [
      { grape: "Sangiovese", percentage: 85 },
      { grape: "Syrah", percentage: 15 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "12.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "8 to 10 °C" },
    ],
    tasting: "Red currant, rose petal, and crisp citrus zest.",
    pairing: "Grilled prawns, Mediterranean mezze, and light pasta.",
  },
  {
    id: "limited-rosso",
    name: "Isola Rosso Limited",
    type: "Red wine",
    category: "Limited",
    image: "/assets/imgs/botol/limited/LimitedRosso.png",
    imageAlt: "Isola Rosso Limited bottle",
    description:
      "A limited-production red crafted with deeper extraction and thoughtful cellar maturation for added structure and depth.",
    composition: [
      { grape: "Sangiovese", percentage: 65 },
      { grape: "Cabernet Sauvignon", percentage: 35 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "13.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "16 to 18 °C" },
    ],
    tasting: "Black cherry, dark spice, and velvety oak undertones.",
    pairing: "Braised short ribs, mushroom risotto, and aged pecorino.",
  },
  {
    id: "standar-bianco",
    name: "Isola Bianco",
    type: "White wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarBianco.png",
    imageAlt: "Isola Bianco standard bottle",
    description:
      "A crisp white fermented in steel to keep its freshness. Made for warm evenings and light food.",
    composition: [
      { grape: "Vermentino", percentage: 85 },
      { grape: "Chardonnay", percentage: 15 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "12%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "8 to 10 °C" },
    ],
    tasting: "Green apple and citrus peel, with a clean mineral finish.",
    pairing: "Seafood, salads, and soft cheese.",
  },
  {
    id: "standar-bianco-raw",
    name: "Isola Bianco Raw",
    type: "White wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarBiancoRaw.png",
    imageAlt: "Isola Bianco Raw bottle",
    description:
      "An unpolished, expressive white expression highlighting natural texture, bright acidity, and unadulterated fruit character.",
    composition: [{ grape: "Vermentino", percentage: 100 }],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "12%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "9 to 11 °C" },
    ],
    tasting: "Crisp pear, Meyer lemon, and subtle saline freshness.",
    pairing: "Ceviche, herb salads, and grilled white fish.",
  },
  {
    id: "standar-moscato-dolce-reg",
    name: "Isola Moscato Dolce",
    type: "Sweet wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarMoscatoDolcereg.png",
    imageAlt: "Isola Moscato Dolce regular bottle",
    description:
      "A vibrant, aromatic sweet wine with approachable sweetness and refreshing balance, crafted for easy enjoyment.",
    composition: [{ grape: "Moscato", percentage: 100 }],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "10.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "6 to 8 °C" },
    ],
    tasting: "Sweet peach, white flowers, and bright tropical lift.",
    pairing: "Desserts, spiced cakes, and fresh tropical fruit.",
  },
  {
    id: "standar-rosato-reg",
    name: "Isola Rosato",
    type: "Rosé wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRosatoreg.png",
    imageAlt: "Isola Rosato regular bottle",
    description:
      "A lively, dry rosé with fresh berry aromatics and a clean finish suited to sunny lunches and casual gatherings.",
    composition: [
      { grape: "Sangiovese", percentage: 80 },
      { grape: "Merlot", percentage: 20 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "12%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "8 to 10 °C" },
    ],
    tasting: "Fresh strawberry, pink grapefruit, and crisp finish.",
    pairing: "Grilled chicken, antipasti, and summer salads.",
  },
  {
    id: "standar-rosso-raw",
    name: "Isola Rosso Raw",
    type: "Red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRossoRaw.png",
    imageAlt: "Isola Rosso Raw bottle",
    description:
      "A more direct, rustic red expression showcasing pure fruit vibrancy and supple structure grown under Balinese sun.",
    composition: [
      { grape: "Sangiovese", percentage: 75 },
      { grape: "Merlot", percentage: 25 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "13%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "15 to 17 °C" },
    ],
    tasting: "Crushed red berries, wild herbs, and supple tannins.",
    pairing: "Wood-fired pizza, roasted vegetables, and cured meats.",
  },
  {
    id: "standar-rosso-reg",
    name: "Isola Rosso",
    type: "Red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRossoreg.png",
    imageAlt: "Isola Rosso standard bottle",
    description:
      "A dry red with soft tannins, grown on volcanic soil and aged in neutral oak. Balanced and easy to drink now or to keep.",
    composition: [
      { grape: "Sangiovese", percentage: 70 },
      { grape: "Merlot", percentage: 30 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "13%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "16 to 18 °C" },
    ],
    tasting: "Ripe cherry and dried herbs, with a smooth, dry finish.",
    pairing: "Grilled meats, tomato pasta, and aged cheese.",
  },
  {
    id: "standar-rubino-dolce",
    name: "Isola Rubino Dolce",
    type: "Sweet red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarRubinoDolce.png",
    imageAlt: "Isola Rubino Dolce bottle",
    description:
      "A ruby-toned sweet red offering rich dark fruit character balanced by gentle sweetness and a smooth close.",
    composition: [
      { grape: "Merlot", percentage: 70 },
      { grape: "Sangiovese", percentage: 30 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "12%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "12 to 14 °C" },
    ],
    tasting: "Plum compote, blackberry jam, and soft spice.",
    pairing: "Dark chocolate desserts, berry tarts, and aged cheese.",
  },
  {
    id: "standar-syrah-riserve",
    name: "Isola Syrah Riserva",
    type: "Red wine",
    category: "Standard",
    image: "/assets/imgs/botol/standar/StandarSyrahRiserve.PNG",
    imageAlt: "Isola Syrah Riserva bottle",
    description:
      "A full-bodied Syrah selection with savory depth, dark fruit intensity, and a structured, lingering finish.",
    composition: [{ grape: "Syrah", percentage: 100 }],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "14%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "16 to 18 °C" },
    ],
    tasting: "Black pepper, dark berry, and smoky oak nuance.",
    pairing: "Grilled steak, peppered meats, and hearty stews.",
  },
  {
    id: "small-isola-1",
    name: "Isola Small Batch No. 01",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola.jpg",
    imageAlt: "Isola Small Batch No. 01 selection",
    description:
      "Crafted in a small micro-lot to explore distinct vineyard character and hands-on cellar work in Bali.",
    composition: [
      { grape: "Sangiovese", percentage: 75 },
      { grape: "Syrah", percentage: 25 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "13%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "14 to 16 °C" },
    ],
    tasting: "Morello cherry, cracked spice, and bright freshness.",
    pairing: "Artisanal charcuterie, roasted poultry, and pasta.",
  },
  {
    id: "small-isola-2",
    name: "Isola Small Batch No. 02",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola2.jpg",
    imageAlt: "Isola Small Batch No. 02 selection",
    description:
      "A focused small-batch release produced in limited numbers to highlight texture, balance, and terroir.",
    composition: [
      { grape: "Vermentino", percentage: 70 },
      { grape: "Chardonnay", percentage: 30 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "12.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "8 to 10 °C" },
    ],
    tasting: "Golden apple, citrus blossom, and a clean mineral edge.",
    pairing: "Seared fish, risotto, and creamy cheeses.",
  },
  {
    id: "small-isola-3",
    name: "Isola Small Batch No. 03",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola3.jpg",
    imageAlt: "Isola Small Batch No. 03 selection",
    description:
      "An experimental small-lot bottling made in modest quantities with close attention to harvest timing.",
    composition: [
      { grape: "Merlot", percentage: 80 },
      { grape: "Cabernet Sauvignon", percentage: 20 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "13.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "16 to 18 °C" },
    ],
    tasting: "Ripe plum, violet aroma, and soft, rounded tannins.",
    pairing: "Grilled meats, herb-roasted pork, and hard cheese.",
  },
  {
    id: "small-isola-4",
    name: "Isola Small Batch No. 04",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola4.jpg",
    imageAlt: "Isola Small Batch No. 04 selection",
    description:
      "A small-quantity cellar edition offering a distinct expression shaped by weather and parcel selection.",
    composition: [{ grape: "Sangiovese", percentage: 100 }],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "13%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "15 to 17 °C" },
    ],
    tasting: "Sour cherry, dried thyme, and lively natural acidity.",
    pairing: "Tomato-based dishes, grilled skewers, and antipasti.",
  },
  {
    id: "small-isola-5",
    name: "Isola Small Batch No. 05",
    type: "Small batch wine",
    category: "Small",
    image: "/assets/imgs/botol/small/Smallisola5.jpg",
    imageAlt: "Isola Small Batch No. 05 selection",
    description:
      "The fifth small-batch selection in the series, bottled in limited runs for enthusiasts seeking something rare.",
    composition: [
      { grape: "Syrah", percentage: 70 },
      { grape: "Sangiovese", percentage: 30 },
    ],
    specs: [
      { label: "Region", value: "Bali, Indonesia" },
      { label: "Alcohol", value: "13.5%" },
      { label: "Volume", value: "750 ml" },
      { label: "Serve at", value: "16 to 18 °C" },
    ],
    tasting: "Dark berry, subtle pepper, and a smooth, savory finish.",
    pairing: "Braised dishes, aged cheeses, and chargrilled fare.",
  },
];