export interface ResourceVideo {
  /** YouTube video id (the `v` param), not a full URL. */
  youtubeId: string;
  /** Short label under the thumbnail, e.g. "Watch the walkthrough". */
  label: string;
  /** Minutes, shown on the thumbnail badge. */
  duration?: string;
}

export interface ResourceItem {
  /** Stable key + anchor id. */
  key: string;
  /** Zero-padded index shown in the left gutter. */
  num: string;
  title: string;
  /** One-line promise. Plain outcome, no hype. */
  promise: string;
  /** Completes the sentence "Who it is for: …" — lowercase, ends with a period. */
  who: string;
  /** Exactly three. Full sentences. */
  bullets: [string, string, string];
  /** Completes "In the pack: …" */
  pack: string;
  /** Public Google Drive folder URL. */
  driveUrl: string;
  /** PDF cover image in /public. 260x336 display box, object-fit: cover. */
  cover: string;
  /** Optional walkthrough video. Adds a second preview tile that opens a YouTube modal. */
  video?: ResourceVideo;
}

export const RESOURCES: ResourceItem[] = [
  {
    key: "client-proposal-creator",
    num: "01",
    title: "Client Proposal Creator",
    promise:
      "Input who they are, what you are delivering, and the price. Get a branded proposal and payment links without starting from a blank page.",
    who: "business owners and operators who keep closing clients and need the proposal out the same day.",
    bullets: [
      "You supply the client, the offer, scope, and price. The skill assembles the proposal from there.",
      "Fills a branded template from cover page through pricing, ready to send.",
      "Stripe connected: creates payment links for each milestone, in the order you set.",
    ],
    pack: "skill, proposal template, Stripe setup",
    driveUrl: "https://drive.google.com/drive/folders/1nRNSJu4MYIw-ZviAo4w9cwseSjHMleD1",
    cover: "/resources/covers/client-proposal-creator-cover.png",
    video: {
      youtubeId: "OGmb8kURvao",
      label: "Watch the walkthrough",
    },
  },
  {
    key: "inbox-email-triage",
    num: "02",
    title: "Inbox Email Triage",
    promise: "Reads the inbox, sorts it, drafts the replies. Sends nothing on its own.",
    who:
      "operators whose inbox is the bottleneck, who will not hand an agent send access.",
    bullets: [
      "Searches, labels and archives by plain instruction, not by filter rules.",
      "Drafts replies in your voice and leaves them sitting in drafts.",
      "Shows you the plan and waits for a yes before it touches anything.",
    ],
    pack: "skill, setup notes",
    driveUrl: "https://drive.google.com/drive/folders/19ux2YcA5V1LqHITJsYJ6iyafGA2SUpF-",
    cover: "/resources/covers/inbox-email-triage-cover.png",
  },
  {
    key: "standards-vault",
    num: "03",
    title: "Standards Vault",
    promise:
      "Set up an agentic-engineering project so the agent knows your rules on day one.",
    who:
      "teams putting agents on a real codebase, tired of repeating themselves every session.",
    bullets: [
      "One vault of standards the agent reads before it writes a line.",
      "Conventions, review rules and guardrails live in files, not in chat history.",
      "Drops into an existing repo. Nothing to migrate.",
    ],
    pack: "skill, project scaffold",
    driveUrl: "https://drive.google.com/drive/folders/1PbsLKMMVunhB-Xz3xrWooKtrMmGCv8YG",
    cover: "/resources/covers/standards-vault-cover.png",
  },
  {
    key: "agency-ga-reporter",
    num: "04",
    title: "Agency GA Reporter",
    promise:
      "Pulls GA4 for every client, builds a branded PDF dashboard, drops a Gmail draft for each. Sends nothing on its own.",
    who:
      "agencies and consultants who deliver recurring analytics reports across a client portfolio.",
    bullets: [
      "One run pulls GA4, builds a one-page PDF, and creates a draft per client with an email on file.",
      "Auto-writes plain-English takeaways so each report reads like you wrote it, not like a dashboard export.",
      "Never auto-sends. Every draft sits in Gmail for you to review, tweak, and send.",
    ],
    pack: "skill, template script, setup guide",
    driveUrl: "https://drive.google.com/drive/folders/1785AT-ZbQGazRcXrsaELUcTcuG2jH2aJ",
    cover: "/resources/covers/agency-ga-reporter-cover.png",
  },
  {
    key: "solicitation-quick-reference",
    num: "05",
    title: "Solicitation Quick Reference",
    promise:
      "Hand it a government bid document. Get a one-page branded sheet with the 13 facts that decide whether you bid.",
    who:
      "contractors and estimators who receive RFPs, IFBs, and RFQs and need the deadline, submission method, and scope on one page before they commit time.",
    bullets: [
      "Set branding once: company name, ID numbers, colors, optional logo. Saved to a file. Never asked again.",
      "Upload any solicitation. It extracts issuer, dates, submission method, scope, bonding, insurance, set-asides, and prevailing wage, then shows all 13 fields for your approval.",
      "It builds a one-page PDF in your branding with the due date in red at the top, plus a plain text copy. Never guesses. Never generates without your yes.",
    ],
    pack: "skill, branding setup, quick reference template",
    driveUrl: "https://drive.google.com/drive/folders/1VWxSeUhJE6lmczM1TYBnGBd7YIFrBQ_E",
    cover: "/resources/covers/solicitation-quick-reference-cover.png",
  },
];
