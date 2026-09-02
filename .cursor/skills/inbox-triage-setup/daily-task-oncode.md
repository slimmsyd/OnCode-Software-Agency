# Daily inbox task — oncodesoftware@gmail.com

Standing playbook for OnCode Software (`oncodesoftware@gmail.com`) in repo OnCode-Software-Agency. Filled from `references/daily-task-template.md`.

## Identity

- **Mailbox:** oncodesoftware@gmail.com
- **Owner:** Oncode Software (Sydney)
- **Repo:** OnCode-Software-Agency
- **Gmail MCP namespace (preferred):** `plugin-gmail-gmail`
- **Gmail MCP namespace (cloud alias):** `Gmail`

## Auth gate (do this first)

Call `GetDynamicTools` on `plugin-gmail-gmail`. If that namespace is missing, inspect `Gmail`.

If `namespaceStatus` is `needsAuth` or any Gmail tool fails with an auth error:

1. Stop the Gmail sweep immediately.
2. Do not invent archives, drafts, or inbox counts.
3. If this file is missing, write it from `references/daily-task-template.md` filled for this mailbox, then stop.
4. Report exactly: `Gmail MCP unavailable in cloud (needs desktop OAuth).`

Do not use IMAP, the Gmail web UI, or any other path.

## Hard rules

- **ARCHIVE ONLY.** Never delete. Never send.
- Archive means `unlabel_thread` with `INBOX` only. The thread keeps its user labels and remains in All Mail.
- Never add or remove labels other than the filing label plus `INBOX`.
- Max **10** parallel mutating Gmail calls (`label_thread`, `unlabel_thread`, `create_draft`). Wait **60s** on exhaustion / unavailable, then retry that call.
- When torn: leave the thread in the inbox and list it.
- Skip thread IDs that are already archived.

## Label map

| Label | ID | Archive after label? |
|---|---|---|
| Newsletters | Label_11 | Yes |
| Social | Label_12 | Yes |
| Marketing | Label_13 | Yes |
| Infra | Label_14 | Yes, except security alerts younger than 7 days |
| SelfMail | Label_15 | Yes |
| Prospects | Label_16 | Keep if unreplied outbound / active pursuit |
| Action Required | Label_17 | Yes — already-filed Action Required should not sit in INBOX. If still INBOX, archive it. |
| Events | Label_18 | Yes |
| Finances | Label_3374896186328044135 | Yes, unless failed / overdue payment → Label_17 then archive |
| Cold Outreach | Label_2867290676796261544 | Yes — itemize every archive in the report |
| Clients/Obsidian | Label_2 | **Never archive** (active) |
| Clients/Tekmetric | Label_3 | **Never archive** (active) |
| Clients/FirstCallUrology | Label_4 | Keep if unreplied human; otherwise may stay labeled in inbox unless already handled |
| Clients/TintLabs | Label_5 | Same keep-if-unreplied |
| Clients/Serenity | Label_6 | Keep if unreplied |
| Clients/StreetEconomics | Label_7 | Keep if unreplied |
| Clients/NewWorld | Label_8 | Keep if unreplied |
| Clients/Preeminent | Label_9 | Keep if unreplied |
| Clients/KYEngineering | Label_10 | Keep if unreplied |
| Clients/SJ | Label_7075342729346787859 | Keep if unreplied |
| Clients/Barcode | Label_7579210000421630137 | Keep if unreplied |

## Keep rule

Stay in the inbox if:

- A human wrote directly and they have not been replied to, **or**
- The thread is an active deal / money / legal matter.

Also keep (do not archive):

- All `Clients/*` labeled threads, Prospects, Serenity unreplied, First Call unreplied, Boxraw, Leigh Anne
- Manus data deletion: `1a03df94844a2101` `1a023f6fd183312e` `1a0057e7b0116d39` `19ff253ae1844c1d` `19c33487274ce5de`
- Valor: `19f663ce63942044`
- Grounded: `19f339dd10c35321` `19f3396fad06ae4e`
- Docusign: `19f04a924bb5367c`
- Zoom meeting assets: `19cb4ff0cdf24094`
- Starred Cursor: `19a311f8425d94da`
- Colosseum: `19d743e11ffd5e4f` `19ffb55575e38d8f` `19e7298a141ddb04` `19e107e53c76b675` `19d555610602119f`
- vibeconsultant: `19d876f1886c8e01` `19d746bf2e059570` `19d73dc352d62fb7`
- D-VYNE: `19f8ade89837ad93`
- PrimeTime: `19d7327567619a50`
- NotebookLM: `19df46e9333f6a01`
- Notion PPS: `19fa497a990b4cf0` `19f8ffe0e2cf82f4` `19f85b1602b5dba1` `19f808aedbcc4dbf` `19da1aa885b273b4`
- cafe follow-up: `19f3e6758c4e9eba`
- cal.com meetings: `19eaca006133f598` `19d8468d2121db12` `19d73417ef8343a7`
- DSN Lani: `19e566193b9b9827`
- obsidian.md sync: `19e2d1ff081fd2d2` (torn — KEEP)
- PandaDoc: `19d4201fb55876ad`
- ScrewIt: `19ff26ba45079913` `19ff258e4deb5375` `19fb4771b4b42b7a` `19fb40a3d18debdd` `19f8047b57961710`
- Dropbox file transfers listed in prior keep (Toodie) — KEEP

## Never archive if these labels are already present

`Label_2`, `Label_3`, `Label_4`, `Label_5`, `Label_6`, `Label_7`, `Label_8`, `Label_9`, `Label_10`, `Label_16`, `Label_17` (Label_17 should already be archived; if still INBOX, archive it), `Label_7075342729346787859` keep if unreplied, `Label_7579210000421630137` keep if unreplied.

## Allowlist (never auto-archive without reading)

oncodesoftware@gmail.com, ssanderss444@gmail.com, blckw3b@gmail.com, jroberts33325@gmail.com, bigrobstunner@gmail.com, robertldunn79@gmail.com, gary@alpinegoldexchange.com, alpinegoldexchange.com, support@w3bs.fun, w3bs.fun, mswintergiovanni@gmail.com, serenityhelpinghands2026@gmail.com, jerome@firstcallurology.com, contact@firstcallurology.com, firstcallurology.com, tintlabsales@gmail.com, streetecon@proton.me, eugenekinard@gmail.com, barcodedao@gmail.com, apoloniathomas0502@gmail.com, inquiries@prmntpro.com, prmntpro.com, consultation@prolificquality.org, prolificquality.org, raclan@kyengllc.com, jlagda@kyengllc.com, kyengllc.com, awright@tekmetric.com, tekmetric.com, RDunn@poweredbyevolv.com, poweredbyevolv.com, dallion@lionspaw.ai, care@screwitpro.com, screwitpro.com, leighanne.vandoren@gmail.com, boxraw.com

## Daily sequence

1. File leftover unlabeled vendor / updates mail. Skip IDs that are already archived.
2. Paginate `in:inbox category:updates has:nouserlabels` to exhaustion. File only when confident.
3. Paginate `in:inbox has:nouserlabels` to exhaustion. File only when confident.
4. Inspect n8n / Stripe / other billing. Payment failed / unsuccessful / suspended / overdue / past due → `Label_17` then archive. Otherwise vendor marketing → `Label_13` then archive; Stripe/GoDaddy/Supabase receipts → Finances then archive.
5. Itemize every Cold Outreach archive (sender + subject + thread id).
6. After the inbox is as clean as the keep rule allows, create **one** digest draft. Never send.

## Vendor filing heuristics

- **n8n magic sign-in** → Infra (`Label_14`) or Marketing (`Label_13`). Prefer Infra if it is an account/security login; Marketing if it is product promo.
- **n8n security** → Infra (`Label_14`). Keep in inbox if the alert is younger than 7 days.
- **n8n billing / payment-failed** → Action Required (`Label_17`) then archive.
- **ideabrowser** → Newsletters (`Label_11`) then archive.
- **Alchemy, Granola, Descript (product), Kaggle, pdfFiller, Apify, DocSend, Gamma, Figma, pencil.dev, Excalidraw** → Marketing (`Label_13`) then archive.
- **Descript events** → Events (`Label_18`) then archive.
- **Cal changelog** → Marketing (`Label_13`) unless it is a real meeting (then KEEP).
- **TikTok / YouTube** → Social (`Label_12`) then archive.
- **from:oncodesoftware@gmail.com** self-sent notes → SelfMail (`Label_15`) then archive.
- Unsolicited pitch from an unknown domain not on the allowlist → Cold Outreach then archive. Itemize it.

## Digest draft (create_draft, never send)

Create exactly one draft per daily run.

- **To:** oncodesoftware@gmail.com
- **Subject:** `OnCode daily inbox digest — YYYY-MM-DD`
- **Body (plain text):**

```
OnCode daily inbox digest — YYYY-MM-DD

ACTION REQUIRED
- {sender} | {subject} | {threadId} | {why}

AWAITING YOUR REPLY
- {sender} | {subject} | {threadId}

MONEY / LEGAL / ACTIVE DEALS
- {sender} | {subject} | {threadId} | {status}

KEPT IN INBOX (torn or keep-rule)
- {sender} | {subject} | {threadId} | {reason}

FILED TODAY
- {label}: {count}

COLD OUTREACH ARCHIVED
- {sender} | {subject} | {threadId}

INBOX AFTER TRIAGE
- threads: {n}
- messages: {n}

NOTES
- {leftovers, quota retries, auth issues}
```

If Gmail is unavailable, do not invent a draft id.

## Report back

Return:

1. Archived counts by label
2. Inbox threads / messages remaining
3. KEEP list
4. Cold outreach itemized
5. Draft id if created
6. Whether Gmail worked
7. Any leftover
