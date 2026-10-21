import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/grievance")({
  head: () =>
    meta("Grievance Redressal", "Raise a complaint with EWG and learn how we resolve grievances."),
  component: () => (
    <>
      <PageHero
        eyebrow="Support"
        title="Grievance Redressal"
        intro="We take every concern seriously. Tell us what went wrong and our grievance officer will respond."
      />
      <Section className="grid gap-12 lg:grid-cols-2">
        <ol className="space-y-5">
          {[
            "Submit your complaint using this form",
            "Receive an acknowledgement from our team",
            "Our grievance officer reviews and resolves",
            "If unresolved, escalate to the insurer or regulator's grievance channel",
          ].map((s, i) => (
            <li key={s} className="flex gap-4">
              <span className="font-display text-3xl text-gold-gradient">{i + 1}</span>
              <span className="pt-2">{s}</span>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <LeadForm type="grievance" title="Raise a grievance" />
        </div>
      </Section>
    </>
  ),
});
