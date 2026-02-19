 "use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Find NGOs", href: "/ngos" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-sky-50 bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary shadow-sm">
            <span className="text-sm font-semibold">NG</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 sm:text-base">
              NGO Connect Maharashtra
            </span>
            <span className="text-xs text-slate-500">
              Connecting donors with impact
            </span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-primary-soft hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-sky-50 bg-white/95 shadow-sm sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-primary-soft hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

