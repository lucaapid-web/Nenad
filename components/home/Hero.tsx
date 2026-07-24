"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Waves, Compass } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <PhotoSlot
        category="hero"
        alt="Blick auf die Adria bei Okrug Gornji"
        className="absolute inset-0 h-full w-full"
        showIcon={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sea-900/70 via-sea-900/40 to-sand-50" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-8 top-16 hidden text-white/30 sm:block"
      >
        <Waves className="h-24 w-24" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white backdrop-blur"
        >
          {ui.hero.kicker[lang]}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-semibold text-white sm:text-6xl"
        >
          {ui.hero.title[lang]}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-lg text-white/90"
        >
          {ui.hero.subtitle[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/haus"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.04] hover:bg-terracotta-600"
          >
            {ui.hero.ctaHaus[lang]}
          </Link>
          <Link
            href="/umgebung"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-sea-900 transition-all duration-200 hover:scale-[1.04] hover:bg-white"
          >
            <Compass className="h-4 w-4" />
            {ui.hero.ctaUmgebung[lang]}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
