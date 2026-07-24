"use client";

import { useLanguage } from "@/lib/language";
import { FadeIn } from "@/components/motion/FadeIn";
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
        <h2 className="mb-2 text-center font-display text-2xl font-semibold text-sea-900 sm:text-3xl">
          {lang === "de" ? "Ein Eindruck von zu Hause" : "A glimpse of home"}
        </h2>
        <p className="mb-6 text-center text-sm text-sea-900/60">
          {lang === "de"
            ? "Platzhalterbilder – echte Fotos folgen in Kürze."
            : "Placeholder images – real photos coming soon."}
        </p>
      </FadeIn>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <PhotoSlot
            key={item.id}
            category="house"
            alt={item.alt[lang]}
            className="aspect-square rounded-2xl"
          />
        ))}
      </div>
    </section>
  );
}
