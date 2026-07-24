"use client";

import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { restaurants, restaurantsDisclaimer } from "@/data/restaurants";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { DisclaimerNote } from "@/components/ui/DisclaimerNote";
import { RestaurantCard } from "@/components/umgebung/RestaurantCard";

export default function RestaurantsPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FadeIn>
        <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900 sm:text-4xl">
          {ui.umgebungSub.restaurants[lang]}
        </h1>
        <p className="mb-4 max-w-xl text-sea-900/70">
          {lang === "de"
            ? "Von gehobener Küche bis zur schnellen, günstigen Pizza."
            : "From upscale dining to a quick, affordable pizza."}
        </p>
        <div className="mb-8">
          <DisclaimerNote text={restaurantsDisclaimer} />
        </div>
      </FadeIn>

      <StaggerList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((r) => (
          <StaggerItem key={r.id}>
            <RestaurantCard restaurant={r} />
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
