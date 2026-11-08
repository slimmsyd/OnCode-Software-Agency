import { WORK_PROJECTS } from "@/app/work/projects";

/** Product name, not a company the team worked with. */
const EXCLUDED = new Set(["POS Web Extension"]);

const CLIENTS = [
  ...WORK_PROJECTS.map((project) => project.title).filter(
    (title) => !EXCLUDED.has(title)
  ),
  "Constellation Energy",
];

interface ClientMarqueeProps {
  className?: string;
}

export function ClientMarquee({ className = "" }: ClientMarqueeProps) {
  return (
    <div className={className}>
      <div className="relative left-1/2 flex h-14 w-screen -translate-x-1/2 items-center border-y border-black/10 bg-white">
        <p className="shrink-0 pl-5 pr-6 text-[11px] font-medium uppercase tracking-[0.14em] text-black/45 sm:pl-8 sm:pr-8 sm:text-[12px] sm:tracking-[0.16em]">
          OnCode and the team has worked with
        </p>
        <ul className="sr-only">
          {CLIENTS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <div
          className="relative min-w-0 flex-1 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)",
          }}
          aria-hidden
        >
          <div className="oc-marquee-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className={`flex items-center ${copy === 1 ? "oc-marquee-clone" : ""}`}
              >
                {CLIENTS.map((name) => (
                  <span
                    key={`${copy}-${name}`}
                    className="px-5 text-[15px] font-normal text-black/75"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
