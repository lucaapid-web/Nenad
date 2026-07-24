"use client";

import Link from "next/link";
import { useState } from "react";
import { Palmtree, Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";

const umgebungLinks = [
  { href: "/umgebung", key: null },
  { href: "/umgebung/restaurants", key: "restaurants" as const },
  { href: "/umgebung/aktivitaeten", key: "aktivitaeten" as const },
  { href: "/umgebung/straende", key: "straende" as const },
  { href: "/umgebung/nightlife", key: "nightlife" as const },
];

export function Header() {
  const { lang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [umgebungOpen, setUmgebungOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-sea-900 via-sea-700 to-sea-500 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Palmtree className="h-6 w-6 text-sun-400" />
          Nenad&apos;s Guide
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-sun-400 transition-colors">
            {ui.nav.home[lang]}
          </Link>
          <Link href="/haus" className="text-sm font-medium hover:text-sun-400 transition-colors">
            {ui.nav.haus[lang]}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setUmgebungOpen(true)}
            onMouseLeave={() => setUmgebungOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium hover:text-sun-400 transition-colors">
              {ui.nav.umgebung[lang]}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {umgebungOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl bg-white p-2 text-sea-900 shadow-lg">
                <Link href="/umgebung" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-sand-50">
                  {ui.nav.umgebung[lang]} – Übersicht
                </Link>
                {umgebungLinks
                  .filter((l) => l.key)
                  .map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-sand-50"
                    >
                      {ui.umgebungSub[l.key!][lang]}
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <Link href="/anreise" className="text-sm font-medium hover:text-sun-400 transition-colors">
            {ui.nav.anreise[lang]}
          </Link>
          <Link href="/kontakt" className="text-sm font-medium hover:text-sun-400 transition-colors">
            {ui.nav.kontakt[lang]}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
        </div>

        <button
          className="flex items-center md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-sea-900 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10" onClick={() => setMobileOpen(false)}>
              {ui.nav.home[lang]}
            </Link>
            <Link href="/haus" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10" onClick={() => setMobileOpen(false)}>
              {ui.nav.haus[lang]}
            </Link>
            <Link href="/umgebung" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10" onClick={() => setMobileOpen(false)}>
              {ui.nav.umgebung[lang]}
            </Link>
            <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
              {umgebungLinks
                .filter((l) => l.key)
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-1.5 text-sm text-white/80 hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {ui.umgebungSub[l.key!][lang]}
                  </Link>
                ))}
            </div>
            <Link href="/anreise" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10" onClick={() => setMobileOpen(false)}>
              {ui.nav.anreise[lang]}
            </Link>
            <Link href="/kontakt" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10" onClick={() => setMobileOpen(false)}>
              {ui.nav.kontakt[lang]}
            </Link>
            <div className="mt-2">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
