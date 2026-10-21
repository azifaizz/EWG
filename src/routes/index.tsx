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
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Protection for every stage of life
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Comprehensive insurance guidance tailored for families and businesses across Tamil Nadu.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[i] ?? Shield;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col justify-between rounded-2xl bg-card p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-3.5">
                      <Icon className="size-5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-gold">
                        {s.name}
                      </h3>
                    </div>
                    <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {s.tagline}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-gold">
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
      <section className="bg-ink text-ink-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Advice that puts your family first
              </h2>
              <p className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed">
                We don't sell policies to hit sales quotas. As independent advisors across Tamil Nadu,
                our loyalty is to your family's financial security, claim dignity, and peace of mind.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-gold">
                <span>Personalized Advisory</span>
                <span className="text-white/20">&bull;</span>
                <span>Zero Commission Bias</span>
                <span className="text-white/20">&bull;</span>
                <span>IRDAI Partners</span>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-7 grid gap-5 sm:grid-cols-2">
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
                    className="rounded-2xl bg-ink-soft/70 p-6 sm:p-7 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <I className="size-5 text-gold shrink-0" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">{t as string}</h3>
                    </div>
                    <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
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
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Four simple steps
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From your initial conversation to claim day, our guidance is straightforward, personal,
              and reliable.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1. Understand", "We listen to your goals, family and budget."],
              ["2. Guide", "We compare and recommend suitable plans."],
              ["3. Support", "We handle paperwork, renewals and claims."],
              ["4. Grow", "We review regularly as your life evolves."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="relative rounded-2xl bg-card p-7 sm:p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t}</h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Talk to an expert */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-12 lg:p-16 text-ink-foreground lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Get a personalised quote — free.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl">
                Share a few details and an EWG advisor will call you with options tailored to you.
              </p>

              <div className="mt-8 space-y-3 text-sm text-ink-muted">
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

              <div className="mt-9">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-span-6 rounded-2xl bg-card p-6 sm:p-8 text-card-foreground shadow-2xl">
              <LeadForm type="quote" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Common questions
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Clear answers to help you make informed decisions about your insurance.
            </p>
          </div>

          <div className="mt-12 sm:mt-16">
            <FaqList limit={4} />
          </div>

          <div className="mt-10 text-center">
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
