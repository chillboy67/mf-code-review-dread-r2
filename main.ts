// Two days of quiet dread, summed up in one code-review line for /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is the review line below; only entry.txt is scored, so it stays one line.
const review = {
  verdict: "LGTM",
  line: "LGTM. The code works, the tests pass, and I have never been more afraid of a pull request in my life.",
};

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), review.line + "\n", "utf8");
console.log(review.verdict, "->", join(dir, "entry.txt"));
