"use client";

import { useLanguage } from "@/lib/language";
import { NightlifeSpot } from "@/data/nightlife";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RouteButton } from "@/components/ui/RouteButton";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function NightlifeCard({ spot }: { spot: NightlifeSpot }) {
  const { lang } = useLanguage();

  return (
    <Card
      className="flex h-full flex-col gap-3"
      media={
        <div className="group aspect-[4/3] overflow-hidden">
          <PhotoSlot
            category="house"
            alt={spot.name}
            className="h-full w-full"
            zoomOnHover
            src={`/images/nightlife/${spot.id}.jpg`}
          />
        </div>
      }
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-sea-900">{spot.name}</h3>
        <Badge tone="olive">{spot.type[lang]}</Badge>
      </div>
      <p className="flex-1 text-sm text-sea-900/70">{spot.description[lang]}</p>
      <RouteButton mapsQuery={spot.mapsQuery} />
    </Card>
  );
}
