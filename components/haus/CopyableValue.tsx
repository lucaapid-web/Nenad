"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";

export function CopyableValue({ value }: { value: string }) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable – ignore silently, value is still visible on screen.
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-full bg-sea-50 px-2.5 py-1 text-xs font-semibold text-sea-700 transition-all duration-200 hover:scale-[1.03] hover:bg-sea-100 active:scale-[0.97]"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? ui.common.copied[lang] : ui.common.copy[lang]}
    </button>
  );
}
