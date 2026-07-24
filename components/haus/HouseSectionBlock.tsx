"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { HouseSection } from "@/data/house-info";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { CopyableValue } from "@/components/haus/CopyableValue";

export function HouseSectionBlock({ section }: { section: HouseSection }) {
  const { lang } = useLanguage();

  return (
    <section id={section.id} className="scroll-mt-32 py-8">
      <FadeIn>
        <h2 className="mb-2 font-display text-2xl font-semibold text-sea-900 sm:text-3xl">
          {section.title[lang]}
        </h2>
        {section.intro && <p className="mb-6 max-w-2xl text-sea-900/70">{section.intro[lang]}</p>}

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {section.facts && (
              <Card className="grid gap-4 sm:grid-cols-2">
                {section.facts.map((f) => (
                  <div key={f.label.de}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sea-900/50">
                      {f.label[lang]}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <p className="font-display text-lg font-semibold text-sea-900">{f.value[lang]}</p>
                      {f.copyable && <CopyableValue value={f.value[lang]} />}
                    </div>
                  </div>
                ))}
              </Card>
            )}

            {section.bullets && (
              <ul className="space-y-2.5">
                {section.bullets.map((b) => (
                  <li key={b.de} className="flex items-start gap-2 text-sea-900/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
                    <span>{b[lang]}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {section.imageId && (
            <div className="group overflow-hidden rounded-2xl">
              <PhotoSlot
                category="house"
                alt={section.title[lang]}
                className="min-h-[200px] h-full"
                zoomOnHover
                src={`/images/house/${section.imageId}.jpg`}
              />
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
