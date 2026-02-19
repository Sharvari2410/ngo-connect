"use client";

import { useState } from "react";

type VolunteerFormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
};

type VolunteerFormErrors = Partial<Record<keyof VolunteerFormState, string>>;

const initialFormState: VolunteerFormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  interest: "",
};

const maharashtraCities = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Thane",
  "Aurangabad",
  "Solapur",
  "Kolhapur",
  "Sangli",
  "Satara",
  "Ahmednagar",
  "Jalgaon",
  "Navi Mumbai",
  "Amravati",
  "Akola",
] as const;

export default function VolunteerRegistrationPage() {
  const [form, setForm] = useState<VolunteerFormState>(initialFormState);
  const [errors, setErrors] = useState<VolunteerFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(values: VolunteerFormState): VolunteerFormErrors {
    const nextErrors: VolunteerFormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?\d[\d\s-]{7,}$/.test(values.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!values.city) {
      nextErrors.city = "Please select your city.";
    }

    if (!values.interest.trim()) {
      nextErrors.interest = "Tell us a bit about your interests.";
    }

    return nextErrors;
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

    // For now, just log the data to the console.
    // Later, you can replace this with a Supabase insert or API call.
    // eslint-disable-next-line no-console
    console.log("Volunteer registration submitted:", form);

    // Simulate a short network delay for better UX feedback.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setSubmitted(true);
    setForm(initialFormState);
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <header className="mb-6 space-y-3 sm:mb-8">
        <p className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Volunteer with NGOs
        </p>
        <h1 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
          Share your time and skills with{" "}
          <span className="text-primary">verified NGOs</span> across
          Maharashtra.
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Fill in a few details and we&apos;ll help route your interest to
          suitable partner organisations.
        </p>
      </header>

      <section className="mx-auto max-w-2xl rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6 lg:p-8">
        {submitted && (
          <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-800">
            <p className="font-medium">Thank you for registering as a volunteer.</p>
            <p className="mt-1 text-xs text-emerald-900/80 sm:text-sm">
              This is a sample success state. In a real deployment, you&apos;ll
              receive a confirmation email or message from a partner NGO.
            </p>
          </div>
        )}

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="block text-xs font-medium text-slate-700"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="e.g. Ananya Deshpande"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-700"
              >
                Email address
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

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-slate-700"
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="text-xs text-rose-600">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="city"
                className="block text-xs font-medium text-slate-700"
              >
                City (Maharashtra)
              </label>
              <select
                id="city"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Select your city</option>
                {maharashtraCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-xs text-rose-600">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="interest"
              className="block text-xs font-medium text-slate-700"
            >
              Area of interest
            </label>
            <textarea
              id="interest"
              name="interest"
              value={form.interest}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Share how you’d like to contribute – teaching, logistics, fundraising, professional skills, weekends only, etc."
            />
            {errors.interest && (
              <p className="text-xs text-rose-600">{errors.interest}</p>
            )}
            <p className="text-[11px] text-slate-500">
              Keep it brief but specific. This helps NGOs quickly understand how
              to engage you.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-slate-500 sm:max-w-xs">
              By registering, you agree to be contacted by selected NGOs for
              relevant volunteering opportunities.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-300 transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            >
              {isSubmitting ? "Submitting..." : "Submit registration"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

