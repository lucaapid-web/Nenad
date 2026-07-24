"use client";

import { Info } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { Bilingual } from "@/data/types";

export function DisclaimerNote({ text }: { text: Bilingual }) {
  const { lang } = useLanguage();

  return (
    <div className="flex items-start gap-2 rounded-xl bg-sand-100 px-4 py-3 text-sm text-sea-900/70">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-sea-500" />
      <p>{text[lang]}</p>
    </div>
  );
}
