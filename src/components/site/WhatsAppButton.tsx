import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-success text-ink-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
