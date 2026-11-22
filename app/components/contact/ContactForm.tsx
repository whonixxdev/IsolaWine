"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { CONTACT_EMAIL, SUBJECT_OPTIONS, type Subject } from "./contact-data";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES: FormValues = { name: "", email: "", message: "" };

const fieldBase =
  "w-full border bg-white text-sm font-light text-[#1E2A21] outline-none transition-colors placeholder:text-[#8C9088] focus:border-[#1E2A21]";

function fieldBorder(hasError: boolean) {
  return hasError ? "border-[#5A1C26]" : "border-[#D9D3C4]";
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us how we can help.";
  }

  return errors;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5A1C26]"
      >
        {label} *
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-[#5A1C26]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [subject, setSubject] = useState<Subject>("Sales");
  const [sent, setSent] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as keyof FormValues;
    const value = event.target.value;

    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    const mailSubject = `[${subject}] Message from ${values.name.trim()}`;
    const mailBody = `${values.message.trim()}\n\nName: ${values.name.trim()}\nEmail: ${values.email.trim()}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;

    setSent(true);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-sm border border-[#E6DFCF] bg-[#FDFCFA] p-6 sm:p-10"
    >
      <h2 className="font-[family-name:var(--font-contact-serif)] text-3xl font-light text-[#5A1C26] sm:text-4xl">
        Send us a message
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
        <Field id="contact-name" label="Your name" error={errors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`${fieldBase} ${fieldBorder(Boolean(errors.name))} h-12 rounded-full px-5`}
          />
        </Field>

        <Field id="contact-email" label="Your email" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@email.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`${fieldBase} ${fieldBorder(Boolean(errors.email))} h-12 rounded-full px-5`}
          />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5A1C26]">
          Subject *
        </legend>

        <div className="flex flex-wrap gap-2.5">
          {SUBJECT_OPTIONS.map((option) => {
            const active = option === subject;

            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => setSubject(option)}
                className={`h-9 rounded-full border px-5 text-[11px] font-normal tracking-[0.08em] transition-colors ${
                  active
                    ? "border-[#1E2A21] bg-[#1E2A21] text-[#F8F6EF]"
                    : "border-[#D9D3C4] bg-white text-[#1E2A21] hover:border-[#1E2A21]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <Field id="contact-message" label="Your message" error={errors.message}>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell us how we can help..."
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${fieldBase} ${fieldBorder(Boolean(errors.message))} h-44 resize-none rounded-lg px-5 py-4`}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center rounded-full bg-[#1E2A21] px-10 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F8F6EF] transition-opacity hover:opacity-85 sm:w-auto"
        >
          Send message
        </button>

        {sent && (
          <p role="status" className="text-sm font-light text-[#1E2A21]">
            Your email app will open with the message ready to send.
          </p>
        )}
      </div>
    </form>
  );
}