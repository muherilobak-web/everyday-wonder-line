// Writes a single sentence about a small everyday wonder to /output/entry.txt.
// The sentence is built around the "trace of a stranger" idea: one small
// thing left behind in a shared place that quietly reveals its owner.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "On the laundromat dryer, someone had left a single sock with a hole worn exactly where the heel meets the floor, and I knew their walk better than their name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
