"use client";

import { Jost } from "next/font/google";

const buttonFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const WHATSAPP_NUMBER = "6280000000000";
export const ORDER_EMAIL = "orders@isolawine.com";

interface OrderActionButtonsProps {
  productNumber: string;
  productName: string;
  grapeVariety: string;
}

function buildWhatsAppUrl(
  productNumber: string,
  productName: string,
  grapeVariety: string,
): string {
  const message = `Hello Cantine Balita / Isola Wine, I would like to order #${productNumber} - ${productName} (${grapeVariety}). Please confirm availability, price, and delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildEmailUrl(
  productNumber: string,
  productName: string,
  grapeVariety: string,
): string {
  const subject = `Order Inquiry: #${productNumber} - ${productName}`;
  const body = `Hello Cantine Balita / Isola Wine,\n\nI would like to place an order for:\n- Wine: #${productNumber} - ${productName}\n- Varietal: ${grapeVariety}\n\nPlease share availability, pricing, and delivery details.\n\nThank you.`;
  return `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function OrderActionButtons({
  productNumber,
  productName,
  grapeVariety,
}: OrderActionButtonsProps) {
  const whatsappHref = buildWhatsAppUrl(
    productNumber,
    productName,
    grapeVariety,
  );
  const mailtoHref = buildEmailUrl(productNumber, productName, grapeVariety);

  return (
    <div className={`${buttonFont.className} mt-auto flex w-full flex-col gap-2.5 pt-6`}>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-full items-center justify-center rounded-full bg-[#1C211E] px-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F8F6EF] transition-opacity duration-200 hover:opacity-90"
      >
        ORDER VIA WHATSAPP
      </a>

      <a
        href={mailtoHref}
        className="flex h-10 w-full items-center justify-center rounded-full border border-[#D8D0C2] bg-transparent px-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1E2A21] transition-colors duration-200 hover:border-[#5A1C26] hover:text-[#5A1C26]"
      >
        ORDER VIA EMAIL
      </a>
    </div>
  );
}