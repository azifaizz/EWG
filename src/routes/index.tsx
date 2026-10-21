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
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/85 to-ink" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-soft">
              Elite Wealth &amp; Insurance Advisory &bull; Tamil Nadu
            </p>

            {/* Dignified Display Title */}
            <h1 className="mt-3.5 sm:mt-4 text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] text-white">
              Secure today. <br />
              <span className="text-gold-soft">Grow tomorrow.</span>
            </h1>

            {/* Calibrated Lead Paragraph */}
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
              Honest, certified insurance guidance for families, salaried professionals, and
              business owners across Tamil Nadu.
            </p>

            {/* Quiet Brand Cadence */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider text-ink-muted/80">
              <span>Understand</span>
              <span className="text-white/20">&bull;</span>
              <span>Guide</span>
              <span className="text-white/20">&bull;</span>
              <span>Support</span>
              <span className="text-white/20">&bull;</span>
              <span>Grow</span>
            </div>

            {/* Action Pair */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/services"
                className="btn-gold w-full sm:w-auto justify-center text-center px-7 py-3.5 text-sm sm:text-base font-bold text-ink rounded-full transition-transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-sm"
              >
                Explore Plans <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={openCallbackModal}
                className="w-full sm:w-auto justify-center text-center inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white/90 hover:text-gold border border-white/15 hover:border-gold/50 rounded-full transition-all bg-white/[0.03]"
              >
                <Phone className="size-4 text-gold shrink-0" /> Request a Free Callback
              </button>
            </div>

            {/* Live Advisor Hotline Indicator */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-xs text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                <span>Direct Helpline:</span>
                <a
                  href={CONTACT.phoneHref}
                  className="text-white font-semibold hover:text-gold transition-colors whitespace-nowrap"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <span className="hidden sm:inline text-white/20">&bull;</span>
              <span className="text-ink-muted/80 pl-4 sm:pl-0">Tamil &amp; English Advisory</span>
            </div>
          </div>

          {/* Quick Trust Credentials Grid */}
          <div className="mt-8 sm:mt-14 border-t border-white/10 pt-6 sm:pt-8 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6">
              <div className="flex items-center sm:items-start gap-3 rounded-xl bg-white/[0.03] p-3 sm:bg-transparent sm:p-0">
                <div className="grid size-9 sm:size-10 place-items-center rounded-lg bg-gold/15 text-gold shrink-0">
                  <ShieldCheck className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white">IRDAI-Authorized Partners</p>
                  <p className="text-[11px] sm:text-xs text-ink-muted truncate sm:whitespace-normal">
                    Tata AIA, Star, HDFC Life &amp; more
                  </p>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-3 rounded-xl bg-white/[0.03] p-3 sm:bg-transparent sm:p-0">
                <div className="grid size-9 sm:size-10 place-items-center rounded-lg bg-gold/15 text-gold shrink-0">
                  <HeartPulse className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white">100% Claim Assistance</p>
                  <p className="text-[11px] sm:text-xs text-ink-muted truncate sm:whitespace-normal">
                    Complete paperwork &amp; insurer follow-up
                  </p>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-3 rounded-xl bg-white/[0.03] p-3 sm:bg-transparent sm:p-0">
                <div className="grid size-9 sm:size-10 place-items-center rounded-lg bg-gold/15 text-gold shrink-0">
                  <Users className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white">Tamil &amp; English Advisory</p>
                  <p className="text-[11px] sm:text-xs text-ink-muted truncate sm:whitespace-normal">
                    Friendly localized support across TN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Docked Partner Trust Bar */}
        <div className="relative border-t border-white/10 py-3 sm:py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PartnerMarquee />
          </div>
        </div>
      </section>

      {/* Services - What we do */}
      <section className="py-14 sm:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Protection for every stage of life
            </h2>
            <p className="mt-2.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Comprehensive insurance guidance tailored for families and businesses across Tamil Nadu.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[i] ?? Shield;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col justify-between rounded-xl sm:rounded-2xl bg-card p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 border border-border/50 shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-gold">
                        {s.name}
                      </h3>
                    </div>
                    <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {s.tagline}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-gold">
                    <span>Explore plan</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why EWG */}
      <section className="bg-ink text-ink-foreground py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Advice that puts your family first
              </h2>
              <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
                We don't sell policies to hit sales quotas. As independent advisors across Tamil Nadu,
                our loyalty is to your family's financial security, claim dignity, and peace of mind.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-4 text-xs sm:text-sm font-semibold text-gold">
                <span>Personalized Advisory</span>
                <span className="text-white/20">&bull;</span>
                <span>Zero Commission Bias</span>
                <span className="text-white/20">&bull;</span>
                <span>IRDAI Partners</span>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 lg:mt-0 lg:col-span-7 grid gap-3.5 sm:gap-5 sm:grid-cols-2">
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
                  <div
                    key={t as string}
                    className="rounded-xl sm:rounded-2xl bg-ink-soft/70 p-4.5 sm:p-6 lg:p-7 backdrop-blur-sm border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <I className="size-5 text-gold shrink-0" />
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">{t as string}</h3>
                    </div>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {d as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Four simple steps
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              From your initial conversation to claim day, our guidance is straightforward, personal,
              and reliable.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1. Understand", "We listen to your goals, family and budget."],
              ["2. Guide", "We recommend suitable plans based on your needs."],
              ["3. Support", "We handle paperwork, renewals and claims."],
              ["4. Grow", "We review regularly as your life evolves."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="relative rounded-xl sm:rounded-2xl bg-card p-5 sm:p-7 lg:p-8 transition-transform duration-300 hover:-translate-y-1 border border-border/50 shadow-sm"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{t}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Talk to an expert */}
      <section className="py-14 sm:py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-ink p-5 sm:p-10 lg:p-16 text-ink-foreground lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center border border-white/10">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Get a personalised quote — free.
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed max-w-xl">
                Share a few details and an EWG advisor will call you with options tailored to you.
              </p>

              <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-ink-muted">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-gold shrink-0" />
                  <span>100% free consultation with zero purchase obligation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-gold shrink-0" />
                  <span>Direct comparative quotes from IRDAI-approved insurers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-gold shrink-0" />
                  <span>Dedicated claims advisory throughout the life of your policy</span>
                </div>
              </div>

              <div className="mt-7 sm:mt-9">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base w-full sm:w-auto"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:col-span-6 rounded-xl sm:rounded-2xl bg-card p-4 sm:p-7 lg:p-8 text-card-foreground shadow-2xl">
              <LeadForm type="quote" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 lg:py-28 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Common questions
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Clear answers to help you make informed decisions about your insurance.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16">
            <FaqList limit={4} />
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground hover:text-gold underline decoration-gold underline-offset-4 transition-colors"
            >
              <span>See all FAQs</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
