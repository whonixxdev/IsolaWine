import Footer from "../../components/layouts/Footer";
import TextTitle from "../../components/ui/title/Texttitle";
import GalleryCategories from "../gallerycategories";
import GalleryTours from "./GalleryTours"; // Sesuaikan nama komponennya

export default function GalleryToursPage() {
  return (
    <>
      <section className="relative z-30 bg-[#F4F1EA] pb-50 pt-50">
        <div className="mb-16 px-6">
          <TextTitle eyebrow="Gallery" title="TOURS" as="h1" />
          <GalleryCategories active="/Gallery/Tours" />
        </div>

        {/* Dibungkus div dengan margin-top agar tidak terlalu dekat dengan button */}
        <div className="mt-16 md:mt-24">
          <GalleryTours />
        </div>
      </section>

    </>
  );
}