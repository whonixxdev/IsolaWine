
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import { Cormorant_Garamond, Jost } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

interface FooterLink {
  label: string;
  href: string;
}

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

const exploreLinks: FooterLink[] = [
  { label: "About", href: "/About" },
  { label: "Vineyards", href: "/Vineyards" },
  { label: "Winery", href: "/Winery" },
  { label: "Wines", href: "/Wine" },
  { label: "Gallery", href: "/Gallery" },
  { label: "Shop", href: "/Shop" },
  { label: "Contact Us", href: "/Contact" },
];

const wineLinks: FooterLink[] = [
  { label: "Isola Bianco", href: "/Wine" },
  { label: "Isola Rosso", href: "/Wine" },
  { label: "Isola Rosato", href: "/Wine" },
  { label: "Isola Moscato", href: "/Wine" },
  { label: "See All", href: "/Wine"}
];

const contactItems: ContactItem[] = [
  {
    label: "Winery",
    value: "Tajun, Kec. Kubutambahan, Kabupaten Buleleng, Bali 81172",
  },
  {
    label: "Distributor",
    value:
      "Jl. Gn. Tangkuban Perahu No.1A, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
  },
  {
    label: "Open Hours",
    value: "09:00 — 18:00 (Monday — Friday)",
  },
  {
    label: "Email",
    value: "info@cantinebalitawine.com",
    href: "mailto:info@cantinebalitawine.com",
  },
  {
    label: "WhatsApp",
    value: "+62 811 3970 051",
    href: "https://wa.me/628113970051",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M16.5 7.5v.01" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.2v5.6l4.8-2.8z" fill="#1E2A21" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10.5" />
      <path
        d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.4-1.4h1.5V5.5c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.1H8.3V14h2.4v7z"
        fill="#1E2A21"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
      <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

const socials: {
  label: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/isolawine/",
    icon: <InstagramIcon />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC10ygfVTlSB0o9dSrEozEjQ",
    icon: <YoutubeIcon />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/cantinebalita/",
    icon: <FacebookIcon />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/628113970051",
    icon: <WhatsappIcon />,
  },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-[12px] font-medium tracking-[0.25em] text-[#C49A3C]">
        {title}
      </h3>

      <ul className="mt-8 flex flex-col gap-[17px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-block text-[17px] font-light leading-[22px] text-[#F8F6EF] transition-all duration-300 hover:translate-x-1 hover:text-[#C49A3C]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={`${jost.className} bg-[#1E2A21] text-[#F8F6EF]`}>

      <div className="border-t border-[#F8F6EF]/15" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-12 px-6 py-14 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.9fr_1fr_1fr_1.5fr] lg:gap-x-10 lg:px-16 lg:py-[72px]"
      >
        <motion.div
          variants={itemVariants}
          className="sm:col-span-2 lg:col-span-1"
        >
          <Image
            src="/assets/logo/LogoAbout.png"
            alt="Isola Vineyards"
            width={120}
            height={130}
            className="h-[130px] w-[120px] object-contain"
          />

          <p
            className={`${cormorant.className} mt-6 text-[32px] font-light italic leading-tight text-[#C49A3C] md:text-[34px]`}
          >
            Italian wine made in Bali
          </p>

          <p className="mt-5 max-w-[320px] text-[16px] font-light leading-[26px] text-[#F8F6EF]/70">
            Grown, fermented and bottled 100% in Bali, following strict Italian
            organic winemaking traditions.
          </p>
        </motion.div>

        <LinkColumn title="EXPLORE" links={exploreLinks} />

        <LinkColumn title="WINES" links={wineLinks} />

        <motion.div
          variants={itemVariants}
          className="sm:col-span-2 lg:col-span-1"
        >
          <h3 className="text-[12px] font-medium tracking-[0.25em] text-[#C49A3C]">
            CONTACT
          </h3>

          <div className="mt-8 flex flex-col gap-5">
            {contactItems.map((item) => (
              <div key={item.label}>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#F8F6EF]/55">
                  {item.label}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1.5 inline-block text-[16px] font-light leading-6 text-[#F8F6EF] transition-colors duration-300 hover:text-[#C49A3C]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1.5 max-w-[380px] text-[16px] font-light leading-6 text-[#F8F6EF]">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C49A3C]/40 text-[#F8F6EF] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C49A3C] hover:text-[#C49A3C]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-[#F8F6EF]/15" />

      <div className="grid grid-cols-1 items-center gap-3 px-6 py-6 text-center md:grid-cols-3 md:px-10 md:text-left lg:px-16">
        <p className="text-[13px] font-light tracking-wide text-[#F8F6EF]/55">
          © {year ?? "2026"} Cantine Balita
          <span className="mx-2">|</span>
          All Rights Reserved
        </p>

        <p className="text-center text-[12px] font-semibold tracking-[0.25em] text-[#C49A3C]">
          DRINK RESPONSIBLY. 21+ ONLY.
        </p>

        <p className="text-[13px] font-light uppercase tracking-[0.1em] text-[#F8F6EF]/55 md:text-right">
          Isola Wine
          <span className="mx-2">·</span>
          Made by Isola IT
        </p>
      </div>
    </footer>
  );
}
