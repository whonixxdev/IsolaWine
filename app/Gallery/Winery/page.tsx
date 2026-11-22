import TextTitle from "../../components/ui/title/Texttitle";
import GalleryCategories from "../gallerycategories";
import GalleryWine from "./GalleryWinery";

export default function GalleryWinePage() {
  return (
    <>
      <section className="relative z-30 bg-[#F4F1EA] pb-50 pt-50">
        <div className="mb-16 px-6">
          <TextTitle eyebrow="Gallery" title="WINERY" as="h1" />
          <GalleryCategories active="/Gallery/Winery" />
        </div>

        <div className="mt-16 md:mt-24">
          <GalleryWine />
        </div>
      </section>
    </>
  );
}
