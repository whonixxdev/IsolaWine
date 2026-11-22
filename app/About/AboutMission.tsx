import Image from "next/image";
import TextTitle from "../components/ui/title/Texttitle";

export default function AboutMission() {
  return (
    <div className="-mt-30 w-full">
      <div 
        className="relative h-screen w-full overflow-hidden"
        style={{ borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}
      >
        <Image
          src="/assets/imgs/Background/BackgroundAbout.png"
          alt="Isola Wine Team Harvest"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-20 text-center md:py-28">
        <TextTitle
          eyebrow="Our Mission"
          title="Our Mission is to produce Balinese wines that can challenge Global brands."
          as="h2"
          titleClassName="text-3xl sm:text-5xl md:text-5xl"
        />
      </section>
    </div>
  );
}