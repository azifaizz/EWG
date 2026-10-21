import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/careers")({
  head: () =>
    meta(
      "Careers",
      "Join the EWG team — roles in advisory, relationship management and operations.",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Careers"
        title="Grow your career with EWG"
        intro="We're looking for people who care about helping others make good financial decisions."
      />
      <Section className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          {[
            "Relationship Manager – Chennai",
            "Insurance Advisor – Coimbatore / Madurai",
            "Operations Executive – Chennai",
          ].map((r) => (
            <div key={r} className="rounded-xl border border-border bg-card p-5 font-semibold">
              {r}
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <LeadForm type="career" title="Express interest" />
        </div>
      </Section>
    </>
  ),
});
