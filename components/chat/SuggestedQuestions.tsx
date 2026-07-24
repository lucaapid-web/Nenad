import { ChatEntry } from "@/data/chatbot-qa";
import { Lang } from "@/data/i18n/ui";

export function SuggestedQuestions({
  entries,
  lang,
  onPick,
}: {
  entries: ChatEntry[];
  lang: Lang;
  onPick: (entry: ChatEntry) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 px-1 pb-1">
      {entries.map((entry) => (
        <button
          key={entry.id}
          onClick={() => onPick(entry)}
          className="rounded-full border border-sea-100 bg-white px-3 py-1.5 text-xs font-medium text-sea-700 transition hover:bg-sand-50"
        >
          {entry.question[lang]}
        </button>
      ))}
    </div>
  );
}
