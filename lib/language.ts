import { useContext } from "react";
import { LanguageContext } from "@/components/i18n/LanguageProvider";

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
