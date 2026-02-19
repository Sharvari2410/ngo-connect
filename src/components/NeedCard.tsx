import type { Need } from "@/types/need";

type NeedCardProps = {
  need: Need;
};

const urgencyStyles: Record<
  Need["urgency"],
  { badge: string; dot: string; label: string }
> = {
  high: {
    badge: "bg-rose-50 text-rose-700",
    dot: "bg-rose-500",
    label: "High urgency",
  },
  medium: {
    badge: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    label: "Medium urgency",
  },
  low: {
    badge: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
    label: "Planned need",
  },
};

export function NeedCard({ need }: NeedCardProps) {
  const urgency = urgencyStyles[need.urgency];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-sky-50 bg-white/90 p-4 shadow-sm shadow-sky-50 transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            {need.title}
          </h3>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            {need.ngoName} · {need.city}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${urgency.badge}`}
          >
            <span className={`mr-1 h-1.5 w-1.5 rounded-full ${urgency.dot}`} />
            {urgency.label}
          </span>
          <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary">
            {need.type === "donation" ? "Donation" : "Volunteer"}
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-600 sm:text-sm">
        {need.description}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-sky-50 pt-3">
        <p className="text-[11px] text-slate-500">
          Example listing · Real-time logic to be added
        </p>
        <button className="inline-flex items-center rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-emerald-600">
          Offer support
        </button>
      </div>
    </article>
  );
}

