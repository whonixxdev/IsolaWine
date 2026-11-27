
import type { Metadata } from "next";
import "./globals.css";
import Navbars from "./components/ui/navbars/Navbars";
import SmoothScroll from "./components/animations/Scroll/ScrollSmooth";
import Footer from "./components/layouts/Footer";
import LocationsPage from "./components/location/page";

export const metadata: Metadata = {
  metadataBase: new URL("https://isola-wine.vercel.app"),

  title: {
    default: "Isola Wine Bali | Discover the World of Wine",
    template: "%s | Isola Wine Bali",
  },

  description:
    "Discover Isola Wine Bali, explore our wine selections, learn more about the world of wine, and find our store locations across Bali with our interactive store locator. Experience Isola Wine and discover where to find us.",

  keywords: [
    "Isola Wine",
    "Isola Wine Bali",
    "Wine Bali",
    "Wine Shop Bali",
    "Wine Store Bali",
    "Wine Collection Bali",
    "Wine Store Locator Bali",
  ],

  authors: [{ name: "Isola Wine" }],

  openGraph: {
    title: "Isola Wine Bali | Discover the World of Wine",
    description:
      "Explore Isola Wine, discover our wine selections, and find store locations across Bali.",
    url: "https://isola-wine.vercel.app",
    siteName: "Isola Wine",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/assets/favicon.ico",
  },

  verification: {
    google: "ZGnPDSVc2X5Wt3jL1-oOlT_fe7JqetBL-gaQaHC52s8",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Navbars />
          {children}
          <LocationsPage/>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
