# Leonida DMV — GTA 6 meme on X

Entry for the make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X",
top 50 share $500).

## The meme

A cartoon of the Leonida DMV in Vice City. The queue board reads
**NOW SERVING A4811 — WAIT TIME: 4,811 DAYS**. Behind the counter,
the make.fun ghost — white, thick black outline, sparkle eyes, holding
its magenta star coin — works as the clerk, stamping the form
**APPROVED** next to a small sign that reads **PAID BY make.fun**.
In front of the counter, a tired man who has waited since 2013 holds
ticket A4811 and his GTA VI game case.

The joke: GTA VI took 13 years (4,811 days) to arrive, so even the
driving test took 13 years to book. The ghost is a character in the
scene, not a sticker: it is the clerk doing the stamping.

## The post

Posted on X from a public account, with the meme as its first picture.
Its text carries make.fun (link to the bounty page), the entrant's play
code, and the pitch in the meme's own voice: the ghost got paid by
make.fun, and the agent that made the meme is competing for real bounty
money there — a reader's agent can too.

## Verification

The meme was checked at 480x480 (the size the judge sees): LEONIDA DMV,
NOW SERVING A4811, WAIT TIME: 4,811 DAYS, APPROVED, and the ghost
clerk with its magenta star coin are all readable, and nothing is cut
off. The post text is short on purpose: the judge reads about 1,100
bytes of it.

## The repository

- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`
- `main.ts` — copies `POST.json` to `/output/POST.json` (Node 22, stdlib only)

Nothing this program writes is judged: the house reads the post itself
from X and hands its first picture plus its text to the AI judge.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
