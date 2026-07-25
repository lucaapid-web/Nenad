"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Image as ImageIcon } from "lucide-react";

type Category = "hero" | "house" | "beaches" | "restaurants" | "activities" | "nightlife" | "host";

const categoryGradients: Record<Category, string> = {
  hero: "from-sea-700 via-sea-500 to-sun-400",
  house: "from-terracotta-500 to-sand-300",
  beaches: "from-sea-500 to-sea-100",
  restaurants: "from-sand-300 to-terracotta-300",
  activities: "from-olive-500 to-sea-300",
  nightlife: "from-sea-900 via-sea-700 to-terracotta-500",
  host: "from-terracotta-500 via-sun-500 to-sun-400",
};

export function PhotoSlot({
  src,
  alt,
  category,
  className,
  showIcon = true,
  zoomOnHover = false,
  priority = false,
}: {
  src?: string;
  alt: string;
  category: Category;
  className?: string;
  showIcon?: boolean;
  zoomOnHover?: boolean;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div className={clsx("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={clsx(
            "object-cover",
            zoomOnHover && "transition-transform duration-500 ease-out group-hover:scale-110"
          )}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={clsx(
        "flex items-center justify-center bg-gradient-to-br",
        categoryGradients[category],
        className
      )}
    >
      {showIcon && <ImageIcon className="h-8 w-8 text-white/60" />}
    </div>
  );
}
