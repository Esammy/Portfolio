# Next steps — 2026-09-15

Everything below is copy-paste. Ordered by leverage, not by effort.

State as of this check:

| | |
| --- | --- |
| judgekit pushed, 14 commits | ✅ github.com/Esammy/LLM-as-a-judge |
| CI, Eval gate, Images workflows | ✅ all green, Dependabot already active |
| Pinned first on your profile | ✅ |
| Profile README rendering | ✅ |
| Portfolio live on claimed domain | ✅ samuelegwu.vercel.app |
| Availability CTA on portfolio | ✅ |
| **Repo About section** | ❌ **completely empty** |
| judgekit on portfolio | ✅ added as project 02, committed |
| judgekit on resume | ✅ copy ready in [resume.md](resume.md) |
| "Chief Data Science" on resume | ❌ still says this |

---

## 1. Fill the repo About section (2 minutes, highest leverage)

Right now your top pinned card is **blank** — a name, a language, nothing else.
The About text is also what Google and GitHub search show, and topics are how
strangers browsing `llm-evaluation` ever find you.

Go to the repo → the gear icon beside **About** (top right).

Keep the repo **name** as `LLM-as-a-judge` — it is the search term people
actually type, and the Python package being `judgekit` is fine.

**Description** (the pinned card truncates, so the point is in the first line):

```
Most eval tools measure your model — this one measures your judge. Calibration against human labels, measured bias detection, and version-pinned rubrics.
```

**Website:**

```
https://samuelegwu.vercel.app/
```

**Topics** (paste one at a time):

```
llm-evaluation
llm-as-a-judge
evals
llmops
ai-safety
calibration
bias-detection
python
fastapi
kubernetes
prompt-engineering
machine-learning
```

Tick **Releases** and **Packages** in that same panel so `v0.1.0` shows.

---

## 2. Put judgekit on the portfolio — done

Added to `src/content/site.ts` as project **02**, directly after Nivram and
marked `featured`; the rest shifted to 03–08. Typechecks and builds clean,
committed but **not pushed** — pushing deploys it, so that is your call.

It sits above the BrandDrive `LLM Evaluation & Quality System` (now 05)
deliberately: that entry describes better work, but nobody outside BrandDrive
can check a word of it. judgekit is the one a stranger can open and read.

While you are in that file: none of the other projects link to a repo. Anything
with public code should.

---

## 3. Two corrections on the resume

### The CADEMIT title

Two separate problems, and the typo is the smaller one.

**The typo.** "Chief Data Science" is not a job title. Whatever you decide
below, it cannot stay as it is — a typo in your own title is the kind of thing a
reviewer notices and cannot unsee.

**The mismatch.** The title says *Chief Data Scientist*; the bullets underneath
say you led a training programme, mentored 30+ aspiring data scientists and
delivered 120+ hours of instruction. That is a teaching role, and it is a
genuinely good one — but the title promises practice and the bullets deliver
curriculum. A reviewer reading both notices the gap, and the charitable reading
is title inflation.

It also reads badly as a trajectory: *Chief Data Scientist* → *Consultant* →
*Lead AI/ML Engineer* looks like two steps down to someone skimming.

**Recommended:**

```
Chief Data Scientist — Training & Curriculum
```

This keeps the title you actually held, which matters for references and
background checks — never retitle a real role. The qualifier makes the bullets
agree with the heading, and it turns the trajectory problem into a non-issue,
because a training track and an engineering track are not the same ladder.

**If your contract did not literally say "Chief Data Scientist,"** use whichever
of these is true instead: `Lead Data Science Instructor`, or
`Head of Data Science Training`. Both are accurate and neither invites the
inflation reading. Only you know which the paperwork says, and that is the one
that has to go on the CV.

Whichever you pick, teaching 30+ people the full ML lifecycle is a real
credential — it is evidence you can explain hard things, which is most of what
a lead does. Do not hide it behind a title that describes different work.

**Standardise on "Samuel David Egwu" everywhere.**

| Where | Currently | Change to |
| --- | --- | --- |
| LinkedIn | Samuel David Egwu | keep |
| Resume / FlowCV | Egwu David Samuel | **Samuel David Egwu** |
| Portfolio | Egwu David Samuel | **Samuel David Egwu** |
| GitHub profile name | Egwu David Samuel | **Samuel David Egwu** |

Surname-first is normal in Nigeria and reads correctly to a Nigerian reviewer.
It does not survive the trip: an international recruiter reads "Egwu David
Samuel" as first name Egwu, addresses the email to "Hi Egwu", and an ATS files
you under a surname you do not use. LinkedIn's separate first/last fields make
first-name-first the only option there anyway, which means LinkedIn is the one
that is already right and the other three should follow it.

The practical test is a recruiter copying the name off your CV into LinkedIn
search. Today that lookup can fail. Make all four identical and it cannot.

Note `docs/resume.md` currently has **Samuel Egwu** in Personal Details - use the
full three-part form there too, so it matches your LinkedIn exactly.

---

## 4. Add judgekit to the resume

The full entry is written and ready to paste in
**[resume.md → Selected Projects](resume.md)** — it goes first in that section,
above Udara, because it is the only project on the CV a reader can verify for
themselves in thirty seconds.

In FlowCV, put `github.com/Esammy/LLM-as-a-judge` in the project's link field so
it renders as a clickable URL rather than plain text.

---

## 5. LinkedIn

- **Featured** → add the repo link. Featured is the only part of a LinkedIn
  profile that renders a clickable card, and it sits above the fold.
- **Projects** → add judgekit with the same one-liner.
- Post about it once. Not "I built a thing" — lead with the noise-floor finding:
  *a hosted model at temperature 0 is not deterministic, and every position-bias
  measurement that ignores that is reporting its own jitter.* That is a genuinely
  useful observation and it demonstrates the judgement the CV claims.

---

## 6. Then the actual job search

The shopfront is now real, so this is where the time goes. Per
[job-search-plan.md](job-search-plan.md):

1. **Bridge income** — Mercor, Surge, Handshake AI. $70–160/hr part-time, and
   your evaluation background is exactly their hiring profile. This is the
   fastest path off ₦150k/month and it does not require leaving BrandDrive.
2. **Targeted outbound** — 5 a week, not 50. Companies whose product has an eval
   problem you can name in the first line. Reference the repo, not the CV.
3. Repeat weekly. Track replies, not applications.

---

## Still unverified

- **Gemini provider** — no key here, never exercised against the live API. The
  default model id is unchecked; if you get a key, run `pytest -m live` once.
- **LinkedIn content** — LinkedIn blocks automated reads (HTTP 999), so
  everything above about it is from what you have told me, not from checking.
