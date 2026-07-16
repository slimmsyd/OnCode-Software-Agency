export type FaqItem = {
  q: string;
  a: string;
};

export const CONSULTANT_FAQ: FaqItem[] = [
  {
    q: "Do you serve Northern Virginia and the DMV?",
    a: "Yes. OnCode serves Fredericksburg, Alexandria, Arlington, Lorton, Fairfax, Tysons, and Reston, plus remote clients nationwide.",
  },
  {
    q: "What workflows can you automate?",
    a: "Lead follow-up, missed-call text-back, intake and scheduling, invoicing and reminders, and internal reporting. We also build custom workflows tailored to how your business actually operates. The diagnostic audit surfaces what is worth automating first.",
  },
  {
    q: "Will I own the automations, documentation, and accounts?",
    a: "Yes. Nothing is held hostage.",
  },
  {
    q: "How do you measure ROI in the first 30-60 days?",
    a: "We pick one pilot workflow and baseline the leak (time, missed leads, or cost), then measure against that after ship.",
  },
  {
    q: "What's a typical project size and timeline?",
    a: "Audit first (about two weeks). First fix usually ships in weeks, not months. Scope grows only after the pilot pays for itself.",
  },
];
