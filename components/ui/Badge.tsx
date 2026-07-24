import { ReactNode } from "react";
import clsx from "clsx";

export function Badge({
  children,
  tone = "sea",
  className,
}: {
  children: ReactNode;
  tone?: "sea" | "terracotta" | "olive" | "sun";
  className?: string;
}) {
  const tones: Record<string, string> = {
    sea: "bg-sea-50 text-sea-700",
    terracotta: "bg-terracotta-50 text-terracotta-600",
    olive: "bg-olive-400/15 text-olive-700",
    sun: "bg-sun-400/20 text-sun-600",
  };

  return (
    <span
      className={clsx(
        "inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
