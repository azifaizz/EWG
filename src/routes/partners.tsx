import { createFileRoute, Link } from "@tanstack/react-router";
import { PARTNERS } from "@/lib/site";
import { PageHero, Section } from "@/components/site/PageHero";
import { meta } from "@/components/site/TextPage";
import { PartnerLogo } from "@/components/site/PartnerLogo";

export const Route = createFileRoute("/partners")({
  head: () =>
    meta(
      "Our Partners",
      "Insurance companies and lenders EWG works with to bring you the right plans.",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Partners"
        title="Our insurance & lending partners"
        intro="We work with established, regulated institutions so you can choose with confidence."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all duration-200 hover:border-gold hover:-translate-y-1"
            >
              <PartnerLogo name={p} className="h-11 w-auto max-w-full" />
              <p className="mt-4 text-xs font-semibold text-gold uppercase tracking-wider">
                Authorized Partner
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/become-an-advisor" className="btn-gold">
            Become an Advisor
          </Link>
          <Link to="/business-partner" className="btn-outline-gold">
            Become a Business Partner
          </Link>
        </div>
      </Section>
    </>
  ),
});
