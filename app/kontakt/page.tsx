"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { contact } from "@/data/contact";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { HostIntro } from "@/components/home/HostIntro";

export default function KontaktPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6">
        <FadeIn>
          <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
            {ui.nav.kontakt[lang]}
          </h1>
          <p className="mb-2 text-sea-900/70">{ui.pages.kontaktIntro[lang]}</p>
        </FadeIn>
      </div>

      <HostIntro variant="full" />

      <div className="mx-auto max-w-2xl px-4 pb-10 sm:px-6">
        <FadeIn delay={0.1}>
          <Card className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-sea-900/80">
              <Phone className="h-4 w-4" />
              {contact.phoneDisplay}
            </div>
            <ContactLinks />
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
