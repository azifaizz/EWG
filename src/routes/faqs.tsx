import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { FaqList } from "@/components/site/FaqList";
import { meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/faqs")({
  head: () =>
    meta(
      "FAQs",
      "Answers to common questions about insurance coverage, claims, and working with EWG.",
    ),
  component: () => (
    <>
      <PageHero eyebrow="Resources" title="Frequently asked questions" />
      <Section className="max-w-4xl">
        <FaqList />
      </Section>
    </>
  ),
});
