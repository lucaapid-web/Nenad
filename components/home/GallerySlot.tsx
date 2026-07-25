"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const galleryItems = [
  {
    id: "terrasse",
    alt: {
      de: "Terrasse mit Sitzbereich",
      en: "Terrace with seating area",
      hr: "Terasa s prostorom za sjedenje",
      pl: "Taras z miejscem do siedzenia",
    },
  },
  {
    id: "wohnbereich",
    alt: {
      de: "Gemütlicher Wohnbereich",
      en: "Cozy living room",
      hr: "Ugodan dnevni boravak",
      pl: "Przytulny salon",
    },
  },
  {
    id: "garten",
    alt: {
      de: "Garten mit Hängematte",
      en: "Garden with hammock",
      hr: "Vrt s ležaljkom",
      pl: "Ogród z hamakiem",
    },
  },
  {
    id: "aussenansicht",
    alt: {
      de: "Außenansicht der Unterkunft",
      en: "Exterior view of the property",
      hr: "Vanjski izgled smještaja",
      pl: "Widok zewnętrzny nieruchomości",
    },
  },
];

export function GallerySlot() {
  const { lang } = useLanguage();
  const [openItem, setOpenItem] = useState<(typeof galleryItems)[number] | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <FadeIn>
        <h2 className="mb-6 text-center font-display text-2xl font-semibold text-sea-900 sm:text-3xl">
          {ui.home.glimpseOfHome[lang]}
        </h2>
      </FadeIn>
      <StaggerList className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <StaggerItem key={item.id}>
            <button
              type="button"
              onClick={() => setOpenItem(item)}
              className="group block aspect-square w-full overflow-hidden rounded-2xl"
            >
              <PhotoSlot
                category="house"
                alt={item.alt[lang]}
                className="h-full w-full"
                zoomOnHover
                src={`/images/house/${item.id}.jpg`}
              />
            </button>
          </StaggerItem>
        ))}
      </StaggerList>

      <AnimatePresence>
        {openItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-sea-900/80 p-4 backdrop-blur-sm"
            onClick={() => setOpenItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <PhotoSlot
                category="house"
                alt={openItem.alt[lang]}
                className="h-full w-full"
                src={`/images/house/${openItem.id}.jpg`}
              />
              <button
                type="button"
                onClick={() => setOpenItem(null)}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-sea-900/60 text-white transition hover:bg-sea-900/80"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
