import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 grid size-12 sm:size-14 place-items-center rounded-full bg-success text-ink-foreground shadow-card transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="size-5 sm:size-6" />
    </a>
  );
}
