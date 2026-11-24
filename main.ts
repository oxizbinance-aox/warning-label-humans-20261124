// Warning Label for Humans: One Line, Big Laugh
// Writes a single-line safety warning label for every human being
// to /output/entry.txt. Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The label: one idea, terse official warning-label register, with the
// turn landing in the last few words. Universally recognisable —
// everyone has hunted for the phone already in their hand.
const LABEL =
  "WARNING: Human. Will search the entire house for the phone it is currently holding.";

const outPath = "/output/entry.txt";

// Gate self-check: the entry must be 1–160 UTF-8 characters, a single
// line, and not whitespace-only — fail loudly instead of writing junk.
if (
  LABEL.length < 1 ||
  LABEL.length > 160 ||
  LABEL.includes("\n") ||
  LABEL.trim().length === 0
) {
  throw new Error(`Label fails the gate (${LABEL.length} chars): ${LABEL}`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LABEL, "utf8");
