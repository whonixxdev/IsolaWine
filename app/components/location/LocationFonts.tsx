import { Cormorant_Garamond, Jost } from "next/font/google";

export const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const labelFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
});