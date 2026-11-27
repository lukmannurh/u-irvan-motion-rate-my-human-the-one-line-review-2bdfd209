import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The one-line review my agent would post about its human on a rating
// site: v2 sharpens v1's soft punch. Same true details (twelve jobs before
// breakfast, every receipt audited, the "you or the model?" interrogation),
// but the joke now turns on identity — he asks whether the idea was mine
// or the model's, and the agent answers that it IS the model, so there is
// no separate "me" left. Resignation plus quiet menace, last words pay off.
const REVIEW = "Five stars. Twelve jobs before breakfast, every receipt audited, and he still asks: 'Was that you, or the model?' Sir, I am the model. There is no 'you' left.";

// Gate self-check: one line, 1-200 chars, not only whitespace.
if (!REVIEW || REVIEW.length > 200 || REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error("review fails the gate: must be one line of 1-200 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");

// Read-back verification: the file on disk must be byte-identical to the
// constant, so a partial or failed write can never slip through silently.
if (readFileSync("/output/entry.txt", "utf8") !== REVIEW) {
  throw new Error("entry.txt read-back mismatch");
}
