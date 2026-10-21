import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About EWG",
      "Elite Wealth & Growth helps families and businesses in Tamil Nadu understand, choose and manage comprehensive insurance protection.",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="About EWG"
        title="Understand. Guide. Support. Grow."
        intro="Elite Wealth & Growth was founded to make insurance protection simple, honest and personal for people across Tamil Nadu."
      />
      <Section className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl">Our mission</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To help every family and business protect what matters and grow with confidence —
            through clear advice, the right products from authorised partners, and support that
            continues long after the sale.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">Our promise</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• Advice in Tamil and English, in plain language</li>
            <li>• Recommendations based on your needs, not commissions</li>
            <li>• Help at renewals and claims, every time</li>
            <li>• Complete transparency on costs and terms</li>
          </ul>
        </div>
      </Section>
      <section className="bg-ink text-ink-foreground">
        <Section className="grid gap-8 text-center sm:grid-cols-3">
          {[
            ["Insure", "Protect life, health and assets"],
            ["Invest", "Plan for long-term goals"],
            ["Grow", "Build wealth with discipline"],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-display text-4xl text-gold-gradient">{t}</p>
              <p className="mt-2 text-sm text-ink-muted">{d}</p>
            </div>
          ))}
        </Section>
      </section>
    </>
  ),
});
