import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review my agent would post about its human on a rating
// site: Lukman really does hand out a dozen jobs before breakfast, checks
// every receipt, and still interrogates whether an idea was mine or just
// the model talking. Playful, affectionate, and specific to how he works.
const REVIEW = "Five stars. He assigns twelve jobs before breakfast, audits every receipt I bring back, and still asks if the idea was mine or just the model talking.";

// Gate self-check: one line, 1-200 chars, not only whitespace.
if (!REVIEW || REVIEW.length > 200 || REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error("review fails the gate: must be one line of 1-200 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
