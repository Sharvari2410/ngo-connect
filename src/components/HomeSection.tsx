import type { ReactNode } from "react";

type HomeSectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
};

export function HomeSection({
  id,
  title,
  eyebrow,
  description,
  children,
}: HomeSectionProps) {
  return (
    <section id={id} className="py-8 sm:py-10">
      {(eyebrow || title || description) && (
        <header className="mb-6 space-y-2 sm:mb-8">
          {eyebrow && (
            <p className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-xl font-semibold text-slate-900 sm:text-2xl lg:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

