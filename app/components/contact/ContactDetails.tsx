import { CONTACT_DETAILS, WHATSAPP_URL } from "./contact-data";

export default function ContactDetails() {
  return (
    <aside className="flex flex-col rounded-xl bg-[#1E2A21] p-6 text-[#F8F6EF] sm:p-10">
      <h2 className="font-[family-name:var(--font-contact-serif)] text-3xl font-light sm:text-4xl">
        Contact details
      </h2>

      <span className="mt-5 block h-px w-14 bg-[#C49A3C]" />

      <dl className="mt-8 flex flex-col gap-6">
        {CONTACT_DETAILS.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#C49A3C]">
              {item.label}
            </dt>

            <dd className="text-sm font-light leading-relaxed text-[#F8F6EF]">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="break-words transition-colors hover:text-[#C49A3C]"
                >
                  {item.value}
                </a>
              ) : (
                item.value 
              )}
            </dd>
          </div>
        ))}
      </dl>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex h-14 items-center justify-center rounded-full bg-[#C49A3C] text-[11px] font-medium uppercase tracking-[0.22em] text-[#1E2A21] transition-opacity hover:opacity-90"
      >
        Chat on WhatsApp
      </a>
    </aside>
  );
}