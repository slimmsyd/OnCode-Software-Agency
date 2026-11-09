import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import BookAuditButton from "../BookAuditButton";
import RedesignFooter from "../RedesignFooter";
import RedesignNav from "../RedesignNav";
import { EMAIL_TRIAGE_FAQ } from "./email-triage-faq";

const prose: CSSProperties = {
  margin: "0 0 1rem",
  maxWidth: "65ch",
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1.65,
  color: "#1c1917",
};

const heading: CSSProperties = {
  margin: "3.25rem 0 0.85rem",
  maxWidth: "22ch",
  fontSize: "clamp(32px, 4vw, 44px)",
  fontWeight: 300,
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  color: "#111",
};

function Shot({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full border border-black/10 bg-[#141414]"
        sizes="(min-width: 960px) 880px, 100vw"
      />
      <figcaption
        style={{
          marginTop: 12,
          maxWidth: "65ch",
          fontSize: 15,
          lineHeight: 1.5,
          color: "#374151",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function EmailTriageArticle() {
  return (
    <div className="bg-white text-[#111]">
      <a
        href="#article"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:text-[16px] focus:outline focus:outline-2 focus:outline-black"
      >
        Skip to article
      </a>
      <RedesignNav variant="inner" />
      <article id="article" className="px-6 pb-24 pt-28">
        <div className="mx-auto max-w-[880px]">
          <p style={{ ...prose, fontSize: 15, color: "#374151" }}>
            A field note from a facilities desk that holds government work.
          </p>
          <h1
            style={{
              margin: "0 0 1.25rem",
              maxWidth: "16ch",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            How to set up email triage for a facilities company
          </h1>
          <p style={{ ...prose, fontSize: 20, lineHeight: 1.55 }}>
            Set it up as a skill the agent runs on a schedule. It reads a short
            knowledge base of the live facilities, connects to Gmail, labels
            each thread, and archives until the inbox holds 20 threads or fewer.
          </p>
          <p style={prose}>
            It organizes mail. It never drafts, replies, or sends. I built this
            on a facilities maintenance and management desk. The shots below are
            that build, in the order the work happened.
          </p>

          <h2 style={heading}>What you are building</h2>
          <p style={prose}>
            An email triage agent is a repeatable job, not a chat you open once.
            You describe the current work in a markdown file, connect Gmail, and
            hand the agent one skill: keep the inbox at or under 20 threads,
            label what you file, and report what changed.
          </p>
          <p style={prose}>
            On this desk, important is specific. A live work order, an open
            government facility, a certificate of insurance about to lapse, and
            a message from the person who owns the contract stay in view. A
            confirmation, a CC, a receipt, and a vendor blast get a label and
            leave the inbox. The mail stays in All Mail. Nothing is deleted.
          </p>
          <ul className="mb-4 max-w-[65ch] list-disc space-y-2 pl-5" style={prose}>
            <li>Harness. The app you work in. This build uses Grok Bot.</li>
            <li>Tools. Search, read, label, and archive. Not send.</li>
            <li>MCP. The connection from the app to Gmail.</li>
            <li>Knowledge base. Which buildings, contracts, and people are live.</li>
            <li>Skill. The name, the description, and the steps for this one job.</li>
            <li>Cloud run. The same skill, on a schedule, without you in the chat.</li>
          </ul>

          <h2 style={heading}>What the inbox actually held</h2>
          <p style={prose}>
            A facilities desk that serves government buildings does not clog on
            newsletters. It clogs on operational mail nobody filed: work orders,
            vendor threads, insurance and credentials, portal notices, bid mail
            that has not been screened, and a thin slice of mail from a
            contracting officer or a site contact that needs a decision.
          </p>
          <p style={prose}>
            A filter that only catches promotions leaves that pile alone. The
            agent has to know which building is live this month. That is the
            knowledge base.
          </p>

          <h2 style={heading}>Set it up</h2>
          <h3 style={{ ...heading, marginTop: "1.75rem", fontSize: 28, maxWidth: "28ch" }}>
            1. Name the job
          </h3>
          <p style={prose}>
            Download Grok Bot from{" "}
            <a
              href="https://x.ai/bot"
              className="cursor-pointer underline decoration-black/30 underline-offset-4 hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              x.ai/bot
            </a>{" "}
            and create a bot for this one job. Name it for the work. Email
            Cleaner is enough.
          </p>
          <Shot
            src="/articles/email-triage/01-create-bot.png"
            width={1198}
            height={1288}
            alt="Create New Bot dialog in Grok Bot. The bot is named Test Email Cleaner and a blue icon is selected."
            caption="Figure 1. Create the bot and name it for the job before you connect any mail."
          />
          <p style={prose}>
            Once it exists, the bot asks what you want done, as if it already
            has a guess. Answer from the operation: this is a facilities
            company, the mailbox is the one dispatch and project managers
            actually read, and the outcome is an inbox of 20 threads or fewer.
          </p>
          <Shot
            src="/articles/email-triage/02-email-cleaner-questions.png"
            width={1198}
            height={1288}
            alt="Test Email Cleaner asking what to focus on first, with choices for promos, replies, unsubscribes, a regular cleanup, or something else."
            caption="Figure 2. The bot asks where to start. For this desk the answer is the live work, not a promo sweep."
          />

          <h3 style={{ ...heading, marginTop: "1.75rem", fontSize: 28, maxWidth: "28ch" }}>
            2. Connect Gmail
          </h3>
          <p style={prose}>
            Open Connect Apps and connect the Gmail server. MCP is the open
            connection between the app and an outside system. The host is the
            app you are using. The server is Gmail. The model decides which
            tool to call, and the host brings the result back.
          </p>
          <p style={prose}>
            The host asks the server what it can do. For Gmail that list is
            search, read, draft, and manage. Connecting the server does not
            give the agent permission to speak for the company. The skill
            refuses that.
          </p>
          <Shot
            src="/articles/email-triage/03-gmail-tools.png"
            width={1514}
            height={256}
            alt="Gmail connected to the agent, described as search, read, draft, and manage email."
            caption="Figure 3. Gmail is connected. The skill below is what keeps draft and send from being used."
          />

          <h3 style={{ ...heading, marginTop: "1.75rem", fontSize: 28, maxWidth: "28ch" }}>
            3. Feed the knowledge base, then the prompt
          </h3>
          <p style={prose}>
            Give the agent a markdown file of the company right now: active
            government facilities and the contracts on them, who speaks for
            each, the vendors the company actually uses, and which domains
            belong to the company, the customer, the insurers, and the portals.
            A stale file files mail against work you finished.
          </p>
          <p style={prose}>
            Then give it the job in one prompt. Read the knowledge base. Build
            a skill that understands the inbox, the labels, and the projects.
            Keep the inbox to 20 items. Label what moves. Return a summary.
            Never write, draft, or send.
          </p>
          <Shot
            src="/articles/email-triage/04-triage-prompt.png"
            width={1022}
            height={670}
            alt="The triage prompt attached to the facilities knowledge base file, instructing the agent to read it and keep the inbox to a maximum of 20 items."
            caption="Figure 4. The facilities knowledge base is attached with the prompt that caps the inbox at 20."
          />

          <h3 style={{ ...heading, marginTop: "1.75rem", fontSize: 28, maxWidth: "28ch" }}>
            4. Save it as a skill
          </h3>
          <p style={prose}>
            Ask the agent to save the job as a skill, then run it on a schedule.
            A skill is a folder of instructions for one kind of task. This one
            is named Inbox Organizer (Max 20). It loads the knowledge base,
            reuses labels you already have, classifies each thread, labels it
            before it moves, and archives until 20 or fewer remain.
          </p>
          <p style={prose}>
            Keep a thread when a person owes a reply or a decision, or when it
            is a live facility thread from the last few days. File
            confirmations and CCs. File receipts, billing, insurance,
            credentials, and portal notices. File newsletters. Archive only.
            Leave starred mail, and anything from the last day that names a
            deadline. If the agent is unsure, the thread stays and the report
            says so.
          </p>

          <h3 style={{ ...heading, marginTop: "1.75rem", fontSize: 28, maxWidth: "28ch" }}>
            5. Read the report
          </h3>
          <p style={prose}>
            The run writes a summary a facilities lead can read in a minute:
            the count before and after, what stayed and why, and where
            everything else went. On November 9, 2026 this desk went from 107
            conversations to 9. Nothing was deleted.
          </p>
          <Shot
            src="/articles/email-triage/06-clean-inbox.png"
            width={2336}
            height={1024}
            alt="Inbox Cleanup Report for November 9, 2026. Conversations in the inbox fell from 107 to 9. The report says nothing was deleted."
            caption="Figure 5. The report from the facilities run. 107 conversations to 9. Deleted: nothing."
          />

          <h2 style={heading}>What stays, what gets filed</h2>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                How the skill treats each kind of facilities mail
              </caption>
              <thead>
                <tr className="border-b border-black/15">
                  <th className="py-3 pr-4 text-[15px] font-medium" scope="col">
                    Mail
                  </th>
                  <th className="py-3 pr-4 text-[15px] font-medium" scope="col">
                    What the agent does
                  </th>
                  <th className="py-3 text-[15px] font-medium" scope="col">
                    Why
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Contracting officer, property manager, or site contact on a live facility",
                    "Stays in the inbox",
                    "A person owes a decision or a reply",
                  ],
                  [
                    "Open work order with a deadline",
                    "Stays if it is unresolved",
                    "The building is the work",
                  ],
                  [
                    "Vendor thread that is only a confirmation or a CC",
                    "Label by vendor or site, then archive",
                    "The team can find it. It does not need the morning.",
                  ],
                  [
                    "Insurance, billing, credential, portal notice",
                    "Label as reference, then archive",
                    "It is a record, unless the notice says something lapsed",
                  ],
                  [
                    "Bid mail that has not been screened",
                    "Label it, keep it out of the action pile",
                    "Unscreened solicitation mail is not a recommendation to bid",
                  ],
                  [
                    "Newsletter or automated alert",
                    "Label as low value, then archive",
                    "It is not a facility",
                  ],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-black/10 align-top">
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="py-4 pr-4"
                        style={{ fontSize: 16, lineHeight: 1.5, color: "#1c1917" }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={heading}>Three ways to handle the same mail</h2>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                Shared inbox, filters, and a triage agent compared
              </caption>
              <thead>
                <tr className="border-b border-black/15">
                  {["", "Shared inbox", "Filters only", "Triage skill"].map((label) => (
                    <th key={label || "blank"} className="py-3 pr-4 text-[15px] font-medium" scope="col">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Knows which facilities are live", "Only if a person remembers", "No", "Yes, from the knowledge base"],
                  ["Reuses labels you already have", "Occasionally", "Rarely", "Yes, before it creates a new one"],
                  ["Inbox cap", "None", "None", "20 threads"],
                  ["Sends or replies", "Whoever writes it", "No", "Never"],
                  ["Record of what moved", "No", "No", "A summary every run"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-black/10 align-top">
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className="py-4 pr-4"
                        style={{
                          fontSize: 16,
                          lineHeight: 1.5,
                          color: "#1c1917",
                          fontWeight: index === 0 ? 500 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...prose, marginTop: "1rem" }}>
            Filters are the right tool for a sender you never want to see. They
            are the wrong tool for a work order that is routine on Tuesday and a
            stop-work on Wednesday.
          </p>

          <h2 style={heading}>What the agent will not do</h2>
          <p style={prose}>
            This skill does not write to a contracting officer, a tenant, or a
            vendor. Archive removes the inbox label and leaves the thread under
            the label you applied. A crowded inbox is a nuisance. A buried
            government email is a loss.
          </p>
          <p style={prose}>
            The same shape of skill can point at another channel later. This
            build is Gmail, because that is where this company’s record of the
            work already lives. The original walkthrough is on{" "}
            <a
              href="https://promptimusprime.substack.com/p/getting-starting-with-agents"
              className="cursor-pointer underline decoration-black/30 underline-offset-4 hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              PromptimusPrime
            </a>
            .
          </p>

          <h2 id="faq" style={{ ...heading, scrollMarginTop: 120 }}>
            Questions
          </h2>
          <div className="max-w-[65ch] border-b border-black/10">
            {EMAIL_TRIAGE_FAQ.map((item) => (
              <details key={item.q} className="group border-t border-black/10">
                <summary
                  className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black [&::-webkit-details-marker]:hidden"
                  style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.4 }}
                >
                  {item.q}
                  <span aria-hidden className="text-[20px] font-light text-black/40 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p style={{ ...prose, fontSize: 16, color: "#374151", paddingBottom: 8 }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-16 border-t border-black/10 pt-10">
            <h2 style={{ ...heading, marginTop: 0, maxWidth: "20ch" }}>
              Have us set the first one up
            </h2>
            <p style={prose}>
              The first workflow is the inbox. After it runs for a week, the
              next one is whichever leak the report keeps surfacing.
            </p>
            <BookAuditButton source="email_triage_article" />
            <p style={{ ...prose, marginTop: "1.25rem", fontSize: 15 }}>
              <Link
                href="/ai-automation-consultant"
                className="cursor-pointer underline decoration-black/30 underline-offset-4 hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                How an OnCode engagement starts
              </Link>
            </p>
          </div>
        </div>
      </article>
      <RedesignFooter />
    </div>
  );
}
