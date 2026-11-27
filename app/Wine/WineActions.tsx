"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import {
  ORDER_EMAIL,
  WHATSAPP_NUMBER,
} from "../components/ui/button/OrderActionButtons";
import { labelFont } from "./Winefonts";
import MagneticWrapper from "../components/animations/Magnetic/MagneticWrapper";

interface WineActionsProps {
  name: string;
  type: string;
}

export default function WineActions({ name, type }: WineActionsProps) {
  const orderHref = "/Shop"

  const mailSubject = `Inquiry: ${name}`;
  const mailBody = `Hello Cantine Balita / Isola Wine,\n\nI would like to know more about:\n- Wine: ${name}\n- Type: ${type}\n\nPlease share availability, pricing, and delivery details.\n\nThank you.`;
  const mailHref = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <div
      className={`${labelFont.className} flex flex-col gap-3 sm:flex-row sm:items-center`}
    >
      <MagneticWrapper range={0.3}>
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#1E2A21] px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F8F6EF] transition-colors duration-300 hover:bg-[#5A1C26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A1C26]"
        >
          <span>Order now</span>
          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </MagneticWrapper>
      <MagneticWrapper range={0.3}>
        <a
          href={mailHref}
          className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#D8D0C2] px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#1E2A21] transition-colors duration-300 hover:border-[#5A1C26] hover:text-[#5A1C26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A1C26]"
        >
          <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
          <span>Contact email</span>
        </a>
      </MagneticWrapper>
    </div>
  );
}
