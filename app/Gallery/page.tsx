import Link from "next/link";
import Footer from "../components/layouts/Footer";
import TextTitle from "../components/ui/title/Texttitle";
import ScrollVelocityWave from "../components/animations/Scrollvelocitywave";

const galleryCategories = [
  { label: "Vineyards", href: "/Gallery/Vineyards" },
  { label: "Wine", href: "/Gallery/Wine" },
  { label: "Tours", href: "/Gallery/Tours" },
  { label: "Winery", href: "/Gallery/Winery" },
] as const;

export default function GalleryPage() {
  const imageModules = import.meta.glob("../assets/imgs/wine/*.jpg", {
    eager: true,
  });
  const galleryImages = Object.values(imageModules).map(
    (mod) => (mod as { default: string }).default,
  );
  return (
    <>
      <section className="relative z-30 bg-[#F4F1EA] pb-32 pt-50">
        <div className="px-6">
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
          <ScrollVelocityWave
            images={galleryImages}
            columns={4}
            parallaxDistance={200}
            waveIntensity={0.05}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
