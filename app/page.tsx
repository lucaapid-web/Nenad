import { Hero } from "@/components/home/Hero";
import { HostIntro } from "@/components/home/HostIntro";
import { QuickInfoCards } from "@/components/home/QuickInfoCards";
import { GallerySlot } from "@/components/home/GallerySlot";
import { UmgebungTeaser } from "@/components/home/UmgebungTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HostIntro variant="compact" />
      <QuickInfoCards />
      <GallerySlot />
      <UmgebungTeaser />
    </>
  );
}
