import { createFileRoute } from "@tanstack/react-router";
import { TextPage, meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms & Conditions", "Terms governing use of the EWG website and services."),
  component: () => (
    <TextPage
      eyebrow="Legal"
      title="Terms & Conditions"
      sections={[
        {
          h: "Use of this website",
          p: "Information on this website is for general guidance and does not constitute an offer. Product terms are governed by the respective insurer or lender.",
        },
        {
          h: "Accuracy",
          p: "We aim to keep information accurate and current, but premiums, rates and features may change without notice.",
        },
        {
          h: "Communication consent",
          p: "By submitting your details you consent to be contacted by EWG via phone, SMS, email or WhatsApp, even if registered on DND.",
        },
      ]}
    />
  ),
});
