"use client";

import { ShieldAlert } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { Activity } from "@/data/activities";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RouteButton } from "@/components/ui/RouteButton";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { PersonalNote } from "@/components/ui/PersonalNote";

export function ActivityCard({ activity }: { activity: Activity }) {
  const { lang } = useLanguage();

  return (
    <Card
      className="flex h-full flex-col gap-3"
      media={
        <div className="group aspect-[4/3] overflow-hidden">
          <PhotoSlot
            category="activities"
            alt={activity.name}
            className="h-full w-full"
            zoomOnHover
            src={`/images/activities/${activity.id}.jpg`}
          />
        </div>
      }
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-sea-900">{activity.name}</h3>
        {activity.priceHint && <Badge tone="sea">{activity.priceHint[lang]}</Badge>}
      </div>
      <p className="text-sm text-sea-900/70">{activity.description[lang]}</p>
      <div className="flex items-start gap-2 rounded-xl bg-sand-100 px-3 py-2.5 text-xs text-sea-900/70">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-500" />
        <p>{activity.licenseNote[lang]}</p>
      </div>
      {activity.personalNote && <PersonalNote text={activity.personalNote} />}
      <div className="mt-auto pt-1">
        <RouteButton mapsQuery={activity.mapsQuery} />
      </div>
    </Card>
  );
}
