import { createFileRoute } from "@tanstack/react-router";
import { TextPage, meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    meta(
      "Disclaimer & Regulatory Disclosures",
      "Regulatory disclosures and disclaimers for EWG – Elite Wealth & Growth.",
    ),
  component: () => (
    <TextPage
      eyebrow="Legal"
      title="Disclaimer & Regulatory Disclosures"
      sections={[
        {
          h: "Insurance disclaimer",
          p: "Insurance is the subject matter of solicitation. Please read the sales brochure and policy wordings carefully before concluding a sale.",
        },
        {
          h: "Registration",
          p: "EWG's registration and licence details with the relevant regulator will be displayed here once verified.",
        },
        {
          h: "Partner logos",
          p: "Partner names and logos are trademarks of their respective owners and are displayed only for authorised relationships.",
        },
      ]}
    />
  ),
});
