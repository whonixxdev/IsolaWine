import TextTitle from "../ui/title/Texttitle";
import LocationExplorer from "./explore";
import { labelFont } from "./LocationFonts";


export default function LocationsPage() {
  return (
    <main className="min-h-svh bg-[#F8F6EF] px-[6vw] pb-24 pt-32 text-[#1E2A21] sm:pt-36 lg:pb-32 lg:pt-44">
      <TextTitle eyebrow="Where to Find Us" title="Locations" as="h1" />

      <p
        className={`${labelFont.className} mx-auto mt-6 max-w-xl text-center text-[14px] leading-[1.8] tracking-[0.02em] text-[#1E2A21]/80 sm:text-[15px] lg:mt-8`}
      >
        Find where to buy Isola Wine. Search by name or area, or use your
        location to see the nearest places first.
      </p>

      <div className="mx-auto mt-12 max-w-[80rem] lg:mt-16">
        <LocationExplorer />
      </div>
    </main>
  );
}