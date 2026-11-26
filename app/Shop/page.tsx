import type { Metadata } from "next";
import { Jost } from "next/font/google";
import TextTitle from "../components/ui/title/Texttitle";
import { WINE_SHOP_ITEMS } from "./shopData";
import WineProductCard from "./WineProductCard";

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Shop | Isola Wine",
  description:
    "Choose your Isola wines and place your order directly via WhatsApp or email.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F8F6EF] px-4 pb-24 pt-28 text-[#1E2A21] sm:px-6 lg:px-10 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-6xl text-center">
          <TextTitle
            eyebrow="CANTINE BALITA"
            title="ORDER ISOLA WINES"
            as="h1"
            titleClassName="!max-w-none !text-[clamp(1.75rem,4.6vw,4.35rem)] !font-light !leading-[1.08] !tracking-[0.08em] text-[#240B10] md:whitespace-nowrap"
          />
          <p
            className={`${bodyFont.className} mx-auto mt-4 max-w-md text-xs font-light leading-relaxed text-[#6E6A63] sm:text-sm`}
          >
            Choose your wines below and place your order directly via WhatsApp or
            email. We will confirm availability, price and delivery with you
            personally.
          </p>
        </header>

        <section
          aria-label="Isola Wine Collection"
          className="mt-14 border-y border-[#E6DFD1] py-10 sm:mt-16 sm:py-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {WINE_SHOP_ITEMS.map((item) => (
              <WineProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}