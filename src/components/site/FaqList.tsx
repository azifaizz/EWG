import { FAQS } from "@/lib/site";

export function FaqList({ limit }: { limit?: number }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {FAQS.slice(0, limit).map((f) => (
        <details key={f.q} className="group p-4 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm sm:text-base font-semibold">
            <span>{f.q}</span>
            <span className="text-xl text-gold transition-transform group-open:rotate-45 shrink-0">+</span>
          </summary>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
