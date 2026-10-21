import { useState, useId } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { leadSchema, type LeadType } from "@/lib/lead-schema";

export type { LeadType };

export function LeadForm({
  type = "enquiry",
  defaultService,
  title,
  compact,
  showTime,
  dark,
  onSkip,
  onSuccess,
}: {
  type?: LeadType;
  defaultService?: string;
  title?: string;
  compact?: boolean;
  showTime?: boolean;
  dark?: boolean;
  onSkip?: () => void;
  onSuccess?: () => void;
}) {
  const formId = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    // OWASP Bot Protection: if invisible honeypot field is filled, silently spoof success
    if (raw["hp_website"]) {
      setStatus("done");
      return;
    }

    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [i.path[0], i.message])));
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const label = dark ? "text-ink-foreground/80" : "text-foreground/80";

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-12 text-gold" />
        <h3 className="mt-4 text-2xl text-card-foreground">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your request. An EWG telecaller or advisor will contact you shortly.
        </p>
        {onSuccess && (
          <button type="button" onClick={onSuccess} className="btn-gold mt-6 mx-auto px-6">
            Continue to website
          </button>
        )}
      </div>
    );
  }

  const Err = ({ k }: { k: string }) =>
    errors[k] ? (
      <p id={`${formId}-err-${k}`} role="alert" className="mt-1 text-xs text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-4"} noValidate>
      {/* Invisible bot-trap honeypot field */}
      <input
        type="text"
        name="hp_website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {title && <h3 className={`text-2xl ${dark ? "text-ink-foreground" : ""}`}>{title}</h3>}
      <div className={`grid ${compact ? "gap-2.5" : "gap-4 sm:grid-cols-2"}`}>
        <div>
          <label htmlFor={`${formId}-name`} className={`mb-1 block text-xs font-semibold ${label}`}>
            Full name *
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            required
            aria-required="true"
            aria-invalid={errors["name"] ? "true" : undefined}
            aria-describedby={errors["name"] ? `${formId}-err-name` : undefined}
            className={`field ${compact ? "py-2 text-sm" : ""}`}
            maxLength={100}
            placeholder="e.g. Rajesh Kumar"
          />
          <Err k="name" />
        </div>
        <div>
          <label
            htmlFor={`${formId}-phone`}
            className={`mb-1 block text-xs font-semibold ${label}`}
          >
            Mobile number *
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={errors["phone"] ? "true" : undefined}
            aria-describedby={errors["phone"] ? `${formId}-err-phone` : undefined}
            className={`field ${compact ? "py-2 text-sm" : ""}`}
            maxLength={20}
            placeholder="e.g. 98765 43210"
          />
          <Err k="phone" />
          <p className="mt-1 flex items-center gap-1 text-[0.68rem] text-muted-foreground">
            <ShieldCheck className="size-3 text-gold/80" /> Zero spam. We only call once to
            understand your need.
          </p>
        </div>
        {!compact && (
          <div>
            <label
              htmlFor={`${formId}-email`}
              className={`mb-1 block text-xs font-semibold ${label}`}
            >
              Email
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              aria-invalid={errors["email"] ? "true" : undefined}
              aria-describedby={errors["email"] ? `${formId}-err-email` : undefined}
              className="field"
              maxLength={255}
            />
            <Err k="email" />
          </div>
        )}
        {!compact && (
          <div>
            <label
              htmlFor={`${formId}-city`}
              className={`mb-1 block text-xs font-semibold ${label}`}
            >
              City
            </label>
            <input id={`${formId}-city`} name="city" className="field" maxLength={80} />
          </div>
        )}
        <div className={compact ? "" : "sm:col-span-2"}>
          <label
            htmlFor={`${formId}-service`}
            className={`mb-1 block text-xs font-semibold ${label}`}
          >
            Interested in
          </label>
          <select
            id={`${formId}-service`}
            name="service"
            defaultValue={defaultService ?? ""}
            className={`field ${compact ? "py-2 text-sm" : ""}`}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Other / General Consultation</option>
          </select>
        </div>
        {showTime && (
          <div className={compact ? "" : "sm:col-span-2"}>
            <label
              htmlFor={`${formId}-time`}
              className={`mb-1 block text-xs font-semibold ${label}`}
            >
              Preferred time
            </label>
            <select
              id={`${formId}-time`}
              name="preferred_time"
              className={`field ${compact ? "py-2 text-sm" : ""}`}
            >
              <option>Morning (9–12)</option>
              <option>Afternoon (12–4)</option>
              <option>Evening (4–7)</option>
            </select>
          </div>
        )}
        {!compact && (
          <div className="sm:col-span-2">
            <label
              htmlFor={`${formId}-message`}
              className={`mb-1 block text-xs font-semibold ${label}`}
            >
              Message
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={3}
              className="field"
              maxLength={1000}
            />
          </div>
        )}
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Please try again or call us.
        </p>
      )}
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`btn-gold w-full flex-1 ${compact ? "py-2.5 text-sm" : ""}`}
        >
          {status === "sending" ? "Sending…" : "Submit request"}
        </button>
        {onSkip && (
          <button
            type="button"
            onClick={onSkip}
            className={`w-full rounded-xl border border-border bg-secondary px-5 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-colors sm:w-auto ${compact ? "py-2.5" : "py-3"}`}
          >
            Skip for now
          </button>
        )}
      </div>
      <p className={`text-[0.68rem] ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>
        By submitting, you agree to be contacted by EWG via call, SMS or WhatsApp.
      </p>
    </form>
  );
}
