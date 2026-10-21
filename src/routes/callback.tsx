import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/callback")({
  head: () =>
    meta(
      "Get Started – Request a Callback",
      "Request a free callback or book an appointment with an EWG advisor.",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Get started"
        title="Book a free consultation"
        intro="Tell us a little about you. We'll call at your preferred time — no obligation."
      />
      <Section className="max-w-3xl">
        <div className="rounded-2xl border border-gold/30 bg-card p-8 shadow-card">
          <LeadForm type="appointment" showTime />
        </div>
      </Section>
    </>
  ),
});
