# How do you set up an email triage agent for a facilities maintenance company?

Set it up as a skill the agent can run on a schedule: it reads a short knowledge base of the company’s live work, connects to Gmail, labels each thread by project, and archives everything that does not need a human today, until the inbox holds 20 threads or fewer. It organizes mail. It never drafts, replies, or sends.

I built this inside a facilities maintenance and management company that holds government work. The inbox was not a pile of newsletters. It was work orders, vendor threads, insurance and credential notices, portal mail, and the few messages from a contracting officer or a site contact that actually needed a decision. The same build teaches the pieces people mean when they say they are “working with agents”: a harness, tools, MCP, a knowledge base, a skill, and a cloud run.

## What you are building

An email triage agent is a repeatable job, not a chatbot you talk to once. You describe the company’s current work in a markdown file, connect Gmail, and hand the agent one skill: keep the inbox at or under 20 threads, label what you file, and report what changed.

For a facilities company, “important” is specific. A live work order, an open government facility, a certificate of insurance that is about to lapse, and a message from the person who owns the contract stay in view. A confirmation, a CC, a receipt, and a vendor blast get a label and leave the inbox. The mail is still in All Mail. Nothing is deleted.

## What this run taught

- **Harness.** The app you work in. This build uses Grok Bot, because it stays out of the way and anyone can start at [x.ai/bot](https://x.ai/bot).
- **Tools.** The actions the model is allowed to take. For Gmail, that is search, read, label, and archive.
- **MCP.** The open connection between the harness and an outside system. Here, the Gmail server.
- **Knowledge base.** A markdown file that states the company’s current projects, sites, and people, so the agent is not guessing from subject lines.
- **Skill.** A folder of instructions for one job: name, description, and steps.
- **Cloud agent.** The same skill, run on a schedule, without you sitting in the chat.

## Proof from the facilities inbox

The first useful fact was what the mail actually was. A facilities desk that serves government buildings does not clog on promotions. It clogs on operational mail that nobody filed:

- Work orders and dispatch notes for buildings already under contract
- Vendor and subcontractor threads: parts, site access, scheduling
- Insurance, certificates, billing, and credential reminders
- Portal notices from the customer’s system
- Bid and solicitation mail that looks urgent and is not a decision yet
- A thin slice of mail from contracting staff, property managers, and site contacts that needs a reply

A filter that only catches newsletters leaves that pile alone. The agent has to know which building, which contract, and which person is live this month. That is what the knowledge base is for.

## How to set it up

### 1. Open the harness and name the job

Download Grok Bot from [x.ai/bot](https://x.ai/bot) and create a bot for this one job. Name it for the work, not for the company slogan. “Email Cleaner” is enough.

The bot will ask questions as if it already knows the project. Answer them from the operation: this is a facilities maintenance company, the mailbox is the one dispatch and project managers actually read, and the outcome is an inbox of 20 threads or fewer.

### 2. Connect Gmail through MCP

Open Connect Apps and connect the Gmail MCP server.

MCP is the open standard for plugging an outside system into the agent. It has three roles:

- **Host.** The app you are using. Grok Bot in this build. Cursor, Claude, or ChatGPT can be the host in another build.
- **Server.** The small program that speaks one system. A Gmail server, a Slack server, a database server.
- **Model.** The part that decides which tool to call. The host asks the server what it can do, calls the tool, and brings the result back.

The host asks the server for a tool list. For Gmail, that list is search, read, and write. On the technical side those show up as calls such as `search_threads` and `get_message`. Connecting the server does not give the agent permission to speak for the company. The skill below refuses that.

### 3. Feed it the knowledge base

After Gmail is connected, give the agent a markdown file named for what it is: `knowledgebase.md`. Some teams call the same idea `AGENTS.md` or `CLAUDE.md`. It is a written picture of the company right now.

For this facilities company, that file names:

- Active government facilities and the contracts on them
- Who the contracting officer, property manager, and site contact are for each
- Vendors and subs the company actually uses
- Which domains are theirs, which are the customer’s, and which are insurers or portals
- What “needs a human today” means in their words

This is context. A new hire cannot run your calendar if you never say where you are in the week. An agent cannot file a work order against the right building if you never say which buildings are live. Pattern recognition without that file will sort by subject-line vibes, and it will bury a contract email that looks like every other thread.

### 4. Give it the job in one prompt

Paste this, then press Enter. Change the examples in parentheses to the company’s real sites, contracts, and domains.

> My goal is to begin by reading this knowledgebase.md file, then build a repeatable skill that understands my inbox, labels, and projects.
>
> I want to be able to invoke this skill to organize my inbox, keeping it to a maximum of 20 items. The skill should:
>
> - Understand my inbox structure, existing labels, and ongoing projects.
> - Organize and prioritize emails based on their relevance, context, and importance.
> - Apply the appropriate labels and organize messages accordingly.
> - Keep my inbox to a maximum of 20 items.
> - Return a clear, well-formatted summary of everything it did, including what was organized, labeled, moved, or otherwise changed.
>
> Important constraints:
>
> - Never write, draft, or send emails.
> - The skill’s sole purpose is to organize and manage my inbox, not communicate on my behalf.
>
> Context for this company: we are a facilities maintenance and management company. Live work includes government facilities, open work orders, vendor and subcontractor coordination, insurance and credentials, and portal notices. Mail from a contracting officer, property manager, or site contact on an active job stays. Confirmations, CCs, receipts, and blasts get labeled and archived.

The agent will narrate while it works. When it finishes, the inbox should show the threads that still need a person. Everything else should be labeled and out of the inbox, still searchable.

### 5. Turn the result into a skill and schedule it

Ask it to save that job as a skill, then run the skill on a schedule in the cloud harness. You should not have to re-explain the company every morning.

A skill is a folder of instructions for one kind of task. It holds a name, a description of when to use it, and the steps.

**Name:** Inbox Organizer (Max 20)

**Description:** Use this when asked to organize, triage, or clean a Gmail inbox down to 20 items or fewer. It labels and archives mail by project and priority. It never drafts, sends, forwards, or replies.

**Steps:**

1. **Load context.** Read the knowledge base for current facilities, contracts, key contacts, and domains (the company’s own domain, the government customer’s domain, insurers, and portals). Confirm which Gmail account is being cleaned.
2. **Map the structure.** Pull the existing labels. Reuse a label that already fits a building, contract, or vendor. Create a new label only when no existing label fits a clear project.
3. **Read the inbox.** List every inbox thread with sender, subject, date, unread status, and a short preview.
4. **Classify each thread.**
   - **Keep, action needed.** A key contact or an active facility, and someone on the team owes a reply, a decision, or a deadline. Contracting-officer mail, a down system, a lapsed certificate.
   - **Keep, recent and important.** A live project thread from the last few days.
   - **File.** Project mail that is informational: FYIs, CCs, scheduling confirmations. Label it and archive it.
   - **Reference.** Receipts, billing, insurance, credentials, and portal notices. Label and archive.
   - **Low value.** Newsletters, promos, and automated alerts that are not about an open building. Label and archive.
5. **Apply labels first.** Every thread gets its project or category label before it moves, so nothing is lost.
6. **Enforce the cap.** Archive everything that is not in a Keep bucket. If more than 20 threads remain, rank them by deadline, sender, and recency, and file the lowest until 20 or fewer remain.
7. **Safety.** Archive only. Never delete or trash. Starred mail stays. Anything from the last 24 hours that names a deadline stays. Never draft, send, reply, forward, or unsubscribe.
8. **Report.** Return the inbox count before and after, the threads kept and why, a table of what was labeled and archived, any new labels, and anything the agent was unsure about.

That is the whole product. A facilities lead can read the report in a minute and pull any thread back, because it was labeled, not deleted.

## What stays, what gets filed

| Mail | What the agent does | Why |
| --- | --- | --- |
| Contracting officer, property manager, or site contact on a live facility | Stays in the inbox | A person owes a decision or a reply |
| Open work order with a deadline | Stays if it is unresolved | The building is the work |
| Vendor thread that is only a confirmation or a CC | Label by vendor or site, then archive | The team can find it; it does not need a morning |
| Insurance, COI, billing, credential, portal notice | Label as reference, then archive | It is a record, unless the notice says something lapsed |
| Bid mail that has not been screened | Label it, keep it out of the action pile | Unscreened solicitation mail is not a recommendation to bid |
| Newsletter, promo, automated alert | Label as low value, then archive | It is not a facility |

## Three ways a facilities desk handles the same inbox

| | Shared inbox, no system | Filters only | Triage agent with a knowledge base |
| --- | --- | --- | --- |
| Knows which facilities are live | Only if a person remembers | No | Yes, from the knowledge base |
| Reuses labels you already have | Occasionally | Rarely | Yes, before it creates a new one |
| Inbox cap | None | None | 20 threads |
| Sends or replies | Whoever is brave enough | No | Never |
| Record of what moved | No | No | A summary every run |
| Government and vendor mail | Mixes the CO with the CC | Catches blasts, misses work orders | Filed by project and priority |

Filters are the right tool for a sender you never want to see. They are the wrong tool for a work order that is routine on Tuesday and a stop-work on Wednesday. The agent reads the knowledge base, then the thread.

## What this is not

This skill does not write to a contracting officer, a tenant, or a vendor. It does not “clean up” by deleting. Archive removes the inbox label and leaves the thread in All Mail under the label you applied.

If a thread could be a live contract and the agent is unsure, it stays in the inbox and shows up in the report as unsure. A crowded inbox is a nuisance. A buried government email is a loss.

The same shape of skill can be pointed at another channel later. This build is Gmail, because that is where this company’s record of the work already lives.

## Frequently asked questions

### How do you set up email triage for a facilities maintenance company?

Write a knowledge base of the live facilities, contracts, and contacts, connect Gmail to the agent through MCP, and install one skill that labels every thread and archives until the inbox has 20 items or fewer. Run that skill on a schedule. The skill never drafts or sends.

### Will the agent reply to a contracting officer or a site contact?

No. The skill is allowed to search, read, label, and archive. Drafting, replying, forwarding, and sending are out of bounds. A person still writes the mail that leaves the company.

### What is MCP in an email triage setup?

MCP is the connection between the agent app and Gmail. The app asks the Gmail server which tools exist, then calls search and read. The model decides when to call them. The skill decides what those calls are allowed to change.

### What should a facilities company put in the knowledge base?

The buildings and contracts that are active, the people who speak for each (contracting staff, property managers, site contacts), the vendors the company actually uses, and the domains for the company, the customer, insurers, and portals. Update it when a facility opens or closes. A stale file files mail against work you finished.

### What earns a spot in the inbox?

A thread stays when a person owes a reply or a decision, when a deadline is inside the last day, or when the sender is a key contact on a live facility. Everything else is labeled and archived. Starred mail stays.

### How is this different from Gmail filters?

Filters match a sender or a word and move mail whether the building is live or not. The triage skill reads the knowledge base first, reuses your labels, and writes a report of what it kept. Use filters for senders you never want. Use the skill for operational mail.

### Can this run every morning without someone in the chat?

Yes. Save the job as a skill and schedule it in the cloud harness. The morning output is the summary: count before and after, what stayed, what was filed, and what the agent was unsure about. Read that before you trust an unattended run.

### Does the agent delete mail?

No. It archives. Archived mail stays searchable in All Mail under its label. If a work order was filed by mistake, the report names the label and you pull it back.
