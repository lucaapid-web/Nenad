"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { hostProfile } from "@/data/host";
import { FadeIn } from "@/components/motion/FadeIn";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function HostIntro({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl overflow-hidden px-4 py-14 sm:px-6">
      {variant === "compact" && (
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-6 top-4 hidden text-sun-400/25 sm:block"
        >
          <Sun className="h-20 w-20" />
        </motion.div>
      )}
      <div className="relative grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div className="group mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl md:mx-0">
            <motion.div style={{ y: photoY }} className="h-[112%] w-full">
              <PhotoSlot
                category="host"
                alt={hostProfile.name}
                className="h-full w-full"
                src="/images/host/nenad.jpg"
              />
            </motion.div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-terracotta-500">
            {ui.common.aboutHost[lang]}
          </p>
          <h2 className="mb-1 font-display text-2xl font-semibold text-sea-900 sm:text-3xl">
            {hostProfile.name}
          </h2>
          <p className="mb-4 text-sm font-medium text-sea-900/50">{hostProfile.tagline[lang]}</p>
          <p className={variant === "full" ? "text-base leading-relaxed text-sea-900/80" : "text-sm leading-relaxed text-sea-900/70"}>
            {hostProfile.bio[lang]}
          </p>
          <p className="mt-4 font-display text-lg text-sea-900">{hostProfile.signature[lang]}</p>
        </FadeIn>
      </div>
    </section>
  );
}
