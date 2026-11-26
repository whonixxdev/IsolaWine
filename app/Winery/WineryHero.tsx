"use client";

import { useRef, useSyncExternalStore } from "react";
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

const eyebrowClass =
  "flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.34em] sm:text-[11px] lg:text-[12px]";

const footerTextClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] sm:text-[11px] lg:text-[12px] lg:tracking-[0.26em]";

const sideTextClass =
  "text-[11px] font-medium uppercase tracking-[0.3em] [writing-mode:vertical-rl]";

const cornerClass = "absolute h-4 w-4 border-[#C49A3C] lg:h-6 lg:w-6";

const titleGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.35, staggerChildren: 0.11 } },
};

const letterRise: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const footerGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 1.5, staggerChildren: 0.14 } },
};

const subscribeDesktop = (callback: () => void) => {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

const getDesktopSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;

const getDesktopServerSnapshot = () => false;

export default function WineryHero() {
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
        className="relative h-svh min-h-[34rem] w-full overflow-hidden bg-[#1E2A21]"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/assets/imgs/Background/backgroundWinery.webp"
            alt="Winemakers checking a stainless steel tank at Isola Winery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[38%_center] lg:object-center"
          />
        </motion.div>

        <div aria-hidden="true" className="absolute inset-0 bg-[#1E2A21]/30" />

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
          className="pointer-events-none absolute inset-3 z-10 border border-[#F8F6EF]/25 sm:inset-5 lg:inset-8"
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
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7, ease: EASE }}
          className={`${labelFont.className} absolute left-11 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 text-[#F8F6EF] lg:flex`}
        >
          <span className="h-12 w-px bg-[#C49A3C]" />
          <span className={`${sideTextClass} rotate-180`}>
            Pure Italian Wine
          </span>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7, ease: EASE }}
          className={`${labelFont.className} absolute right-11 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 text-[#F8F6EF] lg:flex`}
        >
          <span className={sideTextClass}>Italian craft · island sunsets</span>
          <span className="h-12 w-px bg-[#C49A3C]" />
        </motion.div>

        <motion.div
          style={
            isDesktop ? { opacity: contentOpacity, y: contentY } : undefined
          }
          className="absolute inset-0 z-10 text-[#F8F6EF]"
        >
          <div className="flex h-full items-center justify-center px-[6vw] pb-[3svh]">
            <motion.div
              variants={titleGroup}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              <motion.p
                variants={fadeUp}
                className={`${labelFont.className} ${eyebrowClass} mb-5 lg:mb-8`}
              >

              </motion.p>

              <h1
                aria-label="Isola Winery"
                className={`${titleFont.className} flex flex-col items-center text-center`}
              >
                <span
                  aria-hidden="true"
                  className="-mr-[0.08em] flex text-[clamp(4.25rem,10.5vw,9.5rem)] font-light leading-none tracking-[0.08em]"
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
                  className="-mt-[1vw] -mr-[0.04em] text-[clamp(1.75rem,4.6vw,4.25rem)] font-normal uppercase italic leading-none tracking-[0.04em]"
                >
                  Winery
                </motion.span>
              </h1>

              <motion.p
                variants={fadeUp}
                className={`${labelFont.className} mt-5 max-w-[20rem] text-center text-[13px] leading-relaxed tracking-[0.04em] text-[#F8F6EF]/90 sm:text-[14px] lg:mt-7 lg:max-w-none lg:text-[15px]`}
              >
                Where every bottle of Isola is made.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            variants={footerGroup}
            initial="hidden"
            animate="visible"
            className={`${labelFont.className} absolute inset-x-0 bottom-0 px-[6vw] pb-10 lg:px-[4vw] lg:pb-[7svh]`}
          >
            <div className="grid grid-cols-2 items-start gap-y-7 lg:grid-cols-3">
              <motion.p
                variants={fadeUp}
                className={`${footerTextClass} justify-self-start text-left`}
              >
                Bali, Indonesia
              </motion.p>

              <motion.p
                variants={fadeUp}
                aria-hidden="true"
                className="order-last col-span-2 -mr-[0.34em] justify-self-center text-[11px] font-normal uppercase tracking-[0.34em] sm:text-[12px] lg:order-none lg:col-span-1 lg:text-[13px]"
              >
                Scroll
              </motion.p>

              <motion.p
                variants={fadeUp}
                className={`${footerTextClass} justify-self-end text-right`}
              >
                Organic
                <span aria-hidden="true" className="mx-[0.8em]">
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
