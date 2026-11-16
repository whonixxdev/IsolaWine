"use client";

import React, { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type PageRoutes =
  | "/About"
  | "/Vineyards"
  | "/Winery"
  | "/Wine"
  | "/Gallery"
  | "/Gallery/Winery"
  | "/Gallery/Vineyards"
  | "/Gallery/Wine"
  | "/Gallery/Tours"
  | "/Contact"
  | "/Shop";

export interface BaseNavItem {
  list: string;
  href: PageRoutes;
}

export interface NavItem extends BaseNavItem {
  child?: BaseNavItem[];
}

interface NavbarProps {
  children?: ReactNode;
}

const navLinks: NavItem[] = [
  { list: "ABOUT", href: "/About" },
  { list: "VINEYARDS", href: "/Vineyards" },
  { list: "WINERY", href: "/Winery" },
  { list: "WINES", href: "/Wine" },
  {
    list: "GALLERY",
    href: "/Gallery",
    child: [
      { list: "WINERY", href: "/Gallery/Winery" },
      { list: "VINEYARDS", href: "/Gallery/Vineyards" },
      { list: "WINE", href: "/Gallery/Wine" },
      { list: "TOURS", href: "/Gallery/Tours" },
    ],
  },
  { list: "SHOP", href: "/Shop" },
  { list: "CONTACT", href: "/Contact" },
];

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

export default function Navbar({ children }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [sidebarHoveredIndex, setSidebarHoveredIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsNavbarHidden(window.scrollY > 20);
    };

    checkScreenSize();
    handleScroll();

    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const renderDesktopLink = (link: NavItem) => (
    <Link
      key={link.href}
      href={link.href}
      onMouseEnter={() => setHoveredHref(link.href)}
      onMouseLeave={() => setHoveredHref(null)}
      className="flex h-[20px] overflow-hidden text-[11px] font-light uppercase leading-[20px] tracking-[0.22em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] xl:text-xs"
    >
      {link.list.split("").map((char, charIndex) => (
        <span key={charIndex} className="relative block h-full">
          <motion.span
            className="block text-[#F8F6EF]"
            animate={{
              y: hoveredHref === link.href ? "-100%" : "0%",
            }}
            transition={{
              type: "tween",
              ease: [0.215, 0.61, 0.355, 1],
              duration: 0.3,
              delay: charIndex * 0.02,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>

          <motion.span
            className="absolute top-full left-0 block text-[#F8F6EF]"
            animate={{
              y: hoveredHref === link.href ? "-100%" : "0%",
            }}
            transition={{
              type: "tween",
              ease: [0.215, 0.61, 0.355, 1],
              duration: 0.3,
              delay: charIndex * 0.02,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </Link>
  );

  return (
    <>
      <header className="font-cabinet">
        <motion.div
          animate={{
            y: isNavbarHidden && !isMobileOrTablet ? "-100%" : "0%",
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-6 pointer-events-none lg:px-12 lg:py-8"
        >
          <nav className="pointer-events-auto grid w-full grid-cols-[1fr_auto_1fr] items-center">
            <div className="hidden items-center justify-start gap-8 lg:flex xl:gap-12">
              {leftLinks.map(renderDesktopLink)}
            </div>

            <Link
              href="/"
              aria-label="Isola Wine"
              className="col-start-2 flex select-none items-center justify-center"
            >
              <Image
                src="/assets/logo/Logo.png"
                alt="Isola Wine Logo"
                width={80}
                height={80}
                priority
                className="h-12 w-auto object-contain lg:h-14"
              />
            </Link>

            <div className="hidden items-center justify-end gap-8 lg:flex xl:gap-12">
              {rightLinks.map(renderDesktopLink)}
            </div>
          </nav>
        </motion.div>

        <AnimatePresence>
          {(isMobileOrTablet || isNavbarHidden) && (
            <motion.div
              initial={{ x: "150%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "150%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
                restDelta: 0.001,
              }}
              className="fixed top-5 right-5 z-[60] flex items-center gap-3 lg:top-10 lg:right-12"
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={open}
                className="flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-3xl border border-[var(--border-color)] bg-[var(--pill-color)] text-[var(--active-text)] shadow-2xl transition-transform hover:scale-105 active:scale-95 lg:h-16 lg:w-16"
              >
                <span className="block h-[2px] w-6 rounded-full bg-current" />
                <span className="block h-[2px] w-6 rounded-full bg-current" />
                <span className="block h-[2px] w-6 rounded-full bg-current" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                duration: 0.5,
              }}
              className="fixed inset-y-0 right-0 z-[999] flex w-full flex-col justify-between bg-[var(--background)] p-6 text-[var(--foreground)] shadow-2xl sm:w-[450px] lg:w-[500px] lg:p-12"
            >
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/assets/logo/Logo.png"
                  alt="Isola Wine Logo"
                  width={80}
                  height={80}
                  className="h-12 w-auto object-contain"
                />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-14 w-14 items-center justify-center rounded-3xl border border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-primary)] transition-colors hover:opacity-70"
                >
                  <FiX size={26} />
                </button>
              </div>

              <div className="my-auto flex flex-col gap-5 pl-2 lg:pl-6">
                <span className="border-b border-[var(--border-color)] pb-4 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                  Navigation
                </span>

                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setSidebarHoveredIndex(index)}
                    onMouseLeave={() => setSidebarHoveredIndex(null)}
                    className="group flex items-center justify-between border-b border-[var(--border-color)] pb-4 pr-4 text-4xl font-light tracking-wide transition-colors sm:text-5xl lg:text-6xl"
                  >
                    <span className="relative block h-[48px] w-full overflow-hidden sm:h-[60px] lg:h-[72px]">
                      <motion.span
                        className="block text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                        animate={{
                          y: sidebarHoveredIndex === index ? "-100%" : "0%",
                        }}
                        transition={{
                          type: "tween",
                          ease: [0.215, 0.61, 0.355, 1],
                          duration: 0.35,
                        }}
                      >
                        {link.list}
                      </motion.span>

                      <motion.span
                        className="absolute top-full left-0 block text-[var(--text-primary)]"
                        animate={{
                          y: sidebarHoveredIndex === index ? "-100%" : "0%",
                        }}
                        transition={{
                          type: "tween",
                          ease: [0.215, 0.61, 0.355, 1],
                          duration: 0.35,
                        }}
                      >
                        {link.list}
                      </motion.span>
                    </span>

                    <FiPlus
                      size={24}
                      className="shrink-0 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]"
                    />
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 border-t border-[var(--border-color)] pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                  Socials
                </span>

                <div className="flex flex-wrap gap-5 text-sm text-[var(--text-secondary)]">
                  <a
                    href="https://instagram.com/balco________"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--text-primary)]"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--text-primary)]"
                  >
                    Google Maps
                  </a>

                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--text-primary)]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {children}
    </>
  );
}
