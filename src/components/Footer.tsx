export function Footer() {
  return (
    <footer className="mt-10 border-t border-sky-50 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 max-w-xl">
          <p className="text-sm font-semibold text-slate-900">
            NGO Connect Maharashtra
          </p>
          <p className="text-sm text-slate-600">
            Connecting donors with verified NGOs across Maharashtra to support
            transparent, impactful, and sustainable community initiatives.
          </p>
          <p className="text-xs text-slate-500">
            Contact:{" "}
            <a
              href="mailto:contact@example.org"
              className="font-medium text-primary hover:underline"
            >
              contact@example.org
            </a>{" "}
            (update with your official email)
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Connect
            </span>
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Visit our Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-primary hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-7.2h2.4l.3-3h-2.7V8.1c0-.9.3-1.5 1.5-1.5h1.4V4.1C16.9 4 16 4 15.1 4 12.8 4 11.2 5.4 11.2 7.8V10.8H8.9v3h2.3V21h2.3Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Visit our X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-primary hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M17.9 4H15.6L12.7 8.1 9.6 4H4.9l5.2 7.1L5.2 20h2.3l3-4.3 3.4 4.3h4.7l-5.4-7.3L17.9 4Zm-2.1 13.5-7-9.4h1.4l7 9.4h-1.4Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Visit our LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-primary hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M6.3 5.5a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM3 8.1h3.3V21H3V8.1Zm6 0h3.1v1.8h.1c.4-.7 1.4-2 3.4-2 3.1 0 3.7 2 3.7 4.6V21h-3.3v-7.1c0-1.7 0-3.8-2.3-3.8-2.3 0-2.6 1.8-2.6 3.7V21H9V8.1Z" />
                </svg>
              </a>
            </div>
          </div>
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} NGO Connect Maharashtra. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

