import { z } from "zod";

export const budgetOptions = [
  { value: "under_2k", label: "Under $2,000" },
  { value: "2k_5k", label: "$2,000 - $5,000" },
  { value: "5k_10k", label: "$5,000 - $10,000" },
  { value: "10k_25k", label: "$10,000 - $25,000" },
  { value: "25k_plus", label: "$25,000+" },
] as const;

export const timelineOptions = [
  { value: "asap", label: "ASAP (under 2 weeks)" },
  { value: "1_month", label: "Within 1 month" },
  { value: "2_3_months", label: "2-3 months" },
  { value: "exploring", label: "Just exploring" },
] as const;

export const userCountOptions = [
  { value: "just_me", label: "Just me" },
  { value: "under_50", label: "Under 50" },
  { value: "50_500", label: "50-500" },
  { value: "500_plus", label: "500+" },
] as const;

export const existingSystemOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "yes_broken", label: "Yes, but it's broken" },
] as const;

export const referralSourceOptions = [
  { value: "referral", label: "Referral" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "google", label: "Google" },
  { value: "other", label: "Other" },
] as const;

export const intakeFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  businessName: z.string().min(1, "Business name is required"),
  website: z.string().optional(),

  businessDescription: z
    .string()
    .min(10, "Please tell us a bit more about your business"),

  problemDescription: z
    .string()
    .min(10, "Please describe the problem in more detail"),
  hasExistingSystem: z.enum(["yes", "no", "yes_broken"], {
    required_error: "Please select an option",
  }),
  existingSystemUrl: z.string().optional(),

  budgetRange: z.enum(["under_2k", "2k_5k", "5k_10k", "10k_25k", "25k_plus"], {
    required_error: "Please select a budget range",
  }),
  timeline: z.enum(["asap", "1_month", "2_3_months", "exploring"], {
    required_error: "Please select a timeline",
  }),
  approximateUsers: z.enum(["just_me", "under_50", "50_500", "500_plus"], {
    required_error: "Please select an option",
  }),

  referralSource: z.enum(["referral", "linkedin", "google", "other"], {
    required_error: "Please select how you heard about us",
  }),
  referralName: z.string().optional(),
});

export type IntakeFormData = z.infer<typeof intakeFormSchema>;

export const stepFields: Record<number, (keyof IntakeFormData)[]> = {
  0: ["name", "email", "phone", "businessName", "website"],
  1: ["businessDescription"],
  2: ["problemDescription", "hasExistingSystem", "existingSystemUrl"],
  3: ["budgetRange", "timeline", "approximateUsers"],
  4: ["referralSource", "referralName"],
};

export const STEP_COUNT = 5;

export const stepTitles = [
  "Let's start with you",
  "What does your business do?",
  "What problem are you trying to solve?",
  "Scope & budget",
  "One last thing",
];
