import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticWrapper from "../../animations/Magnetic/MagneticWrapper";

type DiscoverButtonProps = {
  href?: string;
  label?: string;
};

const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' };

export default function DiscoverButton({
  href = "/Gallery/wine",
  label = "Discover our wines",
}: DiscoverButtonProps) {
  return (
    <div className="inline-block">
      <MagneticWrapper range={0.3}>
        <div className="pointer-events-auto -m-4 p-4">
          <Link
            href={href}
            style={serif}
            className="group flex w-fit items-center gap-3 rounded-full border border-[#1E2A21] px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[#1E2A21] transition-colors duration-500 hover:bg-[#1E2A21] hover:text-[#F4F1EA] lg:px-8 lg:text-[12px]"
          >
            <span>{label}</span>
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </MagneticWrapper>
    </div>
  );
}