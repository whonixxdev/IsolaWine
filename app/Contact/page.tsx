import type { Metadata } from "next";
import TextTitle from "../components/ui/title/Texttitle";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import { contactSerif, contactSans } from "../components/contact/contact-fonts";

export const metadata: Metadata = {
  title: "Contact | Isola Wine",
  description:
    "Get in touch with Isola Wine for sales, tours, and Isola training.",
};

export default function ContactPage() {
  return (
    <main
      data-navbar-theme="light"
      className={`${contactSerif.variable} ${contactSans.variable} min-h-screen bg-[#F8F6EF] font-[family-name:var(--font-contact-sans)] text-[#1E2A21]`}
    >
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <TextTitle eyebrow="Get in Touch" title="Contact" as="h1" />

        <p className="mx-auto mt-8 max-w-xl text-center text-sm font-light leading-relaxed sm:text-base">
          Thank you for your interest in Isola Wine. Please drop us a message
          using the form below, and we will get right back to you. We look
          forward to assisting you.
        </p>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[1.55fr_1fr] lg:items-start lg:gap-8">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
    </main>
  );
}