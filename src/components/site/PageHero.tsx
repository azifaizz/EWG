import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-ink-muted">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 md:py-20 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}
