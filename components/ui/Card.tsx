import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function Card({
  children,
  className,
  media,
}: {
  children: ReactNode;
  className?: string;
  media?: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={clsx(
        "overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg",
        !media && ["p-5", className]
      )}
    >
      {media}
      {media ? <div className={clsx("p-5", className)}>{children}</div> : children}
    </motion.div>
  );
}
