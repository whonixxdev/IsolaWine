import Image from "next/image";
import type { ReactNode } from "react";
import TextTitle from "@/app/components/ui/title/Texttitle";
import { bodyFont } from "@/app/About/about-fonts";

interface AboutStoryProps {
  children?: ReactNode;
}

export default function AboutStory({ children }: AboutStoryProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl">
          <Image
            src="/assets/imgs/Background/BackgroundStoryAbout.png"
            alt="Isola Wine team with harvested grape crates"
            fill
            sizes="(min-width: 768px) 448px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <TextTitle eyebrow="Bali & Sicily" title="Our Story" as="h2" />

          <div
            className={`${bodyFont.className} mt-8 text-sm font-light leading-relaxed text-[#1E2A21]`}
          >
            <p className="pb-5">
              <span className="font-semibold">Cantine Balita</span> is a
              Balinese boutique winery that specializes in growing high-quality
              grapes, by combining Italian viticulture knowledge with Balinese
              agricultural traditions.
            </p>

            <p className="border-t border-[#1E2A21]/40 py-5">
              <span className="font-semibold">Cantine</span> in Italian means
              wine cellars, where wine is stored and aged.{" "}
              <span className="font-semibold"> <br />Balita</span> stands for Bali and
              Italy, and the close partnership we have formed with this
              project.
            </p>

            <p className="border-t border-[#1E2A21]/40 pt-5">
              <span className="font-semibold">Isola</span> means island in
              Italian. Our winemaking heritage stems from the Italian island of
              Sicily. Bali and Sicily share fundamental similarities for
              winemaking, such as the volcanic soil and hot climates. Both are
              exceptional islands with great history and tradition; therefore,
              we decided to name our wine{" "}
              <span className="font-semibold">Isola</span>.
            </p>
          </div>
        </div>
      </div>

      {children && <div className="mt-12 md:mt-16">{children}</div>}
    </section>
  );
}