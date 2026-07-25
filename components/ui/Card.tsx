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
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={clsx(
        "overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover",
        !media && ["p-5", className]
      )}
    >
      {media}
      {media ? <div className={clsx("p-5", className)}>{children}</div> : children}
    </motion.div>
  );
}
