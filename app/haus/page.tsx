import { houseSections } from "@/data/house-info";
import { SectionNav } from "@/components/haus/SectionNav";
import { HouseSectionBlock } from "@/components/haus/HouseSectionBlock";

export default function HausPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <SectionNav />
      <div className="divide-y divide-sand-200">
        {houseSections.map((section) => (
          <HouseSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
