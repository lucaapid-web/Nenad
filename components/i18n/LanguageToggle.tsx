"use client";

import { useLanguage } from "@/lib/language";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
      aria-label="Sprache wechseln / Switch language"
    >
      <span className={lang === "de" ? "opacity-100" : "opacity-50"}>DE</span>
      <span className="opacity-50">/</span>
      <span className={lang === "en" ? "opacity-100" : "opacity-50"}>EN</span>
    </button>
  );
}
