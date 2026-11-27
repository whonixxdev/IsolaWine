import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type OurStoryButtonProps = {
  href?: string;
};

const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' };

export default function OurStoryButton({
  href = "/About",
}: OurStoryButtonProps) {
  return (
    <Link
      href={href}
      aria-label="Our Story"
      className="group relative flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[#C49A3C] text-[#1E2A21] transition-colors duration-500 hover:border-[#1E2A21] hover:bg-[#1E2A21] hover:text-[#F4F1EA] lg:h-[120px] lg:w-[120px]"
    >
      <ArrowUpRight
        size={14}
        strokeWidth={1.5}
        className="absolute left-[18px] top-[17px] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:left-[24px] lg:top-[22px]"
      />
      <span
        style={serif}
        className="text-center text-[13px] uppercase leading-[1.5] tracking-[0.18em] lg:text-[16px]"
      >
        Our
        <br />
        Story
      </span>
    </Link>
  );
}