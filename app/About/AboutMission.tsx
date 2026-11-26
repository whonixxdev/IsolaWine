import TextTitle from "../components/ui/title/Texttitle";

export default function AboutMission() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 py-16 text-center sm:px-6 md:py-24">
      <TextTitle
        eyebrow="Our Mission"
        title="Our Mission is to produce Balinese wines that can challenge Global brands."
        as="h2"
        titleClassName="text-2xl sm:text-4xl md:text-5xl"
      />
    </section>
  );
}