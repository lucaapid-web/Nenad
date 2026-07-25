import { ChatEntry } from "@/data/chatbot-qa";
import { Lang } from "@/data/i18n/ui";

function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}

function tokenize(input: string): string[] {
  return normalize(input)
    .split(/\s+/)
    .filter(Boolean);
}

/** Classic edit-distance, used only as a small fallback for typo tolerance. */
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  let prevRow = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row.push(Math.min(row[j - 1] + 1, prevRow[j] + 1, prevRow[j - 1] + cost));
    }
    prevRow = row;
  }
  return prevRow[b.length];
}

function fuzzyThreshold(keywordLength: number): number {
  return Math.min(2, Math.floor(keywordLength / 4));
}

const MATCH_THRESHOLD = 1.2;

function scoreEntry(tokens: string[], normalizedInput: string, entry: ChatEntry): number {
  let score = 0;
  const normalizedKeywords = entry.keywords.map(normalize);

  for (const token of tokens) {
    let tokenMatched = false;
    for (const keyword of normalizedKeywords) {
      if (keyword === token) {
        score += 2;
        tokenMatched = true;
      } else if (keyword.length >= 4 && (keyword.includes(token) || token.includes(keyword))) {
        // Short keywords (<4 chars, e.g. "pas", "cat") are excluded here to avoid
        // coincidental substring hits inside unrelated longer words (e.g. "password").
        score += 1;
        tokenMatched = true;
      }
    }
    // Typo-tolerant fallback: only tried when nothing matched exactly/partially for this token.
    if (!tokenMatched && token.length > 2) {
      for (const keyword of normalizedKeywords) {
        if (keyword.length < 3) continue;
        const threshold = fuzzyThreshold(keyword.length);
        if (threshold > 0 && levenshtein(token, keyword) <= threshold) {
          score += 0.7;
          break;
        }
      }
    }
  }

  for (const keyword of normalizedKeywords) {
    if (keyword.length >= 4 && normalizedInput.includes(keyword)) {
      score += 1;
    }
  }

  // Featured bonus only tie-breaks between already-relevant entries — it must
  // never turn a zero-relevance (gibberish) query into a false "did you mean" hit.
  if (entry.featured && score > 0) score += 0.1;

  return score;
}

export function matchEntry(input: string, entries: ChatEntry[]): ChatEntry | null {
  const tokens = tokenize(input);
  if (tokens.length === 0) return null;
  const normalizedInput = normalize(input);

  let best: ChatEntry | null = null;
  let bestScore = 0;

  for (const entry of entries) {
    const score = scoreEntry(tokens, normalizedInput, entry);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore >= MATCH_THRESHOLD ? best : null;
}

/**
 * Ranks entries by score even below the confident-match threshold, for a
 * "did you mean...?" fallback instead of a dead end.
 */
export function getTopMatches(input: string, entries: ChatEntry[], n = 3): ChatEntry[] {
  const tokens = tokenize(input);
  if (tokens.length === 0) return [];
  const normalizedInput = normalize(input);

  return entries
    .map((entry) => ({ entry, score: scoreEntry(tokens, normalizedInput, entry) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((r) => r.entry);
}

export function getFeaturedEntries(entries: ChatEntry[]): ChatEntry[] {
  return entries.filter((e) => e.featured);
}

export function entryText(entry: ChatEntry, lang: Lang, field: "question" | "answer"): string {
  return entry[field][lang];
}
