import { Cormorant_Garamond, Jost } from "next/font/google";

export const contactSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-contact-serif",
  display: "swap",
});

export const contactSans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-contact-sans",
  display: "swap",
});