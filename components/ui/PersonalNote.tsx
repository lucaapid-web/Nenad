"use client";

import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { Bilingual } from "@/data/types";

export function PersonalNote({ text }: { text: Bilingual }) {
  const { lang } = useLanguage();

  return (
    <div className="flex items-start gap-2 rounded-xl bg-terracotta-500/10 px-4 py-3 text-sm text-sea-900/80">
      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-500" />
      <p>
        <span className="font-semibold text-terracotta-600">{ui.common.nenadsTipp[lang]}: </span>
        {text[lang]}
      </p>
    </div>
  );
}
