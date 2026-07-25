"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Palmtree, Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";

const umgebungLinks = [
  { href: "/umgebung/restaurants", key: "restaurants" as const },
  { href: "/umgebung/aktivitaeten", key: "aktivitaeten" as const },
  { href: "/umgebung/straende", key: "straende" as const },
  { href: "/umgebung/nightlife", key: "nightlife" as const },
];

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative py-1 text-sm font-medium transition-colors hover:text-sun-400">
      <span className={active ? "text-white" : "text-white/85"}>{children}</span>
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-sun-400"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [umgebungOpen, setUmgebungOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isUmgebung = pathname.startsWith("/umgebung");

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 bg-gradient-to-r from-sea-900 via-sea-700 to-sea-500 text-white transition-shadow duration-300 print:hidden",
        scrolled ? "shadow-lg" : "shadow-none"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-[padding] duration-300 sm:px-6",
          scrolled ? "py-2" : "py-3"
        )}
      >
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <motion.span whileHover={{ rotate: -14 }} transition={{ type: "spring", stiffness: 300 }}>
            <Palmtree className="h-6 w-6 text-sun-400" />
          </motion.span>
          Nenad&apos;s Guide
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink href="/" active={pathname === "/"}>{ui.nav.home[lang]}</NavLink>
          <NavLink href="/haus" active={pathname === "/haus"}>{ui.nav.haus[lang]}</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setUmgebungOpen(true)}
            onMouseLeave={() => setUmgebungOpen(false)}
          >
            <button className="relative flex items-center gap-1 py-1 text-sm font-medium transition-colors hover:text-sun-400">
              <span className={isUmgebung ? "text-white" : "text-white/85"}>{ui.nav.umgebung[lang]}</span>
              <motion.span animate={{ rotate: umgebungOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.span>
              {isUmgebung && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-sun-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <AnimatePresence>
              {umgebungOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full w-56 rounded-xl bg-white p-2 text-sea-900 shadow-lg"
                >
                  <Link href="/umgebung" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-sand-50">
                    {ui.nav.umgebung[lang]} – Übersicht
                  </Link>
                  {umgebungLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-sand-50"
                    >
                      {ui.umgebungSub[l.key][lang]}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/anreise" active={pathname === "/anreise"}>{ui.nav.anreise[lang]}</NavLink>
          <NavLink href="/kontakt" active={pathname === "/kontakt"}>{ui.nav.kontakt[lang]}</NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
        </div>

        <button
          className="flex items-center md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-sea-900 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
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
                {umgebungLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-1.5 text-sm text-white/80 hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {ui.umgebungSub[l.key][lang]}
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
