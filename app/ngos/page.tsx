"use client";

import { useMemo, useState } from "react";
import { ngos } from "@/data/ngos";
import { NgoCard } from "@/components/NgoCard";

const categories = [
  "All",
  "Education",
  "Health",
  "Food",
  "Animal Care",
  "Women Empowerment",
] as const;

type CategoryFilter = (typeof categories)[number];

export default function FindNgosPage() {
  const [search, setSearch] = useState("Pune");
  const [category, setCategory] = useState<CategoryFilter>("All");

  const filteredNgos = useMemo(() => {
    const term = search.trim().toLowerCase();

    return ngos.filter((ngo) => {
      const matchesSearch =
        term.length === 0 ||
        ngo.name.toLowerCase().includes(term) ||
        ngo.city.toLowerCase().includes(term) ||
        ngo.area.toLowerCase().includes(term);

      const matchesCategory =
        category === "All" || ngo.category === category;

      // Default filter: focus Pune when no explicit non-Pune term is provided
      const isPuneOrNoTerm =
        term.length === 0 ? ngo.city.toLowerCase() === "pune" : true;

      return matchesSearch && matchesCategory && isPuneOrNoTerm;
    });
  }, [search, category]);

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <header className="mb-6 space-y-3 sm:mb-8">
        <p className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Find NGOs
        </p>
        <h1 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
          Discover verified NGOs across Maharashtra, starting with Pune.
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Use the search and filters below to explore NGOs by city, area, and
          category.
        </p>
      </header>

      <section className="mb-6 rounded-3xl border border-sky-50 bg-white/80 p-4 shadow-sm shadow-sky-100 sm:mb-8 sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex-1 space-y-2">
            <label
              htmlFor="search"
              className="block text-xs font-medium text-slate-600"
            >
              Search by city, area, or NGO name
            </label>
            <input
              id="search"
              name="search"
              placeholder="Try 'Pune', 'Erandwane', or 'Hadapsar'"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <p className="text-[11px] text-slate-500">
              Search is case-insensitive and updates instantly on the client.
            </p>
          </div>

          <div className="w-full space-y-2 md:w-60">
            <label
              htmlFor="category"
              className="block text-xs font-medium text-slate-600"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as CategoryFilter)
              }
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section aria-label="NGO search results">
        {filteredNgos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-6 text-center text-sm text-slate-600">
            No NGOs match your filters yet. Try clearing the search term or
            selecting a different category.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNgos.map((ngo) => (
              <NgoCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

