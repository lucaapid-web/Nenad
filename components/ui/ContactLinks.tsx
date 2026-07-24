"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { contact } from "@/data/contact";

export function ContactLinks() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`tel:${contact.phoneHref}`}
        className="inline-flex items-center gap-2 rounded-full bg-sea-700 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-sea-900 active:scale-[0.98]"
      >
        <Phone className="h-4 w-4" />
        {ui.common.anrufen[lang]}
      </a>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-olive-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-olive-700 active:scale-[0.98]"
      >
        <MessageCircle className="h-4 w-4" />
        {ui.common.whatsapp[lang]}
      </a>
    </div>
  );
}
