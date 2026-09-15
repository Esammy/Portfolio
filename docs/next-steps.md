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
| **judgekit on portfolio** | ❌ **absent** |
| **judgekit on resume** | ❌ **absent** |
| "Chief Data Science" on resume | ❌ still says this |

---

## 1. Fill the repo About section (2 minutes, highest leverage)

Right now your top pinned card is **blank** — a name, a language, nothing else.
The About text is also what Google and GitHub search show, and topics are how
strangers browsing `llm-evaluation` ever find you.

Go to the repo → the gear icon beside **About** (top right).

**Description:**

```
Most eval tools measure your model. This one measures your judge. Calibration against human labels, position/verbosity/self-preference bias detection with a noise floor, and version-pinned rubrics that refuse to compare across versions.
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

## 2. Put judgekit on the portfolio

It is the **only** project on your site a stranger can click into and read the
code of. Right now `LLM Evaluation & Quality System` (index 04) is the
BrandDrive one — closed source, unverifiable, and nobody can check it.

In `src/content/site.ts`, insert after the Nivram entry and renumber the rest.

```ts
{
  slug: "judgekit",
  index: "02",
  category: "Open Source / LLM Evaluation",
  title: "judgekit — Measuring the Judge, Not Just the Model",
  summary:
    "An open-source framework for the question almost nobody asks: is the LLM grading your outputs any good? Calibration against human labels, bias detection with a noise floor, and rubrics that refuse to be compared across versions.",
  metrics: [
    { value: "448", label: "tests, offline" },
    { value: "94%", label: "coverage" },
    { value: "0.82", label: "kappa, live judge" },
  ],
  tags: ["Python", "FastAPI", "Kubernetes", "Pydantic", "Groq", "Apache-2.0"],
  study: {
    lead:
      "DeepEval, Ragas and promptfoo all evaluate the model. Almost nothing rigorously evaluates the judge — so teams track a quality number for months without ever checking whether the thing producing it agrees with a human. I hit this in production when a judge flagged correct figures as hallucinated because it could not see the tool calls that produced them.",
    work: [
      "Content-fingerprinted rubrics: comparing two runs graded under different rubric versions raises rather than returns a number, and a lockfile fails CI when a published rubric is edited in place.",
      "Calibration against human labels — quadratic weighted kappa, Krippendorff's alpha, Spearman, a confusion matrix — with --min-kappa as a build gate. Quadratic weighting matters: the same judge scores 0.70 weighted and 0.36 plain, and plain kappa makes usable judges look broken.",
      "Bias detection that reports a magnitude, not a checkbox: position, verbosity and self-preference. Verbosity is measured against the judge-minus-human residual, because correlating length with score just rediscovers that long answers are often better.",
      "A noise floor on position bias. A hosted model at temperature 0 is not deterministic — 2 of 8 cases drifted up to 0.57 scale points across identical runs, which was exactly what the detector had been reporting as slot preference. Each case is now scored a third time in the same slot, and a finding must clear the judge's own variance.",
      "Evidence as a first-class field, so 'unverifiable' and 'wrong' stay different findings — one is a model problem, the other a logging problem.",
      "Shipped as a library, a CLI, a FastAPI service with an arq worker pool, Kustomize manifests with an HPA, and a Next.js dashboard. Deployed to minikube: 630 queued runs, pool scaling 1 → 4 → 6 under backlog.",
    ],
    outcome: [
      "448 tests at 94% coverage that run with no API key and no network — CI proves it by blackholing DNS rather than asserting it.",
      "The tool applies its own gates to itself on every PR: rubric verify, calibration floor, bias threshold.",
      "Against a live judge it found something real — ranks cases almost exactly as humans do (Spearman 0.94) while sitting 0.62 points generous, which is a threshold to move rather than a rubric to rewrite.",
    ],
  },
  link: {
    href: "https://github.com/Esammy/LLM-as-a-judge",
    label: "Read the code",
  },
},
```

Also worth doing while you are in there: the other projects have no repo links.
Anything with public code should link to it.

---

## 3. Two corrections on the resume

**"Chief Data Science" → "Chief Data Scientist."** This is still on the live
resume. A typo in your own job title is the kind of thing a reviewer notices and
cannot unsee.

**Pick one name and use it everywhere.** Right now:

| Where | Name |
| --- | --- |
| Resume | Egwu David Samuel |
| Portfolio | Egwu David Samuel |
| GitHub | Egwu David Samuel |
| LinkedIn | Samuel David Egwu |

Three of four agree, so the cheapest fix is changing LinkedIn — but whichever you
choose, a recruiter searching the name on your CV should find your LinkedIn
first try.

---

## 4. Add judgekit to the resume

Under **Projects**, above Udara:

> **judgekit — Open-Source LLM-as-a-Judge Evaluation Framework** · Python, FastAPI, Kubernetes
> github.com/Esammy/LLM-as-a-judge
>
> - Built and published a framework that measures LLM judges rather than models — calibration against human labels (quadratic kappa, Krippendorff's alpha, Spearman), and position/verbosity/self-preference bias detection reporting measured magnitudes.
> - Added a noise floor to position-bias detection after measuring that a hosted model at temperature 0 moved 2 of 8 cases by up to 0.57 scale points across identical runs — without it the detector reported sampling variance as bias.
> - Version-pinned rubrics with content fingerprints; the runner refuses to compare scores graded under different rubrics, and a lockfile fails CI on an in-place edit.
> - 448 tests at 94% coverage running with no API key and no network, proven in CI by blackholing DNS; shipped with Docker, Kustomize manifests and an HPA, verified on minikube scaling a worker pool 1 → 6 under backlog.

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
