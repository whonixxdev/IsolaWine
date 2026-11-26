"use client";

import { Jost } from "next/font/google";
import TextTitle from "../components/ui/title/Texttitle";
import MagneticWrapper from "../components/animations/Magnetic/MagneticWrapper";

const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const WHATSAPP_NUMBER = "628113970051";
const CONTACT_EMAIL = "info@cantinebalitawine.com";

interface WineryContactCtaProps {
  className?: string;
}

export default function WineryContactCta({
  className = "",
}: WineryContactCtaProps) {
  const whatsappMessage =
    "Hello Cantine Balita / Isola Wine team, I have a question regarding ordering.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section
      className={`w-full bg-[#F8F6EF] px-5 py-16 text-center text-[#1E2A21] sm:px-6 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <TextTitle
          eyebrow="NEED A HAND?"
          title="Questions About Ordering?"
          as="h2"
          titleClassName="!max-w-none !text-[clamp(2rem,4.5vw,3.5rem)] !font-normal !leading-[1.12] text-[#240B10]"
        />

        <p
          className={`${bodyFont.className} mt-5 max-w-md text-[14px] font-light leading-[1.75] text-[#1E2A21]/80 sm:text-[15px]`}
        >
          Chat with our team on WhatsApp (+62 811 3970 051) or write to{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-[#1E2A21]/40 underline-offset-4 transition-colors hover:text-[#5A1C26]"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <p
          className={`${bodyFont.className} mt-3 text-[12px] font-light leading-[1.7] text-[#6E6A63] sm:text-[13px]`}
        >
          Prices, availability and delivery details are confirmed personally after
          you place an order.
        </p>

        <div className="mt-7">
          <MagneticWrapper range={0.31}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bodyFont.className} inline-flex h-11 items-center justify-center rounded-full bg-[#1C211E] px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F8F6EF] transition-opacity duration-200 hover:opacity-90`}
            >
              CHAT ON WHATSAPP
            </a>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}