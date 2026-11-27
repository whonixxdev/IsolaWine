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
            src="/assets/imgs/Background/about/BackgroundStoryAbout.png"
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
              <span className="font-semibold">Cantine</span> means wineries in Italian which are the places 
              where the wine is produced, stored, and aged.{" "}
              <span className="font-semibold"> <br />Balita</span> the idea of Balita represent the 
              partnership between bali and italy.
            </p>

            <p className="border-t border-[#1E2A21]/40 pt-5">
              <span className="font-semibold">Isola Wine</span> is a Balinese boutieque winery that specialises in growing high quality grapes by combining italian viticulture knowlegde with Balinese agriculture traditions.{" "} <br/>
              <span className="font-semibold">Isola Wine</span> project started in 2012 with a simpel goal - 
              to produce international quality wine in tropical climate the journey, however, was challenging - 
              it took 2 Years of agrucultural development and experimentation for the team to create a brand new agronomy program that could match the standar 
              needed to produce first experimental batches of isola wine in 2014.
            </p>
          </div>
        </div>
      </div>

      {children && <div className="mt-12 md:mt-16">{children}</div>}
    </section>
  );
}