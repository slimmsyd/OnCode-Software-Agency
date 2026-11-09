export interface EmailTriageFaqItem {
  q: string;
  a: string;
}

export const EMAIL_TRIAGE_FAQ: EmailTriageFaqItem[] = [
  {
    q: "How do you set up email triage for a facilities maintenance company?",
    a: "Write a knowledge base of the live facilities, contracts, and contacts. Connect Gmail to the agent. Install one skill that labels every thread and archives until the inbox has 20 items or fewer. Run that skill on a schedule. The skill never drafts or sends.",
  },
  {
    q: "Will the agent reply to a contracting officer or a site contact?",
    a: "No. The skill may search, read, label, and archive. Drafting, replying, forwarding, and sending stay with a person.",
  },
  {
    q: "What is MCP in an email triage setup?",
    a: "MCP connects the agent app to Gmail. The app asks the Gmail server which tools exist, then calls them. The skill decides what those calls are allowed to change.",
  },
  {
    q: "What should a facilities company put in the knowledge base?",
    a: "The buildings and contracts that are active, the people who speak for each, the vendors the company actually uses, and the domains for the company, the customer, insurers, and portals. Update it when a facility opens or closes.",
  },
  {
    q: "What earns a spot in the inbox?",
    a: "A thread stays when a person owes a reply or a decision, when a deadline is inside the last day, or when the sender is a key contact on a live facility. Everything else is labeled and archived. Starred mail stays.",
  },
  {
    q: "How is this different from Gmail filters?",
    a: "Filters match a sender or a word and move mail whether the building is live or not. The triage skill reads the knowledge base first, reuses your labels, and writes a report of what it kept.",
  },
  {
    q: "Can this run every morning without someone in the chat?",
    a: "Yes. Save the job as a skill and schedule it. The morning output is the summary: the count before and after, what stayed, what was filed, and what the agent was unsure about.",
  },
  {
    q: "Does the agent delete mail?",
    a: "No. It archives. Archived mail stays searchable in All Mail under its label. The facilities run on November 9, 2026 deleted nothing.",
  },
];
