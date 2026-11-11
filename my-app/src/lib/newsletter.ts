import { z } from "zod";

/** Available popup directions. Add a new id here when a new design ships. */
export const NEWSLETTER_DESIGN_IDS = ["field-note", "signal"] as const;

export type NewsletterDesignId = (typeof NEWSLETTER_DESIGN_IDS)[number];

/** Which direction the live popup uses. Change this one line to swap designs. */
export const DEFAULT_NEWSLETTER_DESIGN: NewsletterDesignId = "field-note";

export const NEWSLETTER_CADENCE = "Twice a month";

/** Shared serif used for mastheads in the editorial direction. */
export const NEWSLETTER_SERIF_FONT =
  "'Newsreader', Georgia, 'Times New Roman', serif";

/** Popup shows again only after this long, if it was dismissed without subscribing. */
export const NEWSLETTER_DISMISS_COOLDOWN_DAYS = 30;

export const newsletterSignupSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address.")
    .max(254, "That email is too long."),
  name: z
    .string()
    .trim()
    .max(80, "Keep your name under 80 characters.")
    .optional()
    .transform((value) => (value ? value : undefined)),
  source: z.string().trim().max(60).default("popup"),
  design: z.enum(NEWSLETTER_DESIGN_IDS).optional(),
});

export type NewsletterSignupInput = z.infer<typeof newsletterSignupSchema>;
export type NewsletterSignupPayload = z.input<typeof newsletterSignupSchema>;
