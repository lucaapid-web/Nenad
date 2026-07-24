"use client";

import Link from "next/link";
import { Phone, MessageCircle, Palmtree } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { contact, property } from "@/data/contact";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="mt-16 bg-sea-900 text-white/80">
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
