import Link from "next/link";

const galleryCategories = [
  { label: "Vineyards", href: "/Gallery/Vineyards" },
  { label: "Wine", href: "/Gallery/Wine" },
  { label: "Tours", href: "/Gallery/Tours" },
  { label: "Winery", href: "/Gallery/Winery" },
] as const;

interface GalleryCategoriesProps {
  active?: string;
}

export default function GalleryCategories({ active }: GalleryCategoriesProps) {
  return (
    <nav
      aria-label="Gallery categories"
      className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
    >
      {galleryCategories.map((category) => {
        const isActive = category.href === active;

        return (
          <Link
            key={category.href}
            href={category.href}
            aria-current={isActive ? "page" : undefined}
            className={`font-cabinet inline-flex items-center justify-center rounded-full border border-[#1E2A21] px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
              isActive
                ? "bg-[#1E2A21] text-[#F4F1EA]"
                : "text-[#1E2A21] hover:bg-[#1E2A21] hover:text-[#F4F1EA]"
            }`}
          >
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}