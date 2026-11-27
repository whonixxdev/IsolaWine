"use client";

import { useRef, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Cormorant_Garamond, Jost } from "next/font/google";
import {
  MotionConfig,
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const labelFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const EASE = [0.22, 1, 0.36, 1] as const;
const TITLE_LETTERS = "ISOLA".split("");
const DESKTOP_QUERY = "(min-width: 1024px)";
const REPLAY_VIEWPORT = { once: false, amount: "some" as const };

const footerTextClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-[#F8F6EF]/80 sm:text-[11px] lg:text-[11px] lg:tracking-[0.28em]";

const sideTextClass =
  "text-[10px] font-medium uppercase tracking-[0.32em] text-[#F8F6EF]/75 [writing-mode:vertical-rl]";

const cornerClass =
  "absolute h-3.5 w-3.5 border-[#C49A3C]/70 lg:h-5 lg:w-5";

const titleGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.18, staggerChildren: 0.08 } },
};

const letterRise: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const footerGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.55, staggerChildren: 0.1 } },
};

const subscribeDesktop = (callback: () => void) => {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

const getDesktopSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;

const getDesktopServerSnapshot = () => false;

export default function AboutHero() {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement>(null);

  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot,
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        className="relative h-svh min-h-[36rem] w-full overflow-hidden rounded-b-[15px] bg-[#1E2A21]"
      >
        <motion.div
          key={`bg-${pathname}`}
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={REPLAY_VIEWPORT}
          transition={{ duration: 1.5, ease: EASE }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/assets/imgs/Background/BackgroundAbout.png"
            alt="Isola Wine Team Harvest in Bali"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[38%_25%] lg:object-[center_28%]"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#151E17]/65 via-[#151E17]/48 to-[#151E17]/75"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,30,23,0.42)_0%,rgba(21,30,23,0.12)_65%,rgba(21,30,23,0.45)_100%)]"
        />

        {/* <motion.div
          key={`frame-${pathname}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={REPLAY_VIEWPORT}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
          className="pointer-events-none absolute inset-4 z-10 border border-[#F8F6EF]/15 sm:inset-6 lg:inset-9"
        >
          <span
            className={`${cornerClass} -left-px -top-px border-l border-t`}
          />
          <span
            className={`${cornerClass} -right-px -top-px border-r border-t`}
          />
          <span
            className={`${cornerClass} -bottom-px -left-px border-b border-l`}
          />
          <span
            className={`${cornerClass} -bottom-px -right-px border-b border-r`}
          />
        </motion.div> */}

        <motion.div
          key={`side-left-${pathname}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={REPLAY_VIEWPORT}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          className={`${labelFont.className} absolute left-12 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex`}
        >
          <span className="h-10 w-px bg-[#C49A3C]/75" />
          <span className={`${sideTextClass} rotate-180`}>
            Pure Italian Wine
          </span>
        </motion.div>

        <motion.div
          key={`side-right-${pathname}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={REPLAY_VIEWPORT}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          className={`${labelFont.className} absolute right-12 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex`}
        >
          <span className={sideTextClass}>Italian craft · island sunsets</span>
          <span className="h-10 w-px bg-[#C49A3C]/75" />
        </motion.div>

        <motion.div
          style={
            isDesktop ? { opacity: contentOpacity, y: contentY } : undefined
          }
          className="absolute inset-0 z-10 text-[#F8F6EF]"
        >
          <div className="flex h-full items-center justify-center px-[7vw] pb-[4svh]">
            <motion.div
              key={`title-${pathname}`}
              variants={titleGroup}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              className="flex flex-col items-center"
            >
              <span
                className={`${labelFont.className} mb-3 text-[10px] font-medium uppercase tracking-[0.34em] text-[#E3C27A] sm:text-[11px]`}
              >
                Heritage & Terroir
              </span>

              <h1
                aria-label="Isola About"
                className={`${titleFont.className} flex flex-col items-center text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]`}
              >
                <span
                  aria-hidden="true"
                  className="-mr-[0.08em] flex text-[clamp(4rem,10vw,9rem)] font-light leading-none tracking-[0.08em]"
                >
                  {TITLE_LETTERS.map((letter, index) => (
                    <span
                      key={`${letter}-${index}`}
                      className="-mx-[0.05em] -my-[0.1em] inline-block overflow-hidden px-[0.05em] py-[0.1em]"
                    >
                      <motion.span
                        variants={letterRise}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    </span>
                  ))}
                </span>
                <motion.span
                  aria-hidden="true"
                  variants={fadeUp}
                  className="-mt-[0.8vw] -mr-[0.04em] text-[clamp(1.6rem,4.1vw,3.75rem)] font-normal uppercase italic leading-none tracking-[0.06em] text-[#F8F6EF]/95"
                >
                  About
                </motion.span>
              </h1>

              <span
                aria-hidden="true"
                className="mt-5 h-px w-12 bg-[#C49A3C]/70"
              />

              <motion.p
                variants={fadeUp}
                className={`${labelFont.className} mt-4 max-w-[21rem] text-center text-[13px] leading-relaxed tracking-[0.05em] text-[#F8F6EF]/90 sm:max-w-[26rem] sm:text-[14px] lg:mt-5 lg:max-w-[30rem] lg:text-[15px]`}
              >
                Italian winemaking heritage cultivated in Bali.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            key={`footer-${pathname}`}
            variants={footerGroup}
            initial="hidden"
            whileInView="visible"
            viewport={REPLAY_VIEWPORT}
            className={`${labelFont.className} absolute inset-x-0 bottom-0 px-[7vw] pb-9 lg:px-[5vw] lg:pb-[6svh]`}
          >
            <div className="grid grid-cols-2 items-center gap-y-6 lg:grid-cols-3">
              <motion.p
                variants={fadeUp}
                className={`${footerTextClass} justify-self-start text-left`}
              >
                Bali, Indonesia
              </motion.p>

              <motion.p
                variants={fadeUp}
                aria-hidden="true"
                className="order-last col-span-2 -mr-[0.34em] justify-self-center text-[10px] font-normal uppercase tracking-[0.36em] text-[#F8F6EF]/75 sm:text-[11px] lg:order-none lg:col-span-1 lg:text-[12px]"
              >
                Scroll
              </motion.p>

              <motion.p
                variants={fadeUp}
                className={`${footerTextClass} justify-self-end text-right`}
              >
                Organic
                <span aria-hidden="true" className="mx-[0.8em] text-[#C49A3C]">
                  ·
                </span>
                Small batch
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}