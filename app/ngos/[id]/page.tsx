import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FundUsageChart } from "@/components/FundUsageChart";
import { ngos } from "@/data/ngos";

type PageParams = {
  id: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export function generateStaticParams() {
  return ngos.map((ngo) => ({ id: ngo.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const ngo = ngos.find((item) => item.id === id);

  if (!ngo) {
    return {
      title: "NGO not found | NGO Connect",
    };
  }

  return {
    title: `${ngo.name} | NGO Connect`,
    description: ngo.description,
  };
}

export default async function NgoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const ngo = ngos.find((item) => item.id === id);

  if (!ngo) {
    notFound();
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    ngo.address,
  )}&output=embed`;

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      {/* Header */}
      <section className="mb-8 rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:mb-10 sm:p-7 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h1 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                {ngo.name}
              </h1>
              {ngo.verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Verified Partner
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 sm:text-sm">
              <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                {ngo.category}
              </span>
              <span>
                {ngo.area}, {ngo.city}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                Transparency score:
                <span className="font-semibold text-emerald-700">
                  {ngo.transparencyScore}/100
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 rounded-2xl bg-slate-900 px-4 py-4 text-slate-50 sm:px-5 sm:py-5 lg:min-w-[260px] lg:items-end">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
              Your support impact
            </p>
            <p className="text-sm text-slate-100 sm:text-base">
              Donations help{" "}
              <span className="font-semibold">local, verified programmes</span>{" "}
              across Maharashtra with clear transparency on how funds are used.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-sky-300 transition hover:bg-sky-500">
                Make a sample pledge
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-slate-400">
                Download NGO profile
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
        {/* Left column */}
        <div className="space-y-6 sm:space-y-7 lg:col-span-2">
          {/* About */}
          <section className="rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6 lg:p-7">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              About this NGO
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              {ngo.description}
            </p>
          </section>

          {/* Photo gallery */}
          <section className="rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6 lg:p-7">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Photo gallery
              </h2>
              <p className="text-xs text-slate-500">
                Sample imagery · Replace with real NGO photos
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {ngo.images.map((src, index) => (
                <div
                  key={src}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${
                    index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] w-full bg-gradient-to-br from-sky-100 via-slate-100 to-emerald-50" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.3),_transparent_55%)] opacity-60 transition group-hover:opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent px-3 py-2 text-xs text-slate-50">
                    <span className="line-clamp-1">
                      {ngo.name} programme snapshot
                    </span>
                    <span className="rounded-full bg-slate-900/60 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                      Sample
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real-time needs */}
          <section className="rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6 lg:p-7">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Real-time needs
            </h2>
            
            <ol className="mt-4 space-y-3 sm:space-y-4">
              {ngo.needs.map((need, index) => (
                <li
                  key={need}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-3 sm:p-4"
                >
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary-soft text-[11px] font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-900">
                      {need}
                    </p>
                    <p className="text-xs text-slate-500">
                      Ideal for: individual donors, CSR teams, and local
                      volunteering groups.
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Ratings & reviews */}
          <section className="rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6 lg:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Ratings &amp; reviews
                </h2>
              </div>
              <div className="flex items-baseline gap-1 rounded-full bg-emerald-50 px-3 py-1.5">
                <span className="text-lg font-semibold text-emerald-700">
                  4.7
                </span>
                <span className="text-xs text-emerald-700">/ 5.0</span>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-slate-900">
                    Transparent reporting
                  </p>
                  <p className="text-xs text-amber-500">
                    ★★★★<span className="text-slate-300">★</span>
                  </p>
                </div>
                <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                  Quarterly updates and clear fund utilisation summaries make it
                  easy to communicate impact to our stakeholders.
                </p>
                <p className="mt-3 text-[11px] font-medium text-slate-500">
                  CSR lead, Pune-based company
                </p>
              </article>
              <article className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-slate-900">
                    Ground-level impact
                  </p>
                  <p className="text-xs text-amber-500">
                    ★★★★★
                  </p>
                </div>
                <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                  Volunteers and staff work closely with communities, ensuring
                  support reaches those who need it most.
                </p>
                <p className="mt-3 text-[11px] font-medium text-slate-500">
                  Individual donor, Maharashtra
                </p>
              </article>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-6 sm:space-y-7">
          {/* Fund usage chart */}
          <section className="rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Fund usage overview
            </h2>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Sample split of how donations would be allocated across key
              focus areas.
            </p>
            <div className="mt-4">
              <FundUsageChart ngoName={ngo.name} />
            </div>
          </section>

          {/* Donation types */}
          <section className="rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Donation types accepted
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {ngo.donationTypes.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                >
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Accepts {type}
                </span>
              ))}
            </div>
          </section>

          {/* Contact & location */}
          <section className="rounded-3xl border border-sky-50 bg-white/90 p-5 shadow-sm shadow-sky-100 sm:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contact &amp; location
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Address
                </dt>
                <dd className="mt-1">{ngo.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${ngo.contactPhone}`}
                    className="text-primary hover:underline"
                  >
                    {ngo.contactPhone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${ngo.contactEmail}`}
                    className="text-primary hover:underline"
                  >
                    {ngo.contactEmail}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button className="inline-flex items-center justify-center rounded-2xl bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-sky-300 transition hover:bg-sky-500">
                Share NGO profile
              </button>
              <button className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary">
                Save to shortlist
              </button>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100 bg-slate-100">
              <iframe
                title={`Map showing location of ${ngo.name}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 sm:h-64"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

