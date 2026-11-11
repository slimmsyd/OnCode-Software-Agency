"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import {
  NEWSLETTER_DESIGN_LIST,
  getNewsletterDesign,
} from "@/app/components/newsletter/designs";
import NewsletterModal from "@/app/components/newsletter/NewsletterModal";
import NewsletterFooterForm from "@/app/components/newsletter/NewsletterFooterForm";
import type { NewsletterDesignId } from "@/lib/newsletter";

type Device = "desktop" | "mobile";

const LETTERS = ["A", "B", "C", "D"];

const TRIGGER_NOTES = [
  ["Appears after", "15s on page, 55% scroll, or an exit-intent move"],
  ["Never during", "the first-visit intro film"],
  ["Asks once", "then stays quiet for 30 days, or forever after a signup"],
  ["Skips", "contact, onboarding, and this preview page"],
];

export default function NewsletterPreviewClient() {
  const [device, setDevice] = useState<Device>("desktop");
  const [modalDesign, setModalDesign] =
    useState<NewsletterDesignId | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const activeModal = modalDesign ? getNewsletterDesign(modalDesign) : null;
  const ModalDialog = activeModal?.Dialog;

  const frameWidth =
    device === "mobile"
      ? "mx-auto w-full max-w-[390px]"
      : "mx-auto w-full max-w-[980px]";

  return (
    <div className="min-h-screen bg-[#edeef0] pb-24 text-[#111]">
      <header className="border-b border-black/10 bg-[#0a0a0a] px-4 py-4 text-white sm:px-6">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/redesign/oncode-hero-wordmark.png"
              alt="OnCode"
              width={1024}
              height={193}
              className="h-5 w-auto object-contain [filter:invert(1)]"
            />
            <span className="h-4 w-px bg-white/20" aria-hidden />
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/60">
              Newsletter popup — two directions
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
          >
            Back to site
            <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-4 pt-10 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-[clamp(28px,4vw,40px)] font-light leading-none tracking-[-0.03em]">
              Pick a direction for the{" "}
              <span className="font-normal">newsletter</span>.
            </h1>
            <p className="mt-3 max-w-[52ch] text-[15px] font-light leading-relaxed text-[#4b5563]">
              Both are built, wired to the same API, and keyboard-accessible.
              Change one constant to ship either. The footer form ships
              alongside whichever you choose.
            </p>
          </div>

          <div
            role="group"
            aria-label="Preview width"
            className="inline-flex border border-black/15 bg-white"
          >
            {(
              [
                { id: "desktop", label: "Desktop", Icon: Monitor },
                { id: "mobile", label: "Mobile", Icon: Smartphone },
              ] as const
            ).map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setDevice(id)}
                aria-pressed={device === id}
                className={`inline-flex cursor-pointer items-center gap-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  device === id
                    ? "bg-[#0a0a0a] text-white"
                    : "text-black/50 hover:text-black"
                }`}
              >
                <Icon size={14} aria-hidden />
                {label}
              </button>
            ))}
          </div>
        </div>

        {notice && (
          <p
            role="status"
            className="mt-6 border border-black/10 bg-white px-4 py-3 text-[13px] font-light text-[#4b5563]"
          >
            {notice}
          </p>
        )}

        <div className="mt-10 space-y-12">
          {NEWSLETTER_DESIGN_LIST.map((meta, index) => {
            const Dialog = meta.Dialog;
            return (
              <section key={meta.id} aria-labelledby={`design-${meta.id}`}>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center bg-[#0a0a0a] text-[11px] font-semibold text-white">
                      {LETTERS[index] ?? index + 1}
                    </span>
                    <div>
                      <h2
                        id={`design-${meta.id}`}
                        className="text-[16px] font-medium tracking-[-0.01em]"
                      >
                        {meta.label}
                      </h2>
                      <p className="text-[13px] font-light text-[#6b7280]">
                        {meta.summary}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setNotice(null);
                      setModalDesign(meta.id);
                    }}
                    className="inline-flex cursor-pointer items-center gap-1.5 border border-black/15 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-black/[0.04]"
                  >
                    Open as modal
                    <ArrowUpRight size={13} aria-hidden />
                  </button>
                </div>

                <div className="border border-black/10 bg-white/60 p-3 sm:p-6">
                  <div className={frameWidth}>
                    <Dialog
                      onClose={() =>
                        setNotice(
                          `${meta.label}: close pressed. In production this dismisses the popup and starts the 30-day cooldown.`,
                        )
                      }
                      source={`preview-${meta.id}`}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-14" aria-labelledby="footer-form-heading">
          <div className="mb-4">
            <h2
              id="footer-form-heading"
              className="text-[16px] font-medium tracking-[-0.01em]"
            >
              Footer signup
            </h2>
            <p className="text-[13px] font-light text-[#6b7280]">
              Lives in the site footer under the tagline. Same submit path as
              the popup.
            </p>
          </div>
          <div className="border border-black/10 bg-white/60 p-3 sm:p-6">
            <div className="mx-auto w-full max-w-[460px] bg-white p-6">
              <NewsletterFooterForm source="preview-footer" />
            </div>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="trigger-heading">
          <h2
            id="trigger-heading"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45"
          >
            When it shows
          </h2>
          <dl className="mt-4 divide-y divide-black/10 border-y border-black/10 bg-white/60">
            {TRIGGER_NOTES.map(([label, detail]) => (
              <div
                key={label}
                className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <dt className="w-[130px] shrink-0 text-[12px] font-medium uppercase tracking-[0.12em] text-black/45">
                  {label}
                </dt>
                <dd className="text-[14px] font-light text-[#111]">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      {activeModal && ModalDialog && (
        <NewsletterModal
          isOpen
          onClose={() => setModalDesign(null)}
          labelledBy={activeModal.titleId}
        >
          <ModalDialog
            onClose={() => setModalDesign(null)}
            source={`preview-modal-${modalDesign}`}
          />
        </NewsletterModal>
      )}
    </div>
  );
}
