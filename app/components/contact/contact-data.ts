export const SUBJECT_OPTIONS = ["Sales", "Tours", "Isola Training", "Other"] as const;

export type Subject = (typeof SUBJECT_OPTIONS)[number];

export const CONTACT_EMAIL = "info@cantinebalitawine.com";

export const WHATSAPP_URL = "https://wa.me/628113970051";

export interface ContactDetailItem {
  label: string;
  value: string;
  href?: string;
}

export const CONTACT_DETAILS: ContactDetailItem[] = [
  {
    label: "Winery",
    value: "Tajun, Kec. Kubutambahan, Kabupaten Buleleng, Bali 81172",
  },
  {
    label: "Distributor",
    value:
      "Jl. Gn. Tangkuban Perahu No.1A, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
  },
  {
    label: "Open Hours",
    value: "09:00 — 18:00 (Monday — Friday)",
  },
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "WhatsApp",
    value: "+62 811 3970 051",
    href: WHATSAPP_URL,
  },
];