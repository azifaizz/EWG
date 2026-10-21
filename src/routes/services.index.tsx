import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { PageHero, Section } from "@/components/site/PageHero";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/services/")({
  head: () =>
    meta(
      "Insurance Services",
      "Life, term, health, motor, travel and business insurance guidance from EWG in Tamil Nadu.",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Services"
        title="Insurance, explained and arranged for you"
        intro="Compare plans from authorised partners with an advisor who keeps your interests first."
      />
      <Section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group rounded-2xl border border-border bg-card p-7 shadow-card hover:border-gold"
          >
            <h2 className="text-2xl">{s.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.intro}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-gold">
              Details <ArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </Section>
    </>
  ),
});
