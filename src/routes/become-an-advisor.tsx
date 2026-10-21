import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/become-an-advisor")({
  head: () =>
    meta(
      "Become an Advisor",
      "Build a rewarding career as an EWG insurance & financial advisor in Tamil Nadu.",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Join EWG"
        title="Become an EWG Advisor"
        intro="Flexible hours, training and support to build a respected career helping families in your community."
      />
      <Section className="grid gap-12 lg:grid-cols-2">
        <ul className="space-y-5">
          {[
            "Training & certification support",
            "Access to multiple partner products",
            "Attractive earning potential",
            "Marketing and back-office support",
          ].map((b) => (
            <li key={b} className="border-l-2 border-gold pl-4 text-lg">
              {b}
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <LeadForm type="advisor" title="Apply now" />
        </div>
      </Section>
    </>
  ),
});
