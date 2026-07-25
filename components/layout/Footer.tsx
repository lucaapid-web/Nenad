"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Palmtree } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { contact, property } from "@/data/contact";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="relative mt-16 bg-sea-900 text-white/80 print:hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-full overflow-hidden leading-[0]">
        <motion.svg
          viewBox="0 0 2880 60"
          preserveAspectRatio="none"
          className="h-6 w-[200%] text-sea-900 sm:h-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,60 L0,60 Z M1440,32 C1680,64 1920,0 2160,32 C2400,64 2640,0 2880,32 L2880,60 L1440,60 Z"
          />
        </motion.svg>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Palmtree className="h-5 w-5 text-sun-400" />
            Nenad&apos;s Guide
          </div>
          <p className="text-sm">
            {property.addressLine}
            <br />
            {property.city}
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
            {ui.nav.umgebung[lang]}
          </h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/umgebung/restaurants" className="hover:text-sun-400">{ui.umgebungSub.restaurants[lang]}</Link></li>
            <li><Link href="/umgebung/aktivitaeten" className="hover:text-sun-400">{ui.umgebungSub.aktivitaeten[lang]}</Link></li>
            <li><Link href="/umgebung/straende" className="hover:text-sun-400">{ui.umgebungSub.straende[lang]}</Link></li>
            <li><Link href="/umgebung/nightlife" className="hover:text-sun-400">{ui.umgebungSub.nightlife[lang]}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
            {ui.nav.kontakt[lang]}
          </h3>
          <p className="mb-2 text-sm">{contact.name}</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-2 hover:text-sun-400">
              <Phone className="h-4 w-4" /> {contact.phoneDisplay}
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sun-400">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50" suppressHydrationWarning>
        © {new Date().getFullYear()} {contact.name} · Okrug Gornji, Kroatien
      </div>
    </footer>
  );
}
