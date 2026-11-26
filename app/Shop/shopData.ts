export interface WineShopItem {
  id: string;
  number: string;
  name: string;
  varietal: string;
  image: string;
  imageAlt: string;
}

export const WINE_SHOP_ITEMS: WineShopItem[] = [
  {
    id: "isola-rosso",
    number: "01",
    name: "ISOLA ROSSO",
    varietal: "Malvasia Nera and Syrah",
    image: "/assets/imgs/botol/isolabottle1.png",
    imageAlt: "Isola Rosso wine bottle",
  },
  {
    id: "isola-bianco",
    number: "02",
    name: "ISOLA BIANCO",
    varietal: "Muscat St Vallier and Chenin Blanc",
    image: "/assets/imgs/botol/Isolabottle2.png",
    imageAlt: "Isola Bianco wine bottle",
  },
  {
    id: "isola-rosato",
    number: "03",
    name: "ISOLA ROSATO",
    varietal: "Malvasia Nera and Muscat Bleu",
    image: "/assets/imgs/botol/isolabottle3.png",
    imageAlt: "Isola Rosato wine bottle",
  },
  {
    id: "isola-moscato-dolce",
    number: "04",
    name: "ISOLA MOSCATO DOLCE",
    varietal: "Muscat St Vallier",
    image: "/assets/imgs/botol/isolabottle4.png",
    imageAlt: "Isola Moscato Dolce wine bottle",
  },
  {
    id: "isola-reserve-red",
    number: "05",
    name: "ISOLA RISERVA ROSSO",
    varietal: "Syrah and Malvasia Nera",
    image: "/assets/imgs/botol/isolabottle5.png",
    imageAlt: "Isola Riserva Rosso wine bottle",
  },
  {
    id: "isola-reserve-white",
    number: "06",
    name: "ISOLA RISERVA BIANCO",
    varietal: "Chenin Blanc and Muscat",
    image: "/assets/imgs/botol/isolabottle6.png",
    imageAlt: "Isola Riserva Bianco wine bottle",
  },
];