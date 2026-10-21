import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Car,
  HeartPulse,
  Plane,
  Shield,
  ShieldCheck,
  Umbrella,
  Users,
  Headphones,
  Scale,
  Phone,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CONTACT, SERVICES } from "@/lib/site";
import { LeadForm } from "@/components/site/LeadForm";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { FaqList } from "@/components/site/FaqList";
import { Section } from "@/components/site/PageHero";
import { openCallbackModal } from "@/components/site/InitialCallbackModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EWG – Elite Wealth & Growth | Insure. Invest. Grow." },
      {
        name: "description",
        content:
          "Life, term, health, motor, travel and business insurance — expert guidance for families and businesses across Tamil Nadu.",
      },
      { property: "og:title", content: "EWG – Elite Wealth & Growth" },
      {
        property: "og:description",
        content:
          "Understand. Guide. Support. Grow. Certified insurance advisory across Tamil Nadu.",
      },
    ],
  }),
  component: Index,
});

const ICONS = [Umbrella, Shield, HeartPulse, Car, Plane, Briefcase];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="Happy family protected by EWG"
          width={1600}
          height={1008}
          fetchPriority="high"
          decoding="async"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink" />

        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Left Column: Editorial Value Proposition & Actions */}
            <div className="text-center lg:text-left lg:col-span-7">
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="size-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase text-gold">
                  Elite Wealth &amp; Insurance Advisory • Tamil Nadu
                </span>
              </div>

              {/* Bold Title */}
              <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
                Secure today. <br />
                <span className="text-gold-gradient">Grow tomorrow.</span>
              </h1>

              {/* Refined Subtitle */}
              <p className="mt-5 max-w-xl text-base sm:text-lg text-ink-muted leading-relaxed mx-auto lg:mx-0">
                Honest, certified insurance guidance for families, salaried professionals, and
                business owners across Tamil Nadu.
              </p>

              {/* Brand Mantra Pill Strip */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold uppercase tracking-widest text-gold-soft">
                <span>Understand</span>
                <span className="text-gold/40">•</span>
                <span>Guide</span>
                <span className="text-gold/40">•</span>
                <span>Support</span>
                <span className="text-gold/40">•</span>
                <span>Grow</span>
              </div>

              {/* CTA Group */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <Link
                  to="/services"
                  className="btn-gold shadow-lg shadow-gold/25 text-sm sm:text-base px-6 py-3.5"
                >
                  Explore Plans <ArrowRight className="size-4" />
                </Link>
                <button
                  type="button"
                  onClick={openCallbackModal}
                  className="btn-outline-gold text-sm sm:text-base px-6 py-3.5 flex items-center gap-2"
                >
                  <Phone className="size-4" /> Request a Free Callback
                </button>
              </div>

              {/* Live Advisor Hotline Indicator */}
              <div className="mt-5 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-ink-muted">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  Direct Helpline:{" "}
                  <a
                    href={CONTACT.phoneHref}
                    className="text-white font-semibold hover:text-gold transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </span>
                <span className="text-white/20">|</span>
                <span>Tamil &amp; English Advisory</span>
              </div>
            </div>

            {/* Right Column: Interactive Plan Navigator Card */}
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Ambient glow behind card */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold/30 via-gold/10 to-transparent blur-xl opacity-75" />

                <div className="relative rounded-3xl border border-gold/35 bg-ink-soft/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-wider text-gold">
                        Direct Plan Selector
                      </p>
                      <h3 className="mt-0.5 text-lg font-bold text-white">Choose Your Cover</h3>
                    </div>
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[0.7rem] font-bold text-gold">
                      Free Advisory
                    </span>
                  </div>

                  {/* 6 Interactive Service Category Chips */}
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    {SERVICES.map((s, idx) => {
                      const Icon = ICONS[idx] ?? Shield;
                      return (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 transition-all hover:border-gold/50 hover:bg-gold/10"
                        >
                          <span className="grid size-8 place-items-center rounded-lg bg-gold/15 text-gold group-hover:bg-gold group-hover:text-ink transition-colors shrink-0">
                            <Icon className="size-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-white truncate group-hover:text-gold transition-colors">
                              {s.name}
                            </p>
                            <p className="text-[0.65rem] text-ink-muted truncate">Explore &rarr;</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Quick Callback Trigger inside card */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={openCallbackModal}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gold/20 hover:bg-gold hover:text-ink py-2.5 px-4 text-xs font-bold text-gold border border-gold/40 transition-all shadow-sm"
                    >
                      <Phone className="size-3.5" /> Speak with an Advisor in 60s
                    </button>
                    <p className="mt-2 text-center text-[0.68rem] text-ink-muted">
                      &bull; Zero commission markup &bull; 100% Cashless network support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Trust Credentials Grid */}
          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 border-t border-white/10 pt-8 text-left">
            <div className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm">
              <div className="grid size-11 place-items-center rounded-xl bg-gold/15 text-gold shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">IRDAI-Authorized Partners</p>
                <p className="text-xs text-ink-muted">Tata AIA, Star, HDFC Life &amp; more</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm">
              <div className="grid size-11 place-items-center rounded-xl bg-gold/15 text-gold shrink-0">
                <HeartPulse className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">100% Claim Assistance</p>
                <p className="text-xs text-ink-muted">Complete paperwork &amp; insurer follow-up</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm">
              <div className="grid size-11 place-items-center rounded-xl bg-gold/15 text-gold shrink-0">
                <Users className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Tamil &amp; English Advisory</p>
                <p className="text-xs text-ink-muted">Friendly localized support across TN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Docked Partner Trust Bar */}
        <div className="relative border-t border-white/10 py-3.5 sm:py-4">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <PartnerMarquee />
          </div>
        </div>
      </section>

      {/* Services - What we do */}
      <Section>
        <p className="eyebrow">What we do</p>
        <div className="mt-3">
          <h2 className="text-4xl md:text-5xl">Protection for every stage of life</h2>
          <p className="mt-2 text-base text-muted-foreground">
            Comprehensive insurance guidance tailored for families and businesses across Tamil Nadu.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i] ?? Shield;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-card-foreground shadow-card card-interactive transition-all"
              >
                {/* Gold gradient accent line along top border */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="grid size-12 place-items-center rounded-xl bg-ink text-gold shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-ink">
                  <Icon className="size-6 transition-transform duration-300 group-hover:scale-105" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-foreground transition-colors duration-200 group-hover:text-gold">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-gold">
                  Learn more{" "}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Why EWG */}
      <section className="bg-ink-gradient text-ink-foreground">
        <Section>
          <p className="eyebrow">Why choose EWG</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
            Advice that puts your family first
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                Scale,
                "Unbiased comparison",
                "We compare plans across authorised partners to find what truly fits.",
              ],
              [
                Users,
                "Local & personal",
                "Advisors who speak Tamil and English and understand your needs.",
              ],
              [
                Headphones,
                "Claim support",
                "We stand beside you when it matters most — at claim time.",
              ],
              [
                ShieldCheck,
                "Transparent",
                "No hidden charges. Clear explanations, in plain language.",
              ],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Scale;
              return (
                <div key={t as string} className="border-l border-gold/40 pl-6">
                  <I className="size-7 text-gold" />
                  <h3 className="mt-4 text-xl">{t as string}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{d as string}</p>
                </div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* How it works */}
      <section className="bg-secondary">
        <Section>
          <p className="eyebrow">How EWG works</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Four simple steps</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["Understand", "We listen to your goals, family and budget."],
              ["Guide", "We compare and recommend suitable plans."],
              ["Support", "We handle paperwork, renewals and claims."],
              ["Grow", "We review regularly as your life evolves."],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-card p-7 shadow-card">
                <span className="font-display text-5xl text-gold-gradient">0{i + 1}</span>
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* CTA */}
      <Section>
        <div className="grid gap-10 overflow-hidden rounded-3xl bg-ink p-8 text-ink-foreground md:p-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Talk to an expert</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Get a personalised quote — free.</h2>
            <p className="mt-4 text-ink-muted">
              Share a few details and an EWG advisor will call you with options tailored to you.
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold mt-8"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="rounded-2xl bg-card p-6 text-card-foreground">
            <LeadForm type="quote" />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="max-w-4xl">
        <p className="eyebrow text-center">FAQs</p>
        <h2 className="mt-3 text-center text-4xl">Common questions</h2>
        <div className="mt-10">
          <FaqList limit={4} />
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/faqs"
            className="text-sm font-semibold underline decoration-gold underline-offset-4"
          >
            See all FAQs
          </Link>
        </div>
      </Section>
    </>
  );
}
