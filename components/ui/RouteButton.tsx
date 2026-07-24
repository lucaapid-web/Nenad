"use client";

import { Navigation } from "lucide-react";
import { buildDirectionsUrl } from "@/lib/maps";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";

export function RouteButton({ mapsQuery }: { mapsQuery: string }) {
  const { lang } = useLanguage();

  return (
    <a
      href={buildDirectionsUrl(mapsQuery)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-sea-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-sea-900 active:scale-[0.98]"
    >
      <Navigation className="h-4 w-4" />
      {ui.common.routeStarten[lang]}
    </a>
  );
}
