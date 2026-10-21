import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { PageHero, Section } from "@/components/site/PageHero";
import { LeadForm } from "@/components/site/LeadForm";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta("Contact Us", "Call, WhatsApp, email or visit EWG – Elite Wealth & Growth in Tamil Nadu."),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="We're here to help" />
      <Section className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {[
            [Phone, "Call us", CONTACT.phone, CONTACT.phoneHref],
            [MessageCircle, "WhatsApp", "Chat with an advisor", CONTACT.whatsapp],
            [Mail, "Email", CONTACT.email, `mailto:${CONTACT.email}`],
            [MapPin, "Office", CONTACT.address, undefined],
          ].map(([Icon, t, v, href]) => {
            const I = Icon as typeof Phone;
            return (
              <a
                key={t as string}
                href={href as string | undefined}
                target={t === "WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:border-gold"
              >
                <I className="size-6 text-gold" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t as string}
                  </p>
                  <p className="font-semibold">{v as string}</p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-3">
          <LeadForm type="enquiry" title="Send an enquiry" />
        </div>
      </Section>
    </>
  ),
});
