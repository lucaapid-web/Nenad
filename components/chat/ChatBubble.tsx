import clsx from "clsx";
import { motion } from "framer-motion";

export function ChatBubble({
  text,
  from,
}: {
  text: string;
  from: "bot" | "user";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={clsx("flex", from === "user" ? "justify-end" : "justify-start")}
    >
      <div
        className={clsx(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          from === "user"
            ? "bg-sea-700 text-white rounded-br-sm"
            : "bg-sand-100 text-sea-900 rounded-bl-sm"
        )}
      >
        {text}
      </div>
    </motion.div>
  );
}
