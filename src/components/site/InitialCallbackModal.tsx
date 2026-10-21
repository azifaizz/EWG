import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

const STORAGE_KEY = "ewg_initial_callback_dismissed";

export function InitialCallbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (dismissed) return undefined;
    } catch {
      // Ignore storage errors
    }
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleOpen() {
      setIsOpen(true);
    }
    window.addEventListener("ewg:open-callback-modal", handleOpen);
    return () => window.removeEventListener("ewg:open-callback-modal", handleOpen);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function handleDismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage errors
    }
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Dark backdrop blur */}
      <div
        onClick={handleDismiss}
        className="fixed inset-0 bg-ink/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Centered Modal with ample breathing space top and bottom */}
      <div className="relative my-auto w-full max-w-[440px] overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/35 bg-card text-card-foreground shadow-2xl transition-all animate-in zoom-in-95 fade-in duration-200">
        {/* Subtle top gold accent glow */}
        <div className="h-1.5 w-full bg-gold-gradient" />

        {/* Close (X) button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Skip and close"
          className="absolute right-3.5 top-3.5 grid size-8 place-items-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-muted hover:text-foreground focus:outline-none"
        >
          <X className="size-4" />
        </button>

        <div className="p-5 sm:p-6">
          {/* Header without oval badge */}
          <div className="mb-4 pr-7">
            <h2
              id="callback-modal-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
            >
              Request a free callback
            </h2>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Share your details if you'd like our certified advisor to call you, or click{" "}
              <strong>Skip</strong> to explore the site directly.
            </p>
          </div>

          {/* Form */}
          <LeadForm
            type="callback"
            compact
            showTime
            onSkip={handleDismiss}
            onSuccess={handleDismiss}
          />
        </div>
      </div>
    </div>
  );
}

/** Helper to programmatically open the callback modal from any button */
// eslint-disable-next-line react-refresh/only-export-components
export function openCallbackModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("ewg:open-callback-modal"));
  }
}
