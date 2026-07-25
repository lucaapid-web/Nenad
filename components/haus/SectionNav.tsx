"use client";

import { useLanguage } from "@/lib/language";
import { houseSections } from "@/data/house-info";

export function SectionNav() {
  const { lang } = useLanguage();

  return (
    <div className="sticky top-[57px] z-30 -mx-4 mb-8 overflow-x-auto border-b border-sand-200 bg-sand-50/95 px-4 py-3 backdrop-blur sm:top-[65px] sm:mx-0 sm:rounded-full sm:border sm:px-2 print:hidden">
      <div className="flex w-max gap-1 sm:w-auto sm:justify-center sm:flex-wrap">
        {houseSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-sea-900/70 transition hover:bg-white hover:text-sea-900"
          >
            {s.title[lang]}
          </a>
        ))}
      </div>
    </div>
  );
}
