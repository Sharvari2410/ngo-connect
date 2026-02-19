import Link from "next/link";
import { HomeSection } from "@/components/HomeSection";
import { NgoCard } from "@/components/NgoCard";
import { NeedCard } from "@/components/NeedCard";
import { featuredNgos } from "@/data/ngos";
import { sampleNeeds } from "@/data/needs";

export default function Home() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      {/* 1. Hero Section */}
      <HomeSection
        id="hero"
        eyebrow="Discover local impact"
        title="Connect with verified NGOs in Maharashtra"
        description="Browse trusted organisations in Pune and across Maharashtra, understand their work, and support the causes that matter to you."
      >
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Designed for donors, built for impact
            </p>
            <p className="text-balance text-lg font-semibold text-slate-900 sm:text-2xl lg:text-3xl">
              Find trustworthy NGOs near you,{" "}
              <span className="text-primary">starting with Pune</span>.
            </p>
            <p className="text-sm text-slate-600 sm:text-base">
              NGO Connect Maharashtra brings together verified, on-ground
              organisations so you can give with confidence — whether you&apos;re
              donating funds, time, or skills.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Find NGOs Near You
              </button>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-sky-50 bg-white/80 p-4 shadow-sm shadow-sky-100 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Maharashtra snapshot 
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Start in Pune, expand statewide
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                • Verified NGOs only
              </span>
            </div>
            <dl className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="rounded-xl bg-primary-soft/70 p-3">
                <dt className="text-slate-500">Example NGOs listed</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">
                  120+
                </dd>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3">
                <dt className="text-slate-500">Cities in Maharashtra</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">
                  15+
                </dd>
              </div>
              <div className="rounded-xl bg-white p-3 ring-1 ring-sky-50">
                <dt className="text-slate-500">Focus areas</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  Education · Health · Environment
                </dd>
              </div>
              <div className="rounded-xl bg-white p-3 ring-1 ring-sky-50">
                <dt className="text-slate-500">Built for</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  Individuals · Groups · Companies
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </HomeSection>

      {/* 2. Search Section */}
      <HomeSection
        id="search"
        eyebrow="Search by location"
        title="See NGOs in your city or neighbourhood"
        description="Use this search interface as a starting point for building your discovery flow."
      >
        <div className="rounded-3xl border border-sky-50 bg-white/80 p-4 shadow-sm shadow-sky-100 sm:p-5">
          <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex-1">
              <label
                htmlFor="city"
                className="mb-1 block text-xs font-medium text-slate-600"
              >
                City or area
              </label>
              <input
                id="city"
                name="city"
                autoComplete="address-level2"
                placeholder="Search by city or area (e.g. Kothrud, Pune)"
                defaultValue="Pune"
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-col gap-2 sm:w-[220px]">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Find NGOs
              </button>
              
            </div>
          </form>
          
        </div>
      </HomeSection>

      {/* 3. Featured NGOs */}
      <HomeSection
        id="featured-ngos"
        eyebrow="Featured NGOs"
        title="Verified organisations in and around Pune"
        description="Explore verified NGOs working across education, health, environment, and livelihoods in Maharashtra."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredNgos.map((ngo) => (
            <NgoCard key={ngo.id} ngo={ngo} />
          ))}
        </div>
      </HomeSection>

      {/* 4. How It Works */}
      <HomeSection
        id="how-it-works"
        eyebrow="How it works"
        title="A simple journey from interest to impact"
      >
        <ol className="grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "Step 1",
              title: "Discover verified NGOs",
              body: "Browse NGOs by location, cause, and community focus with clear, structured profiles.",
            },
            {
              step: "Step 2",
              title: "Review their work",
              body: "Understand programmes, impact areas, and real-time needs before you decide where to help.",
            },
            {
              step: "Step 3",
              title: "Donate or volunteer",
              body: "Reach out to NGOs directly or through your future engagement flow — all in one trusted space.",
            },
          ].map((item) => (
            <li
              key={item.step}
              className="flex flex-col rounded-2xl border border-sky-50 bg-white/80 p-4 shadow-sm shadow-sky-50 sm:p-5"
            >
              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                {item.step.replace("Step ", "")}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </HomeSection>

      {/* 5. Real-Time Needs */}
      <HomeSection
        id="real-time-needs"
        eyebrow="Example needs"
        title="Real-time needs from NGOs"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {sampleNeeds.map((need) => (
            <NeedCard key={need.id} need={need} />
          ))}
        </div>
      </HomeSection>

      {/* 6. Volunteer CTA */}
      <HomeSection id="volunteer-cta">
        <div className="rounded-3xl bg-gradient-to-r from-primary-soft to-emerald-50 p-5 shadow-sm shadow-sky-100 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Volunteer with confidence
              </p>
              <h2 className="text-balance text-xl font-semibold text-slate-900 sm:text-2xl">
                Turn a few hours into lasting change in Maharashtra.
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                From interest forms to matching volunteers with NGO needs.
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:items-end">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                I want to volunteer
              </Link>
            </div>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
