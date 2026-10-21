import { PageHero, Section } from "./PageHero";

export function TextPage({
  eyebrow,
  title,
  sections,
}: {
  eyebrow: string;
  title: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <Section className="max-w-3xl">
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 rounded-lg bg-muted p-4 text-xs text-muted-foreground">
          This content is a draft and should be reviewed by EWG's compliance team before publishing.
        </p>
      </Section>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | EWG – Elite Wealth & Growth` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | EWG` },
    { property: "og:description", content: description },
  ],
});
