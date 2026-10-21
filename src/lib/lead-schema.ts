import { z } from "zod";

export type LeadType =
  "enquiry" | "callback" | "quote" | "appointment" | "advisor" | "partner" | "career" | "grievance";

/**
 * Validates Indian (10-digit starting with 6-9, optional +91/0) or standard E.164 international phone numbers.
 * Disallows repeating non-digit sequences and non-numeric junk.
 */
function isValidPhoneNumber(val: string): boolean {
  const cleaned = val.replace(/[\s\-().]/g, "");
  // Indian mobile: optional +91 or 0 followed by 10 digits starting with 6-9
  const indianPattern = /^(?:(?:\+91|0))?[6-9]\d{9}$/;
  // General international: + followed by 8 to 15 digits
  const intlPattern = /^\+?[1-9]\d{8,14}$/;

  return indianPattern.test(cleaned) || intlPattern.test(cleaned);
}

/** Sanitize text to prevent HTML tag injection / XSS payloads */
function sanitizeText(val?: string): string | undefined {
  if (!val) return val;
  return val.replace(/[<>]/g, "").trim();
}

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Name too long")
    .transform((val) => sanitizeText(val) ?? ""),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must have at least 10 digits")
    .max(20, "Phone number too long")
    .refine(isValidPhoneNumber, {
      message: "Enter a valid 10-digit mobile number",
    }),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().transform(sanitizeText),
  service: z.string().max(80).optional(),
  preferred_time: z.string().max(80).optional(),
  message: z.string().trim().max(1000).optional().transform(sanitizeText),
  /** Honeypot anti-spam field: invisible to human users, filled only by bots */
  hp_website: z.string().max(100).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
