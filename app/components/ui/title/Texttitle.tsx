import { Cormorant_Garamond, Jost } from "next/font/google";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const eyebrowFont = Jost({
  subsets: ["latin"],
  weight: ["500", "600"],
});

type HeadingTag = "h1" | "h2" | "h3";

interface TextTitleProps {
  eyebrow: string;
  title: string;
  as?: HeadingTag;
  className?: string;
}

export default function TextTitle({
  eyebrow,
  title,
  as: Heading = "h2",
  className = "",
}: TextTitleProps) {
  return (
    <div
      className={`mx-auto flex w-fit max-w-full flex-col items-center gap-3 md:gap-5 ${className}`}
    >
      <div className="flex w-full items-center gap-4 md:gap-8">
        <span aria-hidden="true" className="h-[2px] flex-1 bg-[#8C6B70]" />

        <span
          className={`${eyebrowFont.className} -mr-[0.4em] shrink-0 text-xs font-semibold uppercase tracking-[0.4em] text-[#4A1C26] sm:text-sm md:text-xl`}
        >
          {eyebrow}
        </span>

        <span aria-hidden="true" className="h-[2px] flex-1 bg-[#8C6B70]" />
      </div>

      <Heading
        className={`${titleFont.className} text-center text-5xl font-normal uppercase leading-none tracking-tight text-[#1E2A21] sm:text-7xl md:text-8xl`}
      >
        {title}
      </Heading>
    </div>
  );
}