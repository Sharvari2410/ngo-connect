import Link from "next/link";
import type { Ngo } from "@/types/ngo";

type NgoCardProps = {
  ngo: Ngo;
};

export function NgoCard({ ngo }: NgoCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-sky-50 bg-white/90 p-4 shadow-sm shadow-sky-50 transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            {ngo.name}
          </h3>
          <p className="mt-1 inline-flex flex-wrap items-center gap-2 text-[11px] text-slate-500 sm:text-xs">
            <span className="inline-flex items-center rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
              {ngo.category}
            </span>
            <span>
              {ngo.area}, {ngo.city}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          {ngo.verified && (
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Verified
            </span>
          )}
          <span className="text-xs font-medium text-slate-600">
            Transparency:{" "}
            <span className="text-emerald-600">
              {ngo.transparencyScore}
              /100
            </span>
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-600 sm:text-sm">
        {ngo.description}
      </p>
      {ngo.donationTypes.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {ngo.donationTypes.map((type) => (
            <span
              key={type}
              className="rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
            >
              Accepts {type}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-sky-50 pt-3">
        <p className="text-[11px] text-slate-500">
          Maharashtra · Local, verified partner
        </p>
        <Link
          href={`/ngos/${ngo.id}`}
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
        >
          View details
        </Link>
      </div>
    </article>
  );
}

