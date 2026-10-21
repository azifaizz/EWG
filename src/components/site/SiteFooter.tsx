import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/site";
import { Logo } from "./Logo";

const col = "text-sm text-ink-muted hover:text-gold transition-colors";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm text-ink-muted">
            Understand. Guide. Support. Grow. Trusted insurance and financial guidance for families
            and businesses across Tamil Nadu.
          </p>
          <div className="mt-6 space-y-2 text-sm text-ink-muted">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-gold">
              <Phone className="size-4 text-gold" />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-gold">
              <Mail className="size-4 text-gold" />
              {CONTACT.email}
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" />
              {CONTACT.address}
            </p>
          </div>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Insurance</h4>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className={col}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className={col}>
                About EWG
              </Link>
            </li>
            <li>
              <Link to="/partners" className={col}>
                Our Partners
              </Link>
            </li>
            <li>
              <Link to="/become-an-advisor" className={col}>
                Become an Advisor
              </Link>
            </li>
            <li>
              <Link to="/business-partner" className={col}>
                Become a Partner
              </Link>
            </li>
            <li>
              <Link to="/blog" className={col}>
                Insights & Blog
              </Link>
            </li>
            <li>
              <Link to="/careers" className={col}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Support & Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/support" className={col}>
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="/grievance" className={col}>
                Grievance Redressal
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={col}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className={col}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className={col}>
                Disclaimer & Disclosures
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6 text-xs text-ink-muted">
          <p>
            Insurance is the subject matter of solicitation. Please read the sales brochure and
            policy terms carefully before concluding a sale. Products are offered through authorised
            partners; registration details will be displayed here once verified.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Elite Wealth & Growth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
