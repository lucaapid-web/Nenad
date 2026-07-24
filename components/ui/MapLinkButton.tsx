"use client";

import { MapPin } from "lucide-react";
import { buildSearchUrl } from "@/lib/maps";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { property } from "@/data/contact";

export function MapLinkButtons() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={property.appleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-terracotta-600 active:scale-[0.98]"
      >
        <MapPin className="h-4 w-4" />
        {ui.common.inAppleMapsOeffnen[lang]}
      </a>
      <a
        href={buildSearchUrl(property.fullAddressForMaps)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sea-700 border border-sea-100 transition-all duration-200 hover:scale-[1.03] hover:bg-sand-50 active:scale-[0.98]"
      >
        <MapPin className="h-4 w-4" />
        {ui.common.inGoogleMapsOeffnen[lang]}
      </a>
    </div>
  );
}
