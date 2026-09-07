# Metric provenance

Every number published on the site, where it comes from, and how to answer when an interviewer picks one and asks "how did you get that?"

Verified 2026-09-07. Re-run the commands before an interview if the codebases have moved.

## Nivram — multi-agent platform

| Claim | Derivation |
| --- | --- |
| 12 agents | `find src/modules/guru/agents -name '*.agent.ts' \| wc -l` → 12 |
| 280+ tools | `find src -name '*.tool.ts' \| wc -l` → 281 (273 in Guru, 8 elsewhere) |
| $0.007 / request | Cost-per-request tracking after model routing work |
| 70%+ of commits | `git log --author=egwusamuel2015 --oneline \| wc -l` → 589 of 828 on `main` |
| 20 components, 12 hooks | `bd-common/modules/nivram` — 20 component dirs, 12 `use*.ts` hooks |

**"12 agents" — what counts as an agent?** One coordinator plus eleven domain specialists (revenue, expenditure, inventory, customer, finance, insight, profile, general knowledge, personal money, personal tracking, responder), each a class extending `BaseAgent` with its own prompt and scoped tool set. The DBA module adds four more agent classes on the same base; the site quotes only the Guru system, so **16 is the honest number across the whole platform** if asked about the total. Say "twelve in the customer-facing system, four more in the internal advisory module" rather than letting the two figures collide.

**"280+ tools" — what counts as a tool?** One `*.tool.ts` file exporting a schema-validated tool definition the model can call. Each carries a typed argument schema, a permission boundary and an audit trail. It is not 280 distinct API endpoints — several are validator or update variants over the same resource. Say "281 registered tool definitions, grouped into roughly N business domains" and be ready to be honest that some are CRUD siblings.

**$0.007 per request.** Be ready to explain the components: model routing by task complexity, prompt caching on repeated context, and scoped tool catalogues keeping input tokens small. Know whether it is a mean or a median and what it excludes.

## LLM evaluation

| Claim | Derivation |
| --- | --- |
| 21 datasets | 21 CSV files under `evaluations/datasets/` |
| 600+ graded cases | 663 CSV lines − 21 headers = 642 rows |
| 55% → 95%+ | Aggregate pass rate across the suite, before and after |

**How is 95% calculated?** This is the question most likely to be asked. The suite scores each case two ways: deterministic checks, plus an LLM judge scoring 1–5 against a reference answer, where pass means score ≥ 4. The judge sees the list of tools actually called, so it does not penalise real figures as fabricated. The judge rubric is version-pinned — any edit to the scoring prompt bumps a version, because two runs scored under different rubrics are not comparable.

Weak spots to own before being asked: it is an LLM grading an LLM, the reference answers are hand-written, and 21 datasets across ten domains is a sample rather than the whole input space.

## Udara

| Claim | Derivation |
| --- | --- |
| 57 golden dialogues | `golden-dialogues.json` array length → 57 |
| 5 LLM providers | `src/ai/providers/` → 5 files |
| 19 data models | `grep -c '^model ' prisma/schema.prisma` → 19 |

**"5 providers" — the honest version.** Four real providers (Anthropic, Gemini, Bedrock, OpenRouter) plus a deterministic stub. The stub is not padding — it is the default, which is what lets the whole suite run with no key and no network — but say "four real plus a stub" rather than letting an interviewer discover the fifth themselves.

## monnieSDK

| Claim | Derivation |
| --- | --- |
| 7 Maven modules | `ls -d monnie-sdk-*` → 7 |
| 0 deps in the API core | `monnie-sdk-api` has no third-party dependencies, enforced at build time |
| 3 model providers | Gemini and OpenAI-shape adapters (Groq, OpenAI), plus the testkit's scripted model |

## Financial intelligence

**₦25M+ in fraudulent transactions identified.** The one number with no repo behind it. Know the boundary of your own contribution: the analysis surfaced the anomalous pattern and traced it; the determination was made by people. Claim the detection work, not the verdict.

## Live products

| Project | Product | Status |
| --- | --- | --- |
| Nivram, evaluation, financial intelligence | [branddrive.co](https://branddrive.co/) | Live. Nivram AI is named on the marketing site. |
| Udara | [useudara.com](https://useudara.com/) | Live. Site publicly names Rubies Microfinance as the banking partner. |
| monnieSDK | [wisemonie.app](https://www.wisemonie.app/) | Product live on Google Play; **the SDK is not shipped in it yet.** |

The site badges cards "Live in X" only for the first two rows. monnieSDK links to Wisemonie but carries no badge, because a link to a live product is not the same claim as your work running inside it. Keep that distinction in interviews — it is the kind of overclaim that is easy to make by accident and expensive to be caught on.

## General rule

Every figure here is a count of something real, which means every figure has a definition, and the definition is where an interviewer will push. Lead with the definition rather than the number — "281 files, each one a schema-validated tool definition" lands better than "280+ tools" followed by a scramble when asked what a tool is.
