"use client";

import { Plane } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { arrivalInfos } from "@/data/arrival";
import { property } from "@/data/contact";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { Card } from "@/components/ui/Card";
import { MapLinkButtons } from "@/components/ui/MapLinkButton";

export default function AnreisePage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FadeIn>
        <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
          {ui.nav.anreise[lang]}
        </h1>
        <p className="mb-6 max-w-xl text-sea-900/70">
          {lang === "de"
            ? "So findest du zu deinem Zuhause auf Zeit in Okrug Gornji."
            : "Here's how to find your home away from home in Okrug Gornji."}
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="mb-10 flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-sea-900/50">
              {lang === "de" ? "Adresse" : "Address"}
            </p>
            <p className="font-display text-xl font-semibold text-sea-900">
              {property.addressLine}
            </p>
            <p className="text-sea-900/70">{property.city}</p>
          </div>
          <MapLinkButtons />
        </Card>
      </FadeIn>

      <StaggerList className="grid gap-4 sm:grid-cols-2">
        {arrivalInfos.map((info) => (
          <StaggerItem key={info.title.de}>
            <Card className="h-full">
              <div className="mb-2 flex items-center gap-2 font-display font-semibold text-sea-900">
                <Plane className="h-4 w-4 text-terracotta-500" />
                {info.title[lang]}
              </div>
              <p className="text-sm text-sea-900/70">{info.text[lang]}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
