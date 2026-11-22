"use client";

import React, { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useBackgroundTheme } from "./useBackgroundTheme";

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

const COLOR_CREAM = "#F4F1EA";
const COLOR_INK = "#1A1A1C";

const LOGO_ON_LIGHT = "/assets/logo/LogoDark.png";
const LOGO_ON_DARK = "/assets/logo/Logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/isolawine/";
const MAPS_URL = "https://www.google.com/maps?q=-8.1368781,115.2394467";
const WHATSAPP_URL = "https://wa.me/";

const NAVBAR_PROBE_Y = 60;
const BUTTON_PROBE_Y_MOBILE = 48;
const BUTTON_PROBE_Y_DESKTOP = 72;

const navLinks: NavItem[] = [
  { list: "ABOUT", href: "/About" },
  { list: "VINEYARDS", href: "/Vineyards" },
  { list: "WINERY", href: "/Winery" },
  { list: "WINES", href: "/Wine" },
  { list: "GALLERY", href: "/Gallery" },
  { list: "SHOP", href: "/Shop" },
  { list: "CONTACT", href: "/Contact" },
];

const socialLinks = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "Google Maps", href: MAPS_URL },
  { label: "WhatsApp", href: WHATSAPP_URL },
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

  const navTheme = useBackgroundTheme(NAVBAR_PROBE_Y);
  const buttonTheme = useBackgroundTheme(
    isMobileOrTablet ? BUTTON_PROBE_Y_MOBILE : BUTTON_PROBE_Y_DESKTOP,
  );

  const navColor = navTheme === "light" ? COLOR_INK : COLOR_CREAM;
  const logoSrc = navTheme === "light" ? LOGO_ON_LIGHT : LOGO_ON_DARK;
  const buttonBackground = buttonTheme === "light" ? COLOR_INK : COLOR_CREAM;
  const buttonForeground = buttonTheme === "light" ? COLOR_CREAM : COLOR_INK;

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
      style={{ color: navColor }}
      className="flex h-[20px] overflow-hidden text-[11px] font-light uppercase leading-[20px] tracking-[0.22em] transition-colors duration-300 xl:text-xs"
    >
      {link.list.split("").map((char, charIndex) => (
        <span key={charIndex} className="relative block h-full">
          <motion.span
            className="block"
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
            className="absolute top-full left-0 block"
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
      <header data-navbar-root className="font-cabinet">
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
                src={logoSrc}
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
                style={{
                  backgroundColor: buttonBackground,
                  color: buttonForeground,
                  borderColor: buttonBackground,
                }}
                className="flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-3xl border shadow-2xl transition-[background-color,color,border-color,transform] duration-300 hover:scale-105 active:scale-95 lg:h-16 lg:w-16"
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
              className="fixed inset-y-0 right-0 z-[999] flex w-full flex-col justify-between overflow-y-auto bg-[#F4F1EA] p-6 text-[#1A1A1C] shadow-2xl sm:w-[450px] lg:w-[500px] lg:p-12"
            >
              <div className="flex w-full shrink-0 items-center justify-between">
                <Image
                  src={LOGO_ON_LIGHT}
                  alt="Isola Wine Logo"
                  width={80}
                  height={80}
                  className="h-12 w-auto object-contain"
                />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-14 w-14 items-center justify-center rounded-3xl border border-[#D9D3C4] bg-[#E8E3D6] text-[#1A1A1C] transition-opacity hover:opacity-70"
                >
                  <FiX size={26} />
                </button>
              </div>

              <div className="my-auto flex shrink-0 flex-col gap-5 py-6 pl-2 lg:pl-6">
                <span className="border-b border-[#D9D3C4] pb-4 font-mono text-xs uppercase tracking-widest text-[#6B665C]">
                  Navigation
                </span>

                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setSidebarHoveredIndex(index)}
                    onMouseLeave={() => setSidebarHoveredIndex(null)}
                    className="group flex items-center justify-between border-b border-[#D9D3C4] pb-4 pr-4 text-4xl font-light tracking-wide transition-colors sm:text-5xl lg:text-6xl"
                  >
                    <span className="relative block h-[48px] w-full overflow-hidden sm:h-[60px] lg:h-[72px]">
                      <motion.span
                        className="block text-[#6B665C]"
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
                        className="absolute top-full left-0 block text-[#1A1A1C]"
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
                      className="shrink-0 text-[#6B665C] transition-colors group-hover:text-[#1A1A1C]"
                    />
                  </Link>
                ))}
              </div>

              <div className="flex shrink-0 flex-col gap-4 border-t border-[#D9D3C4] pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6B665C]">
                  Socials
                </span>

                <div className="flex flex-wrap gap-5 text-sm text-[#6B665C]">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#1A1A1C]"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}