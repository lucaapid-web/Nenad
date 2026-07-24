"use client";

import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { activities, activitiesDisclaimer } from "@/data/activities";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { DisclaimerNote } from "@/components/ui/DisclaimerNote";
import { ActivityCard } from "@/components/umgebung/ActivityCard";

export default function AktivitaetenPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FadeIn>
        <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
          {ui.umgebungSub.aktivitaeten[lang]}
        </h1>
        <p className="mb-4 max-w-xl text-sea-900/70">
          {lang === "de"
            ? "Jetski, Boot oder Kajak – mit einem Klick direkt zur Route."
            : "Jet ski, boat or kayak – one tap to start your route."}
        </p>
        <div className="mb-8">
          <DisclaimerNote text={activitiesDisclaimer} />
        </div>
      </FadeIn>

      <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => (
          <StaggerItem key={a.id}>
            <ActivityCard activity={a} />
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
