"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BOTTLE_VISIBLE_RATIO } from "./home-hero.data";
import HeroIntroLayer from "./HeroIntroLayer";
import HeroSunsetPhase from "./HeroSunsetPhase";
import HeroRelaxSection from "./HeroRelaxSection";
import HeroBottleLayer from "./HeroBottleLayer";
import SectionAboutHome from "./sectionAbouthome";

gsap.registerPlugin(ScrollTrigger);

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
          const bottleRect = bottle.getBoundingClientRect();
          const landingRect = landing.getBoundingClientRect();
          const rootRect = root.getBoundingClientRect();

          const currentX = Number(gsap.getProperty(bottle, "x")) || 0;
          const currentY = Number(gsap.getProperty(bottle, "y")) || 0;

          const bottleCenterX = bottleRect.left + bottleRect.width / 2;
          const bottleCenterY = bottleRect.top + bottleRect.height / 2;

          const targetCenterX = landingRect.left + landingRect.width / 2;
          const targetCenterY = landingRect.top + landingRect.height / 2;

          return {
            centerY: rootRect.top + root.offsetHeight / 2 - bottleCenterY + currentY,
            x: currentX + (targetCenterX - bottleCenterX),
            y: currentY + (targetCenterY - bottleCenterY),
            scale:
              (landingRect.height * 0.88) /
              BOTTLE_VISIBLE_RATIO /
              bottle.offsetHeight,
          };
        };

        gsap.set(bottle, { transformPerspective: 1400, autoAlpha: 1 });
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
              duration: 4.5,
              ease: "power2.inOut",
            },
            handoff,
          )
          .to(
            bottle,
            { rotation: -8, duration: 2.2, ease: "sine.inOut" },
            handoff,
          )
          .to(
            bottle,
            { rotation: 0, duration: 2.3, ease: "sine.inOut" },
            handoff + 2.2,
          )
          .to(
            bottle,
            { autoAlpha: 0, duration: 0.4, ease: "power1.out" },
            handoff + 4.3,
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
        <HeroIntroLayer
          photoRef={photoRef}
          overlayRef={overlayRef}
          gateRef={gateRef}
          titleRef={titleRef}
          labelsRef={labelsRef}
        />
        <HeroSunsetPhase />
      </div>

      <HeroRelaxSection relaxRef={relaxRef} landingRef={landingRef} />
      <HeroBottleLayer bottleRef={bottleRef} />
    </section>
  );
}