"use client";

import { useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(values: ContactFormState): ContactFormErrors {
    const next: ContactFormErrors = {};

    if (!values.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }

    if (!values.subject.trim()) {
      next.subject = "Please add a short subject.";
    }

    if (!values.message.trim()) {
      next.message = "Please include a short message.";
    } else if (values.message.trim().length < 20) {
      next.message = "Message should be at least 20 characters.";
    }

    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending the inquiry (e.g. to Supabase or an API).
    // eslint-disable-next-line no-console
    console.log("Donor contact inquiry submitted:", form);
    await new Promise((resolve) => setTimeout(resolve, 700));

    setIsSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <header className="mb-6 space-y-3 sm:mb-8">
        <p className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Donor enquiries
        </p>
        <h1 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
          Contact the NGO Connect team.
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Share questions about partnering, donating, or using this starter kit
          for your organisation.
        </p>
      </header>

      <section className="mx-auto max-w-2xl rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6 lg:p-8">
        {submitted && (
          <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900">
            <p className="font-medium">
              Thank you for reaching out about donor support.
            </p>
            <p className="mt-1 text-xs text-emerald-900/80 sm:text-sm">
              This is a simulated success state. In production, your message
              would be routed to the NGO Connect or partner team for follow-up.
            </p>
          </div>
        )}

        <form
          className="space-y-4 sm:space-y-5"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="e.g. Rohan Kulkarni"
              />
              {errors.name && (
                <p className="text-xs text-rose-600">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="you@example.org"
              />
              {errors.email && (
                <p className="text-xs text-rose-600">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="block text-xs font-medium text-slate-700"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="e.g. Corporate CSR partnership enquiry"
            />
            {errors.subject && (
              <p className="text-xs text-rose-600">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Share a brief overview of your enquiry: donation amount, preferred causes, timelines, or questions about NGO verification."
            />
            {errors.message && (
              <p className="text-xs text-rose-600">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-slate-500 sm:max-w-xs">
              Your details will only be used to respond to this enquiry. In a
              real deployment, add links to your privacy policy here.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-300 transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

