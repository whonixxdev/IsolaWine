import Image from "next/image";
import { Cormorant_Garamond, Jost } from "next/font/google";
import OrderActionButtons from "../components/ui/button/OrderActionButtons";
import type { WineShopItem } from "./shopData";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

interface WineProductCardProps {
  item: WineShopItem;
}

export default function WineProductCard({ item }: WineProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-[#E6DFD1] bg-[#FAF8F2] p-5 sm:p-6">
      <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-white">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-4"
        />
      </div>

      <div className="flex flex-1 flex-col items-center pt-5 text-center">
        <span
          className={`${serifFont.className} text-xs italic tracking-[0.2em] text-[#8A7F6E]`}
        >
          {item.number}
        </span>

        <h2
          className={`${serifFont.className} mt-2 text-lg font-normal uppercase tracking-[0.14em] text-[#1E2A21] sm:text-xl`}
        >
          {item.name}
        </h2>

        <p
          className={`${bodyFont.className} mt-1.5 text-xs font-light tracking-[0.02em] text-[#6E6A63]`}
        >
          {item.varietal}
        </p>

        <OrderActionButtons
          productNumber={item.number}
          productName={item.name}
          grapeVariety={item.varietal}
        />
      </div>
    </article>
  );
}