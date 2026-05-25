"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  href: string;
  label: string;
  kicker: string;
};

type SideDrawerProps = {
  links: NavLink[];
  contactHref: string;
};

export default function SideDrawer({ links, contactHref }: SideDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    document.body.classList.toggle("drawer-open", isOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--line) bg-white/70 text-[#15110d] transition hover:-translate-y-0.5 hover:border-[#0f8f83]/60 hover:bg-white md:hidden dark:bg-[#161411]/90 dark:text-[#f6efe4] dark:hover:border-[#3fd4c5]/70"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 7h16" strokeLinecap="round" />
          <path d="M8 12h12" strokeLinecap="round" />
          <path d="M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-[80] bg-black/45 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      <aside
        id="mobile-navigation"
        aria-labelledby={titleId}
        className={`fixed left-0 top-0 z-[90] flex h-dvh w-[min(88vw,390px)] flex-col border-r border-(--line) bg-[#fffaf2] px-6 py-6 shadow-2xl transition-transform duration-300 ease-out md:hidden dark:bg-[#100f0d] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-(--muted-fg)">Navigation</p>
            <h2 id={titleId} className="mt-1 text-xl font-semibold text-(--page-fg)">
              Tega Stephens
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--line) text-(--page-fg) transition hover:-translate-y-0.5 hover:border-[#0f8f83]/60 dark:hover:border-[#3fd4c5]/70"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 6l12 12" strokeLinecap="round" />
              <path d="M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-3">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="kinetic-card group rounded-lg border border-(--line) bg-black/3 p-4 transition hover:-translate-y-0.5 hover:border-[#0f8f83]/60 dark:bg-white/4 dark:hover:border-[#3fd4c5]/70"
            >
                <span className="font-mono text-xs text-(--muted-fg)">0{index + 1} / {link.kicker}</span>
                <span className="mt-2 flex items-center justify-between text-2xl font-semibold text-(--page-fg)">
                {link.label}
                <svg className="h-5 w-5 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 12h14" strokeLinecap="round" />
                  <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-4 pt-10">
          <div className="flex items-center justify-between rounded-lg border border-(--line) px-4 py-3">
            <span className="text-sm text-(--muted-fg)">Theme</span>
            <ThemeToggle />
          </div>
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f6efe4] px-5 py-4 text-sm font-semibold text-[#14110d] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white dark:bg-[#f6efe4]"
          >
            Start a project
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14" strokeLinecap="round" />
              <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
