import clsx from "clsx";
import { motion } from "framer-motion";

export function ChatBubble({
  text,
  from,
}: {
  text: string;
  from: "bot" | "user";
}) {
  const isUser = from === "user";

  return (
    <motion.div
      initial={isUser ? { opacity: 0, scale: 0.9, y: 8 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={clsx("flex", isUser ? "justify-end" : "justify-start")}
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
