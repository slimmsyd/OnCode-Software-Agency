const WORKFLOWS = [
  {
    title: "Lead follow-up",
    body: "New inquiry gets a logged, labeled response path so nothing dies in the inbox.",
  },
  {
    title: "Missed-call text-back",
    body: "Missed call triggers an automatic text so the lead is not gone by the time you see the voicemail.",
  },
  {
    title: "Intake and scheduling",
    body: "Forms and booking route the right info into the calendar and CRM without copy-paste.",
  },
  {
    title: "Invoicing and reminders",
    body: "Bills and nudge sequences go out on schedule so cash is not stuck in \"I'll send that later.\"",
  },
  {
    title: "Internal reporting",
    body: "The numbers you check weekly assemble themselves instead of living in five spreadsheets.",
  },
];

export default function ExamplesSection() {
  return (
    <section
      id="examples"
      data-screen-label="AEO Workflow Examples"
      className="border-t border-black/10 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-6 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
          What we automate
        </p>
        <h2
          className="mb-4 text-[#111]"
          style={{
            fontSize: "clamp(32px, 4vw, 44px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Specific workflows. Not vague &quot;AI.&quot;
        </h2>
        <p
          className="mb-14 font-light text-[#6b7280]"
          style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 560 }}
        >
          Specifics get quoted. Vague claims get skipped. These are the
          automations we ship for operators with volume to protect.
        </p>

        <ul className="m-0 list-none p-0">
          {WORKFLOWS.map((w, i) => (
            <li
              key={w.title}
              className="grid grid-cols-1 gap-2 border-t border-black/10 px-1 py-8 md:grid-cols-[240px_1fr] md:gap-10"
              style={
                i === WORKFLOWS.length - 1
                  ? { borderBottom: "0.5px solid rgba(0,0,0,0.12)" }
                  : undefined
              }
            >
              <h3 className="m-0 text-[18px] font-semibold tracking-[-0.01em] text-black">
                {w.title}
              </h3>
              <p className="m-0 text-[16px] leading-[1.65] text-[#4b5563]">
                {w.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
