import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-card",
  secondary: "bg-sea-700 text-white hover:bg-sea-900 shadow-card",
  ghost: "bg-white text-sea-700 border border-sea-100 hover:bg-sand-50",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]";

export function Button({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(baseClasses, variantClasses[variant], className)} {...props}>
      {icon}
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  icon,
  className,
  href,
  ...props
}: BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={href} className={clsx(baseClasses, variantClasses[variant], className)} {...props}>
      {icon}
      {children}
    </a>
  );
}
