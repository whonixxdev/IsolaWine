import Link from "next/link";

import TextTitle from "../components/ui/title/Texttitle";
import GalleryWine from "./Wine/GalleryWine";
import GalleryVeneyards from "./Vineyards/GalleryVineyards";


const galleryCategories = [
  { label: "Vineyards", href: "/Gallery/Vineyards" },
  { label: "Wine", href: "/Gallery/Wine" },
  { label: "Tours", href: "/Gallery/Tours" },
  { label: "Winery", href: "/Gallery/Winery" },
] as const;

export default function GalleryPage() {
  return (
    <>
      <section className="relative z-30 bg-[#F4F1EA] pb-50 pt-50">
        <div className="mb-16 px-6">
          <TextTitle eyebrow="Our World" title="Gallery" as="h1" />

          <nav
            aria-label="Gallery categories"
            className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {galleryCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="font-cabinet inline-flex items-center justify-center rounded-full border border-[#1E2A21] px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#1E2A21] transition-colors duration-300 hover:bg-[#1E2A21] hover:text-[#F4F1EA]"
              >
                {category.label}
              </Link>
            ))}
          </nav>
        </div>

        <GalleryVeneyards/>
        <GalleryWine />
      </section>


    </>
  );
}