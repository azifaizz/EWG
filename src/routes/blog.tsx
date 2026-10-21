import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { meta } from "@/components/site/TextPage";

const POSTS = [
  [
    "Term vs Life Insurance: which do you need?",
    "Insurance basics",
    "A simple guide to choosing between pure protection and savings plans.",
  ],
  [
    "How much health cover is enough for a family in Chennai?",
    "Health",
    "Rising hospital costs mean your cover should keep pace.",
  ],
  [
    "Essential motor insurance add-ons you shouldn't skip",
    "Motor Insurance",
    "Zero depreciation, engine protect, and roadside assistance explained.",
  ],
];

export const Route = createFileRoute("/blog")({
  head: () => meta("Blog", "Insurance and personal finance tips from EWG's advisors."),
  component: () => (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights & guides"
        intro="Practical advice to help you make smarter money decisions."
      />
      <Section className="grid gap-6 md:grid-cols-3">
        {POSTS.map(([t, c, d]) => (
          <article key={t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <p className="eyebrow">{c}</p>
            <h2 className="mt-3 text-2xl">{t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            <p className="mt-5 text-xs text-muted-foreground">Coming soon</p>
          </article>
        ))}
      </Section>
    </>
  ),
});
