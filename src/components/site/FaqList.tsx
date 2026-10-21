import { FAQS } from "@/lib/site";

export function FaqList({ limit }: { limit?: number }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {FAQS.slice(0, limit).map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {f.q}
            <span className="text-xl text-gold transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
