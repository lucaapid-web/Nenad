import { ChatEntry } from "@/data/chatbot-qa";
import { Lang } from "@/data/i18n/ui";

function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}

function tokenize(input: string): string[] {
  return normalize(input)
    .split(/\s+/)
    .filter(Boolean);
}

const MATCH_THRESHOLD = 1;

export function matchEntry(
  input: string,
  entries: ChatEntry[]
): ChatEntry | null {
  const tokens = tokenize(input);
  if (tokens.length === 0) return null;

  let best: ChatEntry | null = null;
  let bestScore = 0;

  for (const entry of entries) {
    let score = 0;
    const normalizedKeywords = entry.keywords.map(normalize);

    for (const token of tokens) {
      for (const keyword of normalizedKeywords) {
        if (keyword === token) {
          score += 2;
        } else if (keyword.includes(token) || token.includes(keyword)) {
          score += 1;
        }
      }
    }

    const normalizedInput = normalize(input);
    for (const keyword of normalizedKeywords) {
      if (keyword.length > 2 && normalizedInput.includes(keyword)) {
        score += 1;
      }
    }

    if (entry.featured) score += 0.1;

    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore >= MATCH_THRESHOLD ? best : null;
}

export function getFeaturedEntries(entries: ChatEntry[]): ChatEntry[] {
  return entries.filter((e) => e.featured);
}

export function entryText(entry: ChatEntry, lang: Lang, field: "question" | "answer"): string {
  return entry[field][lang];
}
