"use client";

import { useLanguage } from "@/lib/language";
import { Restaurant } from "@/data/restaurants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RouteButton } from "@/components/ui/RouteButton";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { lang } = useLanguage();

  return (
    <Card className="flex h-full flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-sea-900">{restaurant.name}</h3>
        <Badge tone="terracotta">{restaurant.tier}</Badge>
      </div>
      <p className="text-sm font-medium text-sea-900/50">{restaurant.cuisine[lang]}</p>
      <p className="flex-1 text-sm text-sea-900/70">{restaurant.description[lang]}</p>
      <RouteButton mapsQuery={restaurant.mapsQuery} />
    </Card>
  );
}
