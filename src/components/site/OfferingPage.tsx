import { Check } from "lucide-react";
import type { Offering } from "@/lib/site";
import { LeadForm } from "./LeadForm";
import { PageHero, Section } from "./PageHero";

export function OfferingPage({ o, kind = "Insurance" }: { o: Offering; kind?: "Insurance" }) {
  return (
    <>
      <PageHero eyebrow={kind} title={o.name} intro={o.tagline} />
      <Section className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-lg leading-relaxed">{o.intro}</p>
          <h2 className="mt-10 text-3xl">Key benefits</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {o.benefits.map((b) => (
              <li key={b} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <Check className="mt-0.5 size-5 shrink-0 text-gold" />
                {b}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-3xl">Who it's for</h2>
          <p className="mt-3 text-muted-foreground">{o.forWho}</p>
        </div>
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-gold/30 bg-card p-6 shadow-card">
            <LeadForm
              type="quote"
              defaultService={o.name}
              title="Get a free quote"
              compact
              showTime
            />
          </div>
        </div>
      </Section>
    </>
  );
}
