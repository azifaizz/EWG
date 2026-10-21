import { createFileRoute } from "@tanstack/react-router";
import { TextPage, meta } from "@/components/site/TextPage";

export const Route = createFileRoute("/privacy")({
  head: () =>
    meta("Privacy Policy", "How EWG collects, uses and protects your personal information."),
  component: () => (
    <TextPage
      eyebrow="Legal"
      title="Privacy Policy"
      sections={[
        {
          h: "Information we collect",
          p: "When you submit a form we collect your name, phone number, email, city and the service you're interested in, so that an advisor can contact you.",
        },
        {
          h: "How we use it",
          p: "Your details are used only to respond to your request, provide quotations and service your insurance policies. We do not sell your data.",
        },
        {
          h: "Sharing",
          p: "With your consent, relevant details may be shared with our authorised insurance partners to process your application.",
        },
        {
          h: "Your rights",
          p: "You may request access, correction or deletion of your data at any time by contacting us.",
        },
      ]}
    />
  ),
});
