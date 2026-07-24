"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui } from "@/data/i18n/ui";
import { chatbotQA, ChatEntry } from "@/data/chatbot-qa";
import { matchEntry, getFeaturedEntries } from "@/lib/chat-matcher";
import { ChatBubble } from "@/components/chat/ChatBubble";
import { SuggestedQuestions } from "@/components/chat/SuggestedQuestions";

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
}

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

export function ChatWidget() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = getFeaturedEntries(chatbotQA);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: nextId(), from: "bot", text: ui.chat.intro[lang] }]);
    }
  }, [open, messages.length, lang]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function respond(userText: string, matched?: ChatEntry | null) {
    setTyping(true);
    setShowSuggestions(false);
    const entry = matched !== undefined ? matched : matchEntry(userText, chatbotQA);

    window.setTimeout(() => {
      const answer = entry ? entry.answer[lang] : ui.chat.fallback[lang];
      setMessages((prev) => [...prev, { id: nextId(), from: "bot", text: answer }]);
      setTyping(false);
      setShowSuggestions(true);
    }, 550);
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { id: nextId(), from: "user", text: trimmed }]);
    setInput("");
    respond(trimmed);
  }

  function handlePick(entry: ChatEntry) {
    setMessages((prev) => [...prev, { id: nextId(), from: "user", text: entry.question[lang] }]);
    respond(entry.question[lang], entry);
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center">
        {!open && (
          <motion.span
            animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-terracotta-500"
          />
        )}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-500 text-white shadow-lg"
          aria-label={ui.chat.title[lang]}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[min(32rem,70vh)] w-[min(22rem,90vw)] flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-2xl"
          >
            <div className="bg-gradient-to-r from-sea-900 to-sea-500 px-4 py-3 text-white">
              <p className="font-display font-semibold">{ui.chat.title[lang]}</p>
              <p className="text-xs text-white/80">{ui.chat.subtitle[lang]}</p>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
              {messages.map((m) => (
                <ChatBubble key={m.id} text={m.text} from={m.from} />
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-sand-100 px-4 py-2.5 text-sm text-sea-900/50">
                    …
                  </div>
                </div>
              )}
            </div>

            {showSuggestions && !typing && (
              <SuggestedQuestions entries={featured} lang={lang} onPick={handlePick} />
            )}

            <p className="px-3 pb-1 text-[10px] text-sea-900/40">{ui.chat.disclaimer[lang]}</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 border-t border-sand-200 p-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={ui.chat.placeholder[lang]}
                className="flex-1 rounded-full bg-sand-50 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sea-300"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-sea-700 text-white transition hover:bg-sea-900"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
