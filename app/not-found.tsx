"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900">404</h1>
      <p className="mb-6 text-sea-900/70">{ui.common.notFoundText[lang]}</p>
      <Link
        href="/"
        className="rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-terracotta-600"
      >
        {ui.common.notFoundCta[lang]}
      </Link>
    </div>
  );
}
