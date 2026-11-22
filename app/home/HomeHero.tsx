"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticWrapper from "../components/animations/Magnetic/MagneticWrapper";
import OurStoryButton from "../components/ui/button/OurStoryButton";


gsap.registerPlugin(ScrollTrigger);

const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' };

const GATE_WINDOW = "M586 300L676 210H836L926 300V982H586Z";

const BOTTLE_VISIBLE_RATIO = 0.8;

const STATS = [
  { value: "2012", label: "Established" },
  { value: "Bali", label: "Produced in" },
  { value: "Italian", label: "Pure wine" },
];

const EXPERIENCES = [
  {
    number: "01",
    title: "Vineyard walk",
    text: "Wander between the vines and breathe in the island air.",
  },
  {
    number: "02",
    title: "Winery visit",
    text: "See the place where every bottle of Isola is made.",
  },
  {
    number: "03",
    title: "Slow tasting",
    text: "Pour, sip and take your time with good company.",
  },
];

const visibleOnly = (nodes: Element[]) =>
  nodes.filter((node) => (node as HTMLElement).offsetParent !== null);

export default function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const relaxRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const layers = layersRef.current;
    const photo = photoRef.current;
    const overlay = overlayRef.current;
    const gate = gateRef.current;
    const title = titleRef.current;
    const labelsWrap = labelsRef.current;
    const relax = relaxRef.current;
    const landing = landingRef.current;
    const bottle = bottleRef.current;

    if (
      !root ||
      !layers ||
      !photo ||
      !overlay ||
      !gate ||
      !title ||
      !labelsWrap ||
      !relax ||
      !landing ||
      !bottle
    ) {
      return;
    }

    const letters = Array.from(title.querySelectorAll("[data-letter]"));
    const introItems = Array.from(root.querySelectorAll("[data-intro]"));

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap
        .timeline({ delay: 0.3 })
        .fromTo(
          letters,
          { yPercent: 115, autoAlpha: 1 },
          { yPercent: 0, duration: 1.3, ease: "power4.out", stagger: 0.14 },
        )
        .fromTo(
          introItems,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
          },
          0.9,
        );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([...letters, ...introItems], { autoAlpha: 1 });
    });

    mm.add(
      { isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" },
      (context) => {
        const isDesktop = Boolean(context.conditions?.isDesktop);
        const phaseScale = isDesktop ? 1 : 0.72;
        const handoff = 7.6;

        const labels = Array.from(labelsWrap.children);
        const phaseItems = visibleOnly(
          Array.from(layers.querySelectorAll("[data-phase]")),
        );
        const relaxItems = visibleOnly(
          Array.from(relax.querySelectorAll("[data-relax]")),
        );
        const relaxLines = visibleOnly(
          Array.from(relax.querySelectorAll("[data-line]")),
        );

        const getMetrics = () => {
          const startX = bottle.offsetLeft + bottle.offsetWidth / 2;
          const startY = bottle.offsetTop + bottle.offsetHeight / 2;
          const endX = landing.offsetLeft + landing.offsetWidth / 2;
          const endY = landing.offsetTop + landing.offsetHeight / 2;
          return {
            centerY: root.offsetHeight / 2 - startY,
            x: endX - startX,
            y: endY - startY,
            scale:
              (landing.offsetHeight * 0.86) /
              BOTTLE_VISIBLE_RATIO /
              bottle.offsetHeight,
          };
        };

        gsap.set(bottle, { transformPerspective: 1400 });
        gsap.set(photo, { scale: 1.18 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${window.innerHeight * 5}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(photo, { scale: 1, duration: 4, ease: "power2.out" }, 0)
          .to(gate, { scale: 7, duration: 4, ease: "power2.inOut" }, 0)
          .to(gate, { autoAlpha: 0, duration: 0.3 }, 3.7)
          .to(root, { backgroundColor: "#1E2A21", duration: 0.2 }, 2.2)
          .to(title, { scale: 1.06, duration: 4, ease: "power1.inOut" }, 0)
          .to(
            bottle,
            {
              y: () => getMetrics().centerY,
              scale: phaseScale,
              duration: 4,
              ease: "power2.inOut",
            },
            0,
          )
          .to(
            labels,
            { autoAlpha: 0, y: -24, duration: 1.2, stagger: 0.12 },
            0.3,
          )
          .to(overlay, { opacity: 0.38, duration: 2.5 }, 1.5)
          .fromTo(
            phaseItems,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              stagger: 0.18,
              ease: "power2.out",
            },
            3.2,
          )
          .fromTo(
            letters,
            { yPercent: 0 },
            {
              yPercent: 115,
              duration: 1.1,
              stagger: { each: 0.1, from: "end" },
              ease: "power2.in",
              immediateRender: false,
            },
            5.6,
          )
          .to(
            phaseItems,
            {
              autoAlpha: 0,
              y: -24,
              duration: 0.9,
              stagger: 0.06,
              ease: "power1.in",
            },
            6.6,
          )
          .to(overlay, { opacity: 0, duration: 2 }, handoff)
          .to(
            layers,
            { yPercent: -25, duration: 5, ease: "power2.inOut" },
            handoff,
          )
          .to(
            relax,
            { yPercent: -100, duration: 5, ease: "power2.inOut" },
            handoff,
          )
          .to(
            bottle,
            {
              x: () => getMetrics().x,
              y: () => getMetrics().y,
              scale: () => getMetrics().scale,
              rotationY: 360,
              duration: 5,
              ease: "power2.inOut",
            },
            handoff,
          )
          .to(
            bottle,
            { rotation: -8, duration: 2.5, ease: "sine.inOut" },
            handoff,
          )
          .to(
            bottle,
            { rotation: 0, duration: 2.5, ease: "sine.inOut" },
            handoff + 2.5,
          )
          .from(
            relaxItems,
            {
              autoAlpha: 0,
              y: 40,
              duration: 1.2,
              stagger: 0.1,
              ease: "power2.out",
            },
            handoff + 3.4,
          )
          .from(
            relaxLines,
            {
              scaleX: 0,
              transformOrigin: "0% 50%",
              duration: 1.2,
              ease: "power2.inOut",
            },
            handoff + 3.6,
          )
          .to({}, { duration: 0.8 }, handoff + 6);
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-svh w-full overflow-hidden bg-[#F4F1EA]"
    >
      <div
        ref={layersRef}
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      >
        <div ref={photoRef} className="absolute inset-0 z-0">
          <Image
            src="/assets/imgs/Background/BackgroundHome.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          ref={overlayRef}
          className="absolute inset-0 z-[5] bg-[#1E2A21] opacity-0"
        />

        <div ref={gateRef} className="absolute inset-0 z-10">
          <svg
            viewBox="0 0 1512 982"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <path
              d={`M-4000 -4000H5500V5000H-4000Z ${GATE_WINDOW}`}
              fill="#F4F1EA"
              fillRule="evenodd"
            />
            <path
              d={GATE_WINDOW}
              fill="none"
              stroke="#C49A3C"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <h1
          ref={titleRef}
          aria-label="Isola"
          style={serif}
          className="absolute inset-0 z-20 flex items-center justify-center pb-[8svh] text-[27vw] font-medium leading-none tracking-[0.04em] text-[#C49A3C] lg:text-[23vw]"
        >
          {"ISOLA".split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              aria-hidden="true"
              className="-mx-[0.05em] -my-[0.1em] inline-block overflow-hidden px-[0.05em] py-[0.1em]"
            >
              <span data-letter className="inline-block opacity-0">
                {letter}
              </span>
            </span>
          ))}
        </h1>

        <div ref={labelsRef} className="absolute inset-0 z-20">
          <div className="absolute left-[5vw] top-[12.5%] lg:left-[10vw] lg:top-[200px]">
            <p
              data-intro
              className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#1E2A21] opacity-0 lg:gap-4 lg:text-[11px] lg:tracking-[0.4em]"
            >
              <span className="hidden h-px w-10 bg-[#C49A3C] lg:block" />
              Pure Italian Wine
            </p>
            <p
              data-intro
              style={serif}
              className="mt-5 hidden text-[clamp(1.5rem,2.1vw,2.5rem)] italic leading-[1.15] text-[#1E2A21] opacity-0 lg:block"
            >
              Poured slowly,
              <br />
              enjoyed unhurried.
            </p>
          </div>

          <div className="pointer-events-auto absolute bottom-[12%] left-[8vw] hidden lg:block">
            <div data-intro className="opacity-0">
              <MagneticWrapper range={0.35}>
                <div className="-m-5 p-5">
                  <OurStoryButton />
                </div>
              </MagneticWrapper>
            </div>
          </div>

          <div className="absolute right-[6vw] top-[12.5%] text-right lg:bottom-[12%] lg:right-[8vw] lg:top-auto">
            <p
              data-intro
              className="flex items-center justify-end gap-3 text-[9px] uppercase tracking-[0.3em] text-[#1E2A21] opacity-0 lg:gap-4 lg:text-[11px] lg:tracking-[0.4em]"
            >
              Produced in Bali
              <span className="hidden h-px w-10 bg-[#C49A3C] lg:block" />
            </p>
            <p
              data-intro
              style={serif}
              className="mt-5 hidden text-[clamp(1.5rem,2.1vw,2.5rem)] italic leading-[1.15] text-[#1E2A21] opacity-0 lg:block"
            >
              Italian craft,
              <br />
              island sunsets.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 z-20">
          <div className="absolute left-[6vw] top-[12.5%] w-[88vw] lg:left-[8vw] lg:top-[17%] lg:w-[32vw]">
            <p
              data-phase
              className="invisible mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#F4F1EA] lg:mb-5 lg:gap-4 lg:text-[11px] lg:tracking-[0.4em]"
            >
              <span className="h-px w-6 bg-[#C49A3C] lg:w-10" />
              Born on the island
            </p>
            <h2
              data-phase
              style={serif}
              className="invisible text-[clamp(1.75rem,7.6vw,2.4rem)] font-medium leading-[1.05] text-[#F4F1EA] lg:text-[clamp(2.25rem,3.6vw,4rem)]"
            >
              Italian soul,
              <br />
              Balinese sunset.
            </h2>
          </div>

          <div
            data-phase
            className="invisible absolute bottom-[12%] left-[8vw] hidden items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-[#F4F1EA] lg:flex"
          >
            <span className="h-12 w-px animate-pulse bg-[#C49A3C]" />
            Scroll
          </div>

          <div className="absolute bottom-[4%] left-[6vw] w-[88vw] lg:bottom-[12%] lg:left-auto lg:right-[8vw] lg:w-[26vw]">
            <p
              data-phase
              className="invisible text-[12.5px] leading-relaxed text-[#F4F1EA]/90 lg:text-[15px]"
            >
              Isola brings the character of Italian winemaking to the island of
              Bali. Every bottle is made to be shared slowly, with good company
              and a long view of the horizon.
            </p>
            <div
              data-phase
              className="invisible mt-8 hidden grid-cols-3 gap-6 border-t border-[#C49A3C] pt-5 lg:grid"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p
                    style={serif}
                    className="text-[28px] leading-none text-[#F4F1EA]"
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#F4F1EA]/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={relaxRef}
        className="absolute left-0 top-full z-20 h-full w-full bg-[#F4F1EA]"
      >
        <div className="absolute left-[6vw] right-[6vw] top-[11%] lg:left-[8vw] lg:right-auto lg:top-[17%] lg:w-[48vw]">
          <p
            data-relax
            className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#1E2A21] lg:mb-6 lg:gap-4 lg:text-[11px]"
          >
            <span className="h-px w-8 bg-[#C49A3C] lg:w-10" />
            Visit Isola Wine
          </p>
          <h2
            data-relax
            style={serif}
            className="text-[clamp(1.9rem,8.2vw,2.6rem)] font-medium leading-[1.05] text-[#1E2A21] lg:text-[clamp(2.75rem,4.6vw,5rem)]"
          >
            Just relax, and
            <br />
            go with the flow
          </h2>
          <p
            data-relax
            className="mt-6 hidden max-w-md text-[15px] leading-relaxed text-[#1E2A21]/75 lg:block"
          >
            Wander the vineyards, step inside the winery and taste Italian wine
            made on the island. Slow afternoons, warm company and a view that
            makes every glass taste better.
          </p>
          <div data-relax className="mt-8 hidden lg:block">
            <Link
              href="/Gallery/wine"
              className="inline-flex items-center gap-3 rounded-full border border-[#1E2A21] px-8 py-3 text-[11px] uppercase tracking-[0.3em] text-[#1E2A21] transition-colors duration-300 hover:bg-[#1E2A21] hover:text-[#F4F1EA]"
            >
              <span>Discover our wines</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-[17%] left-[8vw] hidden w-[48vw] lg:block">
          <span
            data-line
            className="block h-px w-full bg-[#C49A3C]/60"
          />
          <div className="grid grid-cols-3 gap-8 pt-6">
            {EXPERIENCES.map((item) => (
              <div key={item.number} data-relax>
                <p
                  style={serif}
                  className="text-[13px] tracking-[0.2em] text-[#C49A3C]"
                >
                  {item.number}
                </p>
                <p style={serif} className="mt-2 text-2xl text-[#1E2A21]">
                  {item.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#1E2A21]/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={landingRef}
          className="absolute left-[28vw] top-[27%] h-[40%] w-[44vw] border border-[#C49A3C]/50 lg:left-auto lg:right-[8vw] lg:top-[17%] lg:h-[66%] lg:w-[26vw]"
        >
          <p
            data-relax
            className="absolute left-3 top-3 text-[8px] uppercase tracking-[0.3em] text-[#1E2A21]/70 lg:left-4 lg:top-4 lg:text-[10px]"
          >
            Isola Wine · Bali
          </p>
        </div>

        <div className="absolute bottom-[5%] left-[6vw] right-[6vw] lg:hidden">
          <p
            data-relax
            className="text-[13px] leading-relaxed text-[#1E2A21]/75"
          >
            Vineyard walks, winery visits and slow tastings. Italian wine, made
            on the island and made to be enjoyed unhurried.
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div data-relax>
              <Link
                href="/Gallery/wine"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E2A21] px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-[#1E2A21] transition-colors duration-300 hover:bg-[#1E2A21] hover:text-[#F4F1EA]"
              >
                <span>Our wines</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div data-relax>
              <OurStoryButton />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-center">
        <div ref={bottleRef} className="-mb-[7svh] will-change-transform">
          <Image
            src="/assets/imgs/Background/Isolabottle.png"
            alt="Isola Wine bottle"
            width={600}
            height={1800}
            priority
            className="h-[91svh] w-auto"
          />
        </div>
      </div>
    </section>
  );
}