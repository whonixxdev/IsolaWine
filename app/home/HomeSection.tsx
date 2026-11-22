"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleButton from "../components/ui/button/CircleButton";
import DiscoverButton from "../components/ui/button/DiscoverButton";


gsap.registerPlugin(ScrollTrigger);

const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' };

const TITLE_LINES = ["Just relax, and", "go with the flow"];

const WINES_HREF = "/Gallery/wine";
const TASTING_HREF = "/about";

const WINES = [
  {
    id: "isola-rosso",
    name: "Isola Wine: Isola Rosso",
    price: "$10 / $42",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Isola Rosso bottle",
  },
  {
    id: "isola-semi-sweet",
    name: "Isola Wine: Red semi-sweet",
    price: "$12 / $48",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Isola red semi-sweet bottle",
  },
  {
    id: "isola-bianco",
    name: "Isola Wine: Isola Bianco",
    price: "$11 / $44",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Isola Bianco bottle",
  },
  {
    id: "isola-rosato",
    name: "Isola Wine: Isola Rosato",
    price: "$10 / $40",
    image: "/assets/imgs/Background/Isolabottle.png",
    alt: "Isola Rosato bottle",
  },
];

export default function HomeSection() {
  const rootRef = useRef<HTMLElement>(null);
  const bottleTrackRef = useRef<HTMLDivElement>(null);
  const captionTrackRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const [items, setItems] = useState(WINES);

  useLayoutEffect(() => {
    const bottleTrack = bottleTrackRef.current;
    const captionTrack = captionTrackRef.current;
    if (!bottleTrack || !captionTrack) return;
    gsap.set([bottleTrack, captionTrack], { x: 0 });
    busyRef.current = false;
  }, [items]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const titleLines = Array.from(root.querySelectorAll("[data-title-line]"));
    const reveals = Array.from(root.querySelectorAll("[data-reveal]"));
    const bottles = Array.from(root.querySelectorAll("[data-bottle]"));
    const pops = Array.from(root.querySelectorAll("[data-pop]"));

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap
        .timeline({
          scrollTrigger: { trigger: root, start: "top 65%", once: true },
        })
        .fromTo(
          titleLines,
          { yPercent: 110, autoAlpha: 1 },
          { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.14 },
        )
        .fromTo(
          reveals,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
          },
          0.35,
        )
        .fromTo(
          bottles,
          { y: 70, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.3,
            ease: "power3.out",
            stagger: 0.15,
          },
          0.2,
        )
        .fromTo(
          pops,
          { scale: 0.6, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.8, ease: "back.out(1.7)" },
          1,
        );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([...titleLines, ...reveals, ...bottles, ...pops], {
        autoAlpha: 1,
      });
    });

    return () => mm.revert();
  }, []);

  const handleNext = useCallback(() => {
    const bottleTrack = bottleTrackRef.current;
    const captionTrack = captionTrackRef.current;
    if (!bottleTrack || !captionTrack || busyRef.current) return;

    const first = bottleTrack.firstElementChild as HTMLElement | null;
    if (!first) return;

    busyRef.current = true;
    const step = first.offsetWidth;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const bottles = Array.from(bottleTrack.querySelectorAll("[data-bottle]"));

    gsap.to([bottleTrack, captionTrack], {
      x: -step,
      duration: reduce ? 0 : 1.1,
      ease: "power3.inOut",
      onComplete: () => setItems((prev) => [...prev.slice(1), prev[0]]),
    });

    if (!reduce) {
      gsap.to(bottles, {
        keyframes: [
          { x: 22, duration: 0.45, ease: "power2.out" },
          { x: 0, duration: 0.65, ease: "power2.inOut" },
        ],
      });
    }
  }, []);

  return (
    <section ref={rootRef} className="relative w-full bg-[#F4F1EA]">
      <div className="pointer-events-none grid grid-cols-1 border-y border-[#1E2A21]/15 lg:min-h-[100svh] lg:grid-cols-[57fr_43fr] lg:grid-rows-[1fr_auto]">
        <div className="px-[6vw] py-14 lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:justify-center lg:px-[4.2vw] lg:py-20">
          <h2
            aria-label={TITLE_LINES.join(" ")}
            style={serif}
            className="text-[clamp(2.4rem,11vw,3.4rem)] font-light leading-[1.05] text-[#1E2A21] lg:text-[clamp(2.75rem,6.1vw,6.5rem)]"
          >
            {TITLE_LINES.map((line) => (
              <span
                key={line}
                aria-hidden="true"
                className="-mb-[0.14em] -mt-[0.05em] block overflow-hidden pb-[0.14em] pt-[0.05em]"
              >
                <span data-title-line className="block opacity-0">
                  {line}
                </span>
              </span>
            ))}
          </h2>
          <p
            data-reveal
            className="mt-8 max-w-[34rem] text-[14px] leading-[1.65] text-[#1E2A21]/80 opacity-0 lg:text-[clamp(14px,1.05vw,17px)]"
          >
            Wander the vineyards, step inside the winery and taste Italian wine
            made on the island. Slow afternoons, warm company and a view that
            makes every glass taste better.
          </p>
          <div data-reveal className="mt-9 opacity-0">
            <DiscoverButton href={WINES_HREF} />
          </div>
        </div>

        <div className="relative h-[26rem] overflow-hidden border-t border-[#1E2A21]/15 lg:col-start-2 lg:row-start-1 lg:h-auto lg:border-t-0">
          <div ref={bottleTrackRef} className="flex h-full will-change-transform">
            {items.map((wine) => (
              <div
                key={wine.id}
                className="relative h-full w-1/2 shrink-0 border-l border-[#1E2A21]/15"
              >
                <div
                  data-bottle
                  className="absolute inset-x-[14%] inset-y-[5%] opacity-0"
                >
                  <Image
                    src={wine.image}
                    alt={wine.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-[18%] z-10 -translate-x-1/2 -translate-y-1/2">
            <div data-pop className="opacity-0">
              <CircleButton
                label="Next"
                ariaLabel="Show next wine"
                onClick={handleNext}
                className="h-[64px] w-[64px] text-[15px] lg:h-[80px] lg:w-[80px] lg:text-[17px]"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden lg:col-start-2 lg:row-start-2">
          <div ref={captionTrackRef} className="flex h-full will-change-transform">
            {items.map((wine) => (
              <div
                key={wine.id}
                className="flex h-full w-1/2 shrink-0 items-center border-l border-[#1E2A21]/15 px-[7%] py-6 lg:py-0"
              >
                <div className="w-full">
                  <p
                    data-reveal
                    className="text-[12px] leading-tight text-[#1E2A21] opacity-0 lg:text-[clamp(11px,0.85vw,14px)]"
                  >
                    {wine.name}
                  </p>
                  <span className="mt-3 block h-px w-full bg-[#1E2A21]/25" />
                  <div className="mt-4 flex items-center justify-between">
                    <p
                      data-reveal
                      className="text-[12px] text-[#1E2A21]/80 opacity-0 lg:text-[clamp(11px,0.85vw,14px)]"
                    >
                      {wine.price}
                    </p>
                    <Link
                      href={WINES_HREF}
                      aria-label={`View ${wine.name}`}
                      className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-[#1E2A21] text-[#1E2A21] transition-colors duration-500 hover:bg-[#1E2A21] hover:text-[#F4F1EA]"
                    >
                      <Plus size={13} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-[#1E2A21]/15 px-[6vw] py-8 lg:col-start-1 lg:row-start-2 lg:gap-8 lg:px-[3.6vw] lg:py-10">
          <div
            data-reveal
            className="relative aspect-[149/86] w-[7.5rem] shrink-0 overflow-hidden opacity-0 lg:w-[15vw]"
          >
            <Image
              src="/assets/imgs/Background/BackgroundHome.png"
              alt="Guests enjoying a wine tasting"
              fill
              sizes="(min-width: 1024px) 15vw, 120px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p
              data-reveal
              className="text-[14px] font-medium text-[#1E2A21] opacity-0 lg:text-[clamp(14px,1.2vw,19px)]"
            >
              Come to the wine-tasting
            </p>
            <p
              data-reveal
              className="mt-2 max-w-[18rem] text-[12px] leading-relaxed text-[#1E2A21]/70 opacity-0 lg:text-[clamp(12px,0.9vw,14px)]"
            >
              Join us for a tasting of our newest wines. Reserve your spot and
              taste Isola slowly.
            </p>
          </div>
          <div data-reveal className="shrink-0 opacity-0">
            <CircleButton
              label="Read more"
              href={TASTING_HREF}
              className="h-[64px] w-[64px] text-[11px] lg:h-[96px] lg:w-[96px] lg:text-[14px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}