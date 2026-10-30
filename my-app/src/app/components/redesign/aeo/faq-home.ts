export type HomeFaqItem = {
  q: string;
  a: string;
  /** Optional internal link shown under the answer (UI only; schema uses `a` text). */
  link?: { href: string; label: string };
};

/**
 * Homepage FAQ: AEO seeds + Areas We Serve + strongest audit objections.
 * Schema uses `q`/`a` only; UI can render optional `link`.
 */
export const HOME_FAQ: HomeFaqItem[] = [
  {
    q: "Who is OnCode and what do you do?",
    a: "OnCode is an AI and custom software firm. We find where you leak time and money, then build the systems (automation, web applications, and sites) that seal the leaks, and we manage what we ship after launch.",
  },
  {
    q: "Are you an AI automation consultant?",
    a: "Yes. OnCode builds custom, output-driven automations for businesses with real operations to protect: lead follow-up, missed-call text-back, intake and scheduling, invoicing and reminders, and internal reporting. We deploy one workflow at a time so results show before you scale.",
    link: {
      href: "/ai-automation-consultant",
      label: "Read how we work as an AI automation consultant",
    },
  },
  {
    q: "Do you serve Northern Virginia and the DMV?",
    a: "Yes. OnCode is an AI automation agency serving the DMV: Washington DC, Northern Virginia (Fredericksburg, Alexandria, Arlington, Lorton, Fairfax, Tysons, Reston), and nearby Maryland (including Bethesda and Silver Spring), plus remote clients nationwide.",
  },
  {
    q: "How much of my time does a first look take?",
    a: "About three hours. One 30-minute scoping call, a few short sits with the people who do the work, one walkthrough of the roadmap at the end. We do the mapping. You keep running the business.",
  },
  {
    q: "Do I have to commit to a full build up front?",
    a: "No. If you want a map before a build, we price that on the scoping call, once we know the size of the work. A flat fee, agreed before we start, and it credits against any build.",
  },
  {
    q: "Who owns the code and the roadmap?",
    a: "You do. The roadmap is yours to act on, with us or without us. Anything we build after is yours too: code, accounts, data. Nothing is held hostage.",
  },
];
