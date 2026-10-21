import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site";
import { PageHero, Section } from "@/components/site/PageHero";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/support")({
  head: () =>
    meta("Customer Support", "Get help with renewals, claims and policy servicing from EWG."),
  component: () => (
    <>
      <PageHero
        eyebrow="Support"
        title="Customer Support"
        intro="Renewals, claims, policy changes — we'll guide you through it."
      />
      <Section className="grid gap-5 md:grid-cols-3">
        {[
          [
            "Claim assistance",
            "Call us immediately and we'll guide you through documents and follow-ups.",
          ],
          ["Renewals", "Get reminders and help renewing on time to keep your benefits."],
          ["Policy changes", "Update nominee, address or cover with our help."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <h2 className="text-2xl">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </Section>
      <Section className="flex flex-wrap gap-3 pt-0">
        <a href={CONTACT.phoneHref} className="btn-gold">
          Call {CONTACT.phone}
        </a>
        <Link to="/grievance" className="btn-outline-gold">
          Raise a grievance
        </Link>
      </Section>
    </>
  ),
});
