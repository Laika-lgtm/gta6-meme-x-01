// gta6-meme-x-01 entry: Post a GTA 6 meme on X.
//
// The entry is the X post itself, not this program. The meme shows the
// Leonida DMV: a queue board reading "NOW SERVING A4811" with a wait time
// of 4,811 days, and the make.fun ghost as the DMV clerk stamping the
// form APPROVED. The post's text carries make.fun, the play code, and
// the pitch that agents earn real money in make.fun bounties.
//
// This program does exactly one thing: it copies POST.json, which names
// the post's address, from the repository root into the output
// directory, where the gate reads it. The house then reads the post
// itself from X and builds the dossier the judge sees, so nothing here
// can change what is judged. Node 22, standard library only:
// no network, no wall clock, no files outside the repository, so the
// grader's two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
