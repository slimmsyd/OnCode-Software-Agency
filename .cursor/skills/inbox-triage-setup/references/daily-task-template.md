# Daily inbox task — {{MAILBOX}}

Copy this file to `daily-task-{{SLUG}}.md` in the skill root and fill every `{{PLACEHOLDER}}`. Do not leave placeholders. This is the standing playbook for daily triage plus one digest draft.

## Identity

- **Mailbox:** {{MAILBOX}}
- **Owner:** {{OWNER_NAME}}
- **Repo:** {{REPO}}
- **Gmail MCP namespace (preferred):** `plugin-gmail-gmail`
- **Gmail MCP namespace (cloud alias):** `Gmail`

## Auth gate (do this first)

Call `GetDynamicTools` on `plugin-gmail-gmail`. If that namespace is missing, inspect `Gmail`.

If `namespaceStatus` is `needsAuth` or any Gmail tool fails with an auth error:

1. Stop the Gmail sweep immediately.
2. Do not invent archives, drafts, or inbox counts.
3. If this filled daily-task file is missing, write it from this template, then stop.
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

Fill with this mailbox's label IDs:

| Label | ID | Archive after label? |
|---|---|---|
| Newsletters | {{LABEL_NEWSLETTERS}} | Yes |
| Social | {{LABEL_SOCIAL}} | Yes |
| Marketing | {{LABEL_MARKETING}} | Yes |
| Infra | {{LABEL_INFRA}} | Yes, except security alerts younger than 7 days |
| SelfMail | {{LABEL_SELFMAIL}} | Yes |
| Prospects | {{LABEL_PROSPECTS}} | Keep if unreplied outbound / active pursuit |
| Action Required | {{LABEL_ACTION_REQUIRED}} | Yes — already-filed Action Required should not sit in INBOX. If still INBOX, archive it. |
| Events | {{LABEL_EVENTS}} | Yes |
| Finances | {{LABEL_FINANCES}} | Yes, unless failed / overdue payment → Action Required then archive |
| Cold Outreach | {{LABEL_COLD_OUTREACH}} | Yes — itemize every archive in the report |
{{LABEL_CLIENT_ROWS}}

## Keep rule

Stay in the inbox if:

- A human wrote directly and they have not been replied to, **or**
- The thread is an active deal / money / legal matter.

Also keep:

- Threads that already have a never-archive label (see below).
- Allowlisted people who are awaiting a reply.
- {{KEEP_EXTRAS}}

## Never archive if these labels are already present

{{NEVER_ARCHIVE_LABELS}}

Exception: `{{LABEL_ACTION_REQUIRED}}` should already be archived. If it is still in INBOX, archive it (unlabel `INBOX` only).

## Allowlist (never auto-archive without reading)

{{ALLOWLIST}}

## Daily sequence

1. File leftover unlabeled vendor / updates mail you already identified. Skip IDs that are already archived.
2. Paginate `in:inbox category:updates has:nouserlabels` to exhaustion. File only when confident.
3. Paginate `in:inbox has:nouserlabels` to exhaustion. File only when confident.
4. Inspect billing / payment-failed threads. Failed payment → Action Required, then archive.
5. Itemize every Cold Outreach archive (sender + subject + thread id).
6. After the inbox is as clean as the keep rule allows, create **one** digest draft. Never send.

## Vendor filing heuristics

{{VENDOR_HEURISTICS}}

## Digest draft (JOB: create_draft, never send)

Create exactly one draft per daily run with `create_draft`.

- **To:** {{MAILBOX}}
- **Subject:** `{{DIGEST_SUBJECT_PREFIX}} — {{DATE}}`
- **Body (plain text):**

```
{{DIGEST_SUBJECT_PREFIX}} — {{DATE}}

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
