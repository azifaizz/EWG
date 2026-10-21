import { PARTNERS } from "@/lib/site";
import { PartnerLogo } from "./PartnerLogo";

export function PartnerMarquee() {
  const list = [...PARTNERS, ...PARTNERS];
  return (
    <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-3.5 sm:gap-4 hover:[animation-play-state:paused]">
        {list.map((p, i) => (
          <div
            key={i}
            className="flex h-11 sm:h-12 min-w-36 sm:min-w-44 items-center justify-center rounded-xl border border-white/80 bg-white px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-gold hover:shadow-[0_4px_16px_rgba(212,175,55,0.22)] hover:-translate-y-0.5"
          >
            <PartnerLogo
              name={p}
              className="h-5 sm:h-6 w-auto max-w-full object-contain"
              height={24}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
