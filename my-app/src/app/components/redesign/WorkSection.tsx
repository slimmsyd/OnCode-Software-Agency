"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Project {
  key: string;
  media: string;
  title: string;
  description: string;
  categories: string[];
}

// Client builds first: operational systems our clients run their business on.
const CLIENT_BUILDS: Project[] = [
  {
    key: "mcbride",
    media: "/redesign/projects/mcbride.png",
    title: "McBride Basketball Academy",
    description:
      "Booking platform with Stripe payments, Google Calendar sync, and an admin dashboard for session management.",
    categories: ["Web Apps"],
  },
  {
    key: "hrr-foundation",
    media: "/redesign/projects/hrr-foundation.png",
    title: "HRR Foundation",
    description:
      "Brand site for a healthcare-access foundation: prevention, early intervention, mentorship, and community-based care programs, built on a warm editorial design system.",
    categories: ["Web Apps"],
  },
  {
    key: "tint-labs",
    media: "/redesign/projects/tintlabs.jpeg",
    title: "Tint Labs",
    description:
      "Website, booking, and lead capture for a car-tinting business. The build behind the case study below.",
    categories: ["Web Apps"],
  },
  {
    key: "prmnt-pro",
    media: "/redesign/projects/preeminent.jpeg",
    title: "Preeminent Professional Services",
    description:
      "Website designed, developed, and maintained for facility management services.",
    categories: ["Web Apps"],
  },
  {
    key: "boxraw",
    media: "/redesign/projects/boxraw.jpeg",
    title: "BoxRaw Labs",
    description:
      "Video labeling platform for boxing analysis with multi-camera sync, team workflows, and automated clip export.",
    categories: ["Web Apps"],
  },
  {
    key: "gliddy",
    media: "/redesign/projects/gliddy.jpeg",
    title: "Gliddy",
    description:
      "End-to-end event management platform built specifically for bartenders.",
    categories: ["Web Apps"],
  },
  {
    key: "sj-wellness",
    media: "/redesign/projects/sj-wellness.jpeg",
    title: "SJ Wellness",
    description: "Website designed and developed for a wellness center.",
    categories: ["Web Apps"],
  },
  // Add Screw It Pro here once it is live.
];

const WEB3_BUILDS: Project[] = [
  {
    key: "creatures",
    media: "/redesign/projects/creature-cube.jpeg",
    title: "Creatures Cube",
    description:
      "Web3 NFT collection platform with seamless minting and trading capabilities.",
    categories: ["Web3"],
  },
  {
    key: "barcode",
    media: "/redesign/projects/barcode.png",
    title: "Barcode",
    description: "Web3-powered membership and community platform.",
    categories: ["Web3"],
  },
  {
    key: "blackw3b",
    media: "/redesign/projects/blackw3b.png",
    title: "BlackW3B",
    description: "Decentralized web3 platform for goldback tokens.",
    categories: ["Web3"],
  },
];

function ProjectTile({ project }: { project: Project }) {
  return (
    <div className="group relative h-[600px] overflow-hidden border-r border-white/10">
      <Image
        src={project.media}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-10 text-white">
        <span className="mb-4 self-start rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-white/70 backdrop-blur-sm">
          {project.categories[0]}
        </span>
        <h3 className="mb-4 text-[30px] font-light leading-[1.15] text-white">
          {project.title}
        </h3>
        <p className="mb-8 max-w-[420px] text-[16px] font-light leading-[1.5] text-white/90">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] text-white transition-all duration-300 group-hover:gap-3">
          View Project <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [tab, setTab] = useState<"Client Builds" | "Web3">("Client Builds");
  const tabs: Array<"Client Builds" | "Web3"> = ["Client Builds", "Web3"];
  const projects = tab === "Web3" ? WEB3_BUILDS : CLIENT_BUILDS;

  return (
    <section
      id="work"
      data-screen-label="Selected Work"
      className="my-28 overflow-hidden border-b border-black/5 bg-white"
    >
      <div className="mb-16 px-6 text-center">
        <h2 className="display-heading mb-6">Selected Work</h2>
        <p className="mx-auto mb-8 max-w-[640px] text-[20px] font-light text-[#6b7280]">
          Operational systems first: the platforms our clients run their
          businesses on.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-[22px] py-2 text-[13px] font-medium transition-all duration-300 ${
                tab === t
                  ? "bg-black text-white"
                  : "bg-[#f3f4f6] text-[#4b5563]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
        }}
      >
        {projects.map((p) => (
          <ProjectTile key={p.key} project={p} />
        ))}
      </div>
    </section>
  );
}
