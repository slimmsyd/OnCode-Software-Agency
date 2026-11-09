# oncode-ga-reporter

Local Python tool used to deliver analytics reports to Oncode clients. For each client it pulls GA4 data, builds a branded one-page PDF, saves a reviewable email markdown file, and creates a Gmail draft with the PDF attached. **It never auto-sends** - every client gets a draft.

- **Location:** `~/Desktop/Code_Projects/oncode-ga-reporter` (working install; not in git yet)
- **Main script:** `oncode_ga_report.py`
- **Run:** `python3 oncode_ga_report.py` - drafts for every client that has a real email

## Style rule (client-facing copy)

**No em dashes.** All client-facing text (email subject/body, PDF insights, `_email.md` files) must use commas, colons, periods, or hyphens instead of `—` or `–`. The script enforces this via `client_text()` and updated insight templates.

## Pipeline (top to bottom)

1. **Auth** (`get_credentials`) - OAuth as oncodesoftware@gmail.com, cached in `token.json`. Scopes: `analytics.readonly` + `gmail.compose`. Compose can create drafts but **cannot read or send** mail.
2. **Fetch GA4** - per client: totals + engagement (time on site, bounce rate, scroll depth), traffic channels, top pages, visitor events/actions, form funnel, devices, month-by-month trend.
3. **Insights** (`generate_insights`) - auto-writes up to 6 plain-English takeaways (no em dashes).
4. **PDF** (`build_pdf`) - metric table + monthly bar chart + channel pie + "What visitors did" + "What this means" narrative.
5. **Storage** (`save_report`) - saves `reports/<slug>/<slug>_<date>_<period>d.pdf` + `.json`, appends to `reports/index.json`.
6. **Email markdown** (`save_email_md`) - saves `<slug>_<date>_<period>d_email.md` next to the PDF for review.
7. **Gmail draft** (`create_draft`) - standard template; From/Reply-To hard-set to oncodesoftware@gmail.com.

## Config knobs (top of `oncode_ga_report.py`)

- **`CLIENTS`** - 8 GA4 properties. Clients with `NEEDS_EMAIL` are skipped at runtime.
- **`PERIOD_DAYS = 60`** - change to 90/180 and the whole pipeline follows (PDF + email subject + body).
- **`EMAIL_SUBJECT` / `EMAIL_BODY`** - one standard template; `{curly}` fields auto-fill per client.

## Clients with email (as of 2026-06-30)

| Client | Email |
|--------|-------|
| S&J Health and Wellness | Eugenekinard@gmail.com |
| Preeminent Professional Services | inquiries@prmntpro.com |
| New World Television | consultation@prolificquality.org |
| TintLabs | tintlabsales@gmail.com |
| Street Economics | streetecon@proton.me |
| OncodeSoftware | oncodesoftware@gmail.com |

**Still missing email:** GoldbacksWeb, WePray2Flourish

## Output layout

```
reports/
  index.json
  <client-slug>/
    <slug>_<date>_60d.pdf
    <slug>_<date>_60d.json
    <slug>_<date>_60d_email.md
```

## Open items

- Fill in emails for GoldbacksWeb and WePray2Flourish.
- Optional: add `"contact": "FirstName"` per client for personalized greetings.

_Last updated: 2026-06-30_