"use client";

import { useLanguage } from "@/lib/language";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const galleryItems = [
  { id: "terrasse", alt: { de: "Terrasse mit Sitzbereich", en: "Terrace with seating area" } },
  { id: "wohnbereich", alt: { de: "Gemütlicher Wohnbereich", en: "Cozy living room" } },
  { id: "garten", alt: { de: "Garten mit Hängematte", en: "Garden with hammock" } },
  { id: "aussenansicht", alt: { de: "Außenansicht der Unterkunft", en: "Exterior view of the property" } },
];

export function GallerySlot() {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <FadeIn>
        <h2 className="mb-6 text-center font-display text-2xl font-semibold text-sea-900 sm:text-3xl">
          {lang === "de" ? "Ein Eindruck von zu Hause" : "A glimpse of home"}
        </h2>
      </FadeIn>
      <StaggerList className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <StaggerItem key={item.id}>
            <div className="group aspect-square overflow-hidden rounded-2xl">
              <PhotoSlot
                category="house"
                alt={item.alt[lang]}
                className="h-full w-full"
                zoomOnHover
                src={`/images/house/${item.id}.jpg`}
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}
