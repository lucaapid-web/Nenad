"use client";

import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { beaches, urchinWarningText } from "@/data/beaches";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { DisclaimerNote } from "@/components/ui/DisclaimerNote";
import { BeachCard } from "@/components/umgebung/BeachCard";

export default function StraendePage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FadeIn>
        <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
          {ui.umgebungSub.straende[lang]}
        </h1>
        <p className="mb-4 max-w-xl text-sea-900/70">{ui.pages.straendeIntro[lang]}</p>
        <div className="mb-8">
          <DisclaimerNote text={urchinWarningText} />
        </div>
      </FadeIn>

      <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {beaches.map((b) => (
          <StaggerItem key={b.id}>
            <BeachCard beach={b} />
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
