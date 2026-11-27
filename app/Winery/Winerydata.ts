export interface WinerySectionContent {
  id: string;
  number: string;
  titleLines: string[];
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export const WINERY_SECTIONS: WinerySectionContent[] = [
  {
    id: "production-approach",
    number: "01",
    titleLines: ["Production", "Approach"],
    paragraphs: [
      "Indonesia doesn’t officially regulate the winemaking industry at this time. However, Cantine Balita follows the strict Italian organic winemaking culture, making sure we produce wines of the highest European standard and quality.",
      "We use only certified organic products in our vinification process, minimizing the necessary corrections of the wine to enhance the natural properties and flavors. All products used in our winemaking are organic and imported from Italy.",
      "In organic winemaking, the use of herbicides, fertilizers, and sulfites are limited. We respect and adhere to the Italian and European standards and the fundamental oenological practices to guarantee an authentic “organic wine.”",
      "We are proud that we built our winery in one of the most stunning places in Bali, and according to the highest European standards. Sicilian Winemaker, Giacomo Anselmi, personally trains our staff to guarantee our high standards are upheld during every stage of the production process.",
    ],
    image: "/assets/imgs/Background/about/BackgroundAboutHome.png",
    imageAlt: "Two winemakers picking ripe grapes from the vine",
  },
  {
    id: "advanced-equipment",
    number: "02",
    titleLines: ["Advanced", "Equipment"],
    paragraphs: [
      "At Cantine Balita, we only use the most sophisticated winemaking equipment on the market. All of our equipment and machinery are original Della Toffola, imported directly from Italy.",
      "By using only the best and most reliable equipment available, we can guarantee quality wines made in the tropical jungle of Bali.",
      "Our local team and Chief Winemaker, together installed the machinery, setting up the ideal production process, to ensure only the purest high-quality wines.",
    ],
    image: "/assets/imgs/Background/winery/backgroundWinery2.png",
    imageAlt: "Row of stainless steel winemaking tanks inside the winery",
  },
  {
    id: "high-tech-laboratory",
    number: "03",
    titleLines: ["High-tech", "Laboratory"],
    paragraphs: [
      "Our professional wine analysis equipment allows us to test and control any phase of our winemaking, with absolute precision. Our lab team are professionally trained guaranteeing the optimal efficiency of the lab.",
      "Traditionally, wine samples are sent to external laboratories, requiring time and causing delays. We optimize this process by having the test results available to us in real-time. In turn, this allows us to respond proactively and immediately to the results.",
      "Our winery is located in the middle of the Balinese jungle, which can be a logistical challenge. To be able to guarantee our non-negotiable high standard, we made sure we were operating 100% independently, even with the lab tests.",
    ],
    image: "/assets/imgs/Background/winery/backgroundWinery3.png",
    imageAlt: "A hand holding a laboratory flask with a wine sample",
  },
];
