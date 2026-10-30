"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { bookAudit, scrollToId } from "./lib";
import { sharpButtonClass } from "./sharp-button";

const RESOURCE_LINKS = [
  {
    href: "/resources",
    label: "Resources",
    detail: "Tools and guides we packaged for operators.",
  },
  {
    href: "/ai-automation-local-business",
    label: "AI for local businesses",
    detail: "How an engagement runs for shops and offices in the DMV.",
  },
];

const NAV_ITEMS: {
  label: string;
  id: string;
  href?: string;
  children?: typeof RESOURCE_LINKS;
}[] = [
  { label: "Services", id: "services" },
  { label: "How we start", id: "audit" },
  { label: "Work", id: "work", href: "/work" },
  { label: "Resources", id: "resources", children: RESOURCE_LINKS },
  { label: "Process", id: "process" },
  { label: "Founder", id: "founder" },
];

interface HomeNavigationProps {
  /** Home hero uses transparent nav until scroll; inner pages use the compact bar immediately. */
  variant?: "home" | "inner";
}

export default function HomeNavigation({ variant = "home" }: HomeNavigationProps) {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(variant === "inner");
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === "inner") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!resourcesOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!resourcesRef.current?.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResourcesOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [resourcesOpen]);

  const showCompactBar = scrolled || variant === "inner";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex w-full items-center justify-between transition-all duration-300 ease-out ${
          showCompactBar
            ? "mt-3 h-16 max-w-[1200px] border border-black/10 bg-white px-6"
            : "mt-0 h-24 max-w-[1400px] bg-transparent px-6"
        }`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-6 lg:gap-7">
          {variant === "inner" && (
            <Link href="/" className="shrink-0" aria-label="OnCode home">
              <Image
                src="/redesign/oncode-hero-wordmark.png"
                alt="OnCode"
                width={120}
                height={33}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>
          )}

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((it) =>
              it.children ? (
                <div key={it.id} ref={resourcesRef} className="relative">
                  <div className="inline-flex items-center gap-0.5 px-1 py-2">
                    <Link
                      href="/resources"
                      className="text-[15px] font-medium text-[#4b5563] transition-colors duration-200 hover:text-black"
                    >
                      {it.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={resourcesOpen}
                      aria-haspopup="menu"
                      aria-label="Open resources menu"
                      onClick={() => setResourcesOpen((value) => !value)}
                      className="inline-flex items-center text-[#4b5563] transition-colors duration-200 hover:text-black"
                    >
                      <ChevronDown
                        size={14}
                        aria-hidden
                        className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {resourcesOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 top-[calc(100%+10px)] z-50 w-[280px] border border-black/10 bg-white"
                    >
                      {it.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setResourcesOpen(false)}
                          className="flex flex-col gap-0.5 border-b border-black/10 px-4 py-3 last:border-b-0 hover:bg-black/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black"
                        >
                          <span className="text-[15px] font-medium text-[#111]">{child.label}</span>
                          <span className="text-[13px] leading-snug text-[#6b7280]">{child.detail}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : it.href ? (
                <Link
                  key={it.id}
                  href={it.href}
                  className="px-1 py-2 text-[15px] font-medium text-[#4b5563] transition-colors duration-200 hover:text-black"
                >
                  {it.label}
                </Link>
              ) : (
                <button
                  key={it.id}
                  onClick={() => scrollToId(it.id)}
                  className="px-1 py-2 text-[15px] font-medium text-[#4b5563] transition-colors duration-200 hover:text-black"
                >
                  {it.label}
                </button>
              ),
            )}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center text-black lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>

        <a
          href="/#book"
          onClick={(event) => {
            event.preventDefault();
            bookAudit("nav");
          }}
          className={`ml-3 shrink-0 ${sharpButtonClass}`}
        >
          Book a call
        </a>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white px-6 pb-6 pt-24 lg:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-black"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((it) =>
              it.children ? (
                <div key={it.id} className="flex flex-col gap-3">
                  <p className="text-left text-2xl font-medium text-[#4b5563]">{it.label}</p>
                  {it.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="border border-black/10 px-4 py-3"
                    >
                      <span className="block text-[16px] font-medium text-[#111]">{child.label}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-[#6b7280]">
                        {child.detail}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : it.href ? (
                <Link
                  key={it.id}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="text-left text-2xl font-medium text-[#4b5563]"
                >
                  {it.label}
                </Link>
              ) : (
                <button
                  key={it.id}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollToId(it.id), 60);
                  }}
                  className="text-left text-2xl font-medium text-[#4b5563]"
                >
                  {it.label}
                </button>
              ),
            )}
          </div>
          <div className="mb-12 mt-auto">
            <a
              href="/#book"
              onClick={(event) => {
                event.preventDefault();
                bookAudit("nav");
              }}
              className={`w-full ${sharpButtonClass}`}
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
