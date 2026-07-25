import { motion } from "framer-motion";

const dotTransition = (delay: number) => ({
  duration: 0.9,
  repeat: Infinity,
  ease: "easeInOut" as const,
  delay,
});

export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-sand-100 px-4 py-3">
        {[0, 0.15, 0.3].map((delay, i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-sea-900/40"
            animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
            transition={dotTransition(delay)}
          />
        ))}
      </div>
    </div>
  );
}
