import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry line below must stay byte-for-byte: one line, no trailing newline.
const LINE = "We shipped it Friday at 4:59 PM. It works in production, mostly, and the rollback plan is hope.";

function writeEntry(): void {
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, { encoding: "utf8" });
  console.log("wrote", LINE.length, "chars to", outPath);
}

writeEntry();
