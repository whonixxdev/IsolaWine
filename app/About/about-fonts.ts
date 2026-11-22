import { Cormorant_Garamond, Courgette, Jost } from "next/font/google";

export const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const numberFont = Courgette({
  subsets: ["latin"],
  weight: "400",
});

export const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});