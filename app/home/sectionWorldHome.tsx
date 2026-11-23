"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import TextTitle from "../components/ui/title/Texttitle";
import { SERIF_FONT } from "./home-hero.data";

interface WorldItem {
  number: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WORLD_ITEMS: WorldItem[] = [
  {
    number: "01",
    title: "Wines",
    text: "Red, white and rosé",
    image: "/assets/imgs/Background/ImageWINES.png",
    alt: "Isola wine bottles in a copper bucket",
  },
  {
    number: "02",
    title: "Vineyards",
    text: "Grown with care in Bali",
    image: "/assets/imgs/Background/ImageVINEYARDS.png",
    alt: "Vineyard worker harvesting grapes",
  },
  {
    number: "03",
    title: "Winery",
    text: "Where each bottle is made",
    image: "/assets/imgs/Background/ImageWINERY.png",
    alt: "Stainless steel fermentation tanks in the winery",
  },
  {
    number: "04",
    title: "Explore",
    text: "Visit and taste at the source",
    image: "/assets/imgs/Background/ImageEXPLORE.png",
    alt: "Two friends sharing wine at sunset",
  },
];

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function SectionWorldHome() {
  return (
    <section className="relative w-full bg-[#F8F6EF] text-[#1E2A21]">
      <div className="mx-auto w-full max-w-[1280px] px-[6vw] py-16 sm:py-20 lg:px-[4.5vw] lg:py-28">
        <div className="flex justify-center text-center [&_:is(h1,h2,h3,h4)]:text-[clamp(2.25rem,8vw,3rem)]! [&_:is(h1,h2,h3,h4)]:leading-[1.1]! sm:[&_:is(h1,h2,h3,h4)]:text-[clamp(3rem,4.2vw,2.75rem)]!">
          <TextTitle eyebrow="Our World" title="Discover Isola Wine" as="h1" />
        </div>

        <motion.div
          variants={groupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto mt-12 w-full max-w-[1100px] sm:mt-14 lg:mt-16 lg:py-5"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 top-5 hidden h-px bg-[#1E2A21]/20 lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 bottom-5 hidden h-px bg-[#1E2A21]/20 lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden grid-cols-4 border-r border-[#1E2A21]/20 lg:grid"
          >
            {WORLD_ITEMS.map((item) => (
              <div key={item.number} className="border-l border-[#1E2A21]/20" />
            ))}
          </div>

          <div className="relative grid grid-cols-2 border-l border-t border-[#1E2A21]/20 lg:grid-cols-4 lg:border-0">
            {WORLD_ITEMS.map((item) => (
              <motion.article
                key={item.number}
                variants={cardVariants}
                className="group flex flex-col border-b border-r border-[#1E2A21]/20 lg:border-0"
              >
                <div className="p-3 sm:p-[15px]">
                  <div className="relative aspect-[234/338] w-full overflow-hidden bg-[#E5DBC0]/60">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 46vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center border-t border-[#1E2A21]/20 px-2.5 py-4 text-center sm:px-3 sm:py-6">
                  <span
                    style={SERIF_FONT}
                    className="text-[13px] italic leading-none text-[#6B1E2B]"
                  >
                    {item.number}
                  </span>
                  <h3
                    style={SERIF_FONT}
                    className="mt-2.5 pl-[0.18em] text-[clamp(1rem,3.6vw,1.25rem)] font-normal uppercase leading-none tracking-[0.18em] text-[#1E2A21] sm:mt-3 sm:pl-[0.22em] sm:text-[clamp(1.15rem,1.9vw,1.6rem)] sm:tracking-[0.22em]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[11.5px] leading-[1.5] text-[#1E2A21]/65 sm:mt-3 sm:text-[12px]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}