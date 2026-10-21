import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/business-partner")({
  head: () =>
    meta(
      "Become a Business Partner",
      "Partner with EWG to offer trusted insurance solutions to your customers.",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Become a Business Partner"
        intro="Car dealers, real-estate firms, CAs, clinics and associations — offer your customers trusted protection with EWG."
      />
      <Section className="grid gap-12 lg:grid-cols-2">
        <ul className="space-y-5">
          {[
            "Add value for your customers",
            "Revenue-sharing opportunities",
            "Dedicated relationship manager",
            "Co-branded support materials",
          ].map((b) => (
            <li key={b} className="border-l-2 border-gold pl-4 text-lg">
              {b}
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <LeadForm type="partner" title="Let's talk" />
        </div>
      </Section>
    </>
  ),
});
