"use client";

import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { nightlifeSpots, nightlifeDisclaimer } from "@/data/nightlife";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { DisclaimerNote } from "@/components/ui/DisclaimerNote";
import { NightlifeCard } from "@/components/umgebung/NightlifeCard";

export default function NightlifePage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FadeIn>
        <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
          {ui.umgebungSub.nightlife[lang]}
        </h1>
        <p className="mb-4 max-w-xl text-sea-900/70">
          {lang === "de"
            ? "Für alle, die den Abend noch ausklingen lassen möchten."
            : "For anyone who wants to keep the evening going."}
        </p>
        <div className="mb-8">
          <DisclaimerNote text={nightlifeDisclaimer} />
        </div>
      </FadeIn>

      <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nightlifeSpots.map((s) => (
          <StaggerItem key={s.id}>
            <NightlifeCard spot={s} />
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
