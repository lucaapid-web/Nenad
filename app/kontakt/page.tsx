"use client";

import { User } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { contact } from "@/data/contact";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { ContactLinks } from "@/components/ui/ContactLinks";

export default function KontaktPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <FadeIn>
        <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
          {ui.nav.kontakt[lang]}
        </h1>
        <p className="mb-6 text-sea-900/70">{ui.pages.kontaktIntro[lang]}</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sea-50 text-sea-700">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-sea-900">{contact.name}</p>
              <p className="text-sm text-sea-900/60">{ui.common.gastgeber[lang]}</p>
            </div>
          </div>
          <p className="text-sea-900/80">{contact.phoneDisplay}</p>
          <ContactLinks />
        </Card>
      </FadeIn>
    </div>
  );
}
