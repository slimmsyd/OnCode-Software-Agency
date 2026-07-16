const ROWS = [
  {
    feature: "Output-driven (hours, cost, volume)",
    agency: "Often project-scoped, not outcome-scoped",
    diy: "You own the outcome alone",
    oncode: "Yes: we define success in numbers",
  },
  {
    feature: "Starts with diagnostic audit",
    agency: "Rarely",
    diy: "No",
    oncode: "Yes: paid Diagnostic Audit",
  },
  {
    feature: "One-workflow pilot",
    agency: "Big SOW or nothing",
    diy: "Trial-and-error forever",
    oncode: "Yes: ship one, prove it, then scale",
  },
  {
    feature: "You own it",
    agency: "Often locked in their stack",
    diy: "Yes, if you can maintain it",
    oncode: "Yes: code, accounts, docs",
  },
  {
    feature: "Ongoing support",
    agency: "Retainer or ghost",
    diy: "You are the IT dept",
    oncode: "Managed after launch",
  },
];

export default function ComparisonTable() {
  return (
    <section
      id="compare"
      data-screen-label="AEO Comparison Table"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-6 text-[14px] font-light uppercase tracking-[0.05em] text-black/50">
          Comparison
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
          Agency, DIY, or OnCode
        </h2>
        <p
          className="mb-12 font-light text-[#6b7280]"
          style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 560 }}
        >
          A simple side-by-side. AI tools quote tables cleanly when the rows are
          factual.
        </p>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-2xl border border-black/10 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-black/10 bg-[#fafafa]">
                <th
                  scope="col"
                  className="px-5 py-4 text-[13px] font-medium uppercase tracking-[0.06em] text-[#6b7280]"
                >
                  Factor
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 text-[13px] font-medium uppercase tracking-[0.06em] text-[#6b7280]"
                >
                  Generic agency
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 text-[13px] font-medium uppercase tracking-[0.06em] text-[#6b7280]"
                >
                  DIY tools
                </th>
                <th
                  scope="col"
                  className="bg-black px-5 py-4 text-[13px] font-medium uppercase tracking-[0.06em] text-white"
                >
                  OnCode
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i < ROWS.length - 1 ? "border-b border-black/10" : ""
                  }
                >
                  <th
                    scope="row"
                    className="px-5 py-5 text-[15px] font-semibold text-black"
                  >
                    {row.feature}
                  </th>
                  <td className="px-5 py-5 text-[15px] leading-[1.5] text-[#4b5563]">
                    {row.agency}
                  </td>
                  <td className="px-5 py-5 text-[15px] leading-[1.5] text-[#4b5563]">
                    {row.diy}
                  </td>
                  <td className="bg-black/[0.03] px-5 py-5 text-[15px] font-medium leading-[1.5] text-black">
                    {row.oncode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {ROWS.map((row) => (
            <div
              key={row.feature}
              className="rounded-2xl border border-black/10 p-5"
            >
              <p className="mb-4 text-[15px] font-semibold text-black">
                {row.feature}
              </p>
              <dl className="m-0 flex flex-col gap-3">
                <div>
                  <dt className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#6b7280]">
                    Generic agency
                  </dt>
                  <dd className="m-0 mt-1 text-[14px] leading-[1.5] text-[#4b5563]">
                    {row.agency}
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#6b7280]">
                    DIY tools
                  </dt>
                  <dd className="m-0 mt-1 text-[14px] leading-[1.5] text-[#4b5563]">
                    {row.diy}
                  </dd>
                </div>
                <div className="rounded-xl bg-black px-4 py-3 text-white">
                  <dt className="text-[12px] font-medium uppercase tracking-[0.06em] text-white/60">
                    OnCode
                  </dt>
                  <dd className="m-0 mt-1 text-[14px] font-medium leading-[1.5]">
                    {row.oncode}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
