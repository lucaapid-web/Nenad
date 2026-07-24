import { Hero } from "@/components/home/Hero";
import { QuickInfoCards } from "@/components/home/QuickInfoCards";
import { GallerySlot } from "@/components/home/GallerySlot";
import { UmgebungTeaser } from "@/components/home/UmgebungTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfoCards />
      <GallerySlot />
      <UmgebungTeaser />
    </>
  );
}
