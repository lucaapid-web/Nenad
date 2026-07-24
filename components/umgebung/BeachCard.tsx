"use client";

import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { Beach } from "@/data/beaches";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RouteButton } from "@/components/ui/RouteButton";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function BeachCard({ beach }: { beach: Beach }) {
  const { lang } = useLanguage();

  return (
    <Card
      className="flex h-full flex-col gap-3"
      media={
        <div className="group aspect-[4/3] overflow-hidden">
          <PhotoSlot
            category="beaches"
            alt={beach.name}
            className="h-full w-full"
            zoomOnHover
            src={`/images/beaches/${beach.id}.jpg`}
          />
        </div>
      }
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-sea-900">{beach.name}</h3>
        <Badge tone="sea">{beach.surface[lang]}</Badge>
      </div>
      <p className="flex-1 text-sm text-sea-900/70">{beach.description[lang]}</p>
      {beach.urchinWarning && (
        <div className="flex items-start gap-2 rounded-xl bg-sun-400/15 px-3 py-2.5 text-xs text-sea-900/80">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" />
          <p>{lang === "de" ? "Achtung: Seeigel möglich – Badeschuhe empfohlen." : "Caution: sea urchins possible – water shoes recommended."}</p>
        </div>
      )}
      <RouteButton mapsQuery={beach.mapsQuery} />
    </Card>
  );
}
