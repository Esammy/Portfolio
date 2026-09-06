/**
 * EDIT THIS FILE - it is the single source of truth for the site.
 * Everything the visitor reads comes from here.
 */

export const site = {
  name: "Samuel Egwu",
  initials: "SE",
  role: "Lead AI/ML Engineer",
  tagline:
    "AI/ML Engineer building production-grade intelligent systems - agentic AI, evaluation, and the infrastructure underneath.",
  // Used for canonical URLs, sitemap and social cards. Set this to your real domain after deploying.
  url: "https://samuelegwu.vercel.app",
  location: "Abuja, Nigeria",
  availability: "Open to AI/ML engineering roles",
};

/**
 * FILL THESE IN before you deploy.
 * Any link left as an empty string is hidden from the page - nothing
 * breaks, the row simply does not render.
 */
export const contact = {
  email: "egwusamuel2015@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-david-egwu-aa6484184/",
  github: "https://github.com/Esammy",
  // A public phone number attracts recruiter spam. Blank it to hide the row.
  phone: "+234 810 036 8023",
  x: "",
  // Drop the PDF at public/assets/samuel-egwu-cv.pdf and set this to
  // "/assets/samuel-egwu-cv.pdf" to show a Resume button in the hero.
  resume: "",
};

/**
 * Portrait. Drop a photo at public/assets/samuel.jpg and this picks it up.
 * Set to null and the site renders a designed monogram panel instead -
 * it reads as intentional either way.
 */
export const portrait: { src: string; alt: string } | null = {
  src: "/assets/samuel.jpg",
  alt: "Samuel Egwu, Lead AI/ML Engineer",
};

// Set this to null (or delete the file) and both sections fall back to the
// monogram panel instead.

export const heroStats = [
  { value: "12", label: "specialised agents in production" },
  { value: "280+", label: "schema-validated tools" },
  { value: "95%+", label: "evaluation suite score" },
];

export const capabilities = [
  "AGENTIC AI",
  "LLM EVALUATION",
  "AI SAFETY RAILS",
  "MACHINE LEARNING",
  "AI INFRASTRUCTURE",
  "PRODUCTION SYSTEMS",
];

export type Project = {
  slug: string;
  index: string;
  category: string;
  title: string;
  summary: string;
  featured?: boolean;
  metrics?: { value: string; label: string }[];
  callout?: { value: string; label: string };
  tags: string[];
  /** Long-form content shown in the case-study dialog. */
  study: {
    lead: string;
    work: string[];
    outcome: string[];
  };
  /** Optional external link shown in the dialog footer. */
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "nivram",
    index: "01",
    category: "Agentic AI / Production",
    title: "Nivram — Production Multi-Agent AI Platform",
    summary:
      "A production AI platform for business and personal banking: a coordinator routing to eleven specialist agents over 280+ schema-validated tools — plus the chat product it ships inside, which I built end to end.",
    featured: true,
    metrics: [
      { value: "12", label: "agents" },
      { value: "280+", label: "tools" },
      { value: "$0.007", label: "typical request" },
    ],
    tags: [
      "LangChain",
      "TypeScript",
      "Tool Calling",
      "React",
      "Streaming",
      "AWS",
    ],
    study: {
      lead: "A conversational surface sitting in front of a real banking product, where a wrong answer is not a bad demo — it is a support ticket. I own it from the agent graph down to the chat window the customer types into.",
      work: [
        "Designed the agent topology as a coordinator plus eleven domain specialists — revenue, expenditure, inventory, customers, finance, insight, profile, personal money and more — so each one carries a small prompt and a scoped tool set instead of one oversized brain that degrades as scope grows.",
        "Built the tool layer to 280+ schema-validated definitions. Every capability the model can reach is a typed contract with a permission boundary and an audit trail, never open database access.",
        "Solved tool selection at that scale by scoping the catalogue per agent and per active workflow, so context stays small even though the platform's total surface is large.",
        "Added a second multi-agent system on the same foundation — a research and advisory board where a chief architect, deep researcher, devil's advocate and internal auditor argue a business question before a responder writes the answer.",
        "Built the front end myself: 21 React components and 14 hooks covering token-by-token streaming, conversation rooms and members, document Q&A, feedback capture, and a credits and top-up flow wired to payment callbacks.",
        "Tuned the cost path end to end — model routing per task, caching on repeated context, and streaming so time-to-first-token stays low regardless of how long the full answer takes.",
      ],
      outcome: [
        "A typical request settles around $0.007, which makes the system affordable to run at real user volume.",
        "The agent boundary doubles as a security boundary: data access is explicit, reviewable and revocable.",
        "New capability ships as a new tool rather than a prompt rewrite, so the platform grows without regressing what already worked.",
        "The largest single contributor to the codebase — roughly 840 of its 1,080 commits.",
      ],
    },
  },
  {
    slug: "udara",
    index: "02",
    category: "Agentic AI / Fintech",
    title: "Udara — A WhatsApp Agent That Governs Real Money",
    summary:
      "A savings agent running over WhatsApp on top of a live microfinance account. It enforces a spending window, confirm-before-send transfers and allowance limits — with the model deliberately kept out of the money path.",
    metrics: [
      { value: "57", label: "golden dialogues" },
      { value: "5", label: "LLM providers" },
      { value: "19", label: "data models" },
    ],
    tags: ["NestJS", "Prisma", "PostgreSQL", "LLM Guardrails", "Evals"],
    study: {
      lead: "The interesting constraint was not making the agent smart. It was making an LLM safe to point at a real bank account, where the failure mode is somebody's rent.",
      work: [
        "Split the turn into propose and execute: the model proposes an action, a separate validator checks it against the eligible surfaces for that conversation state, and only then does an executor run it. The model never holds a handle to money.",
        "Kept the deterministic money path free of the LLM entirely — confirm and cancel buttons, the transfer wizard and the PIN gate never wait on a model response, so a provider outage degrades conversation quality rather than breaking transfers.",
        "Wrote 57 golden dialogues as a regression suite: each fixes a conversation state, a mocked model proposal and the set of actions that should survive validation, so a prompt change that widens the model's reach fails in CI.",
        "Made the provider pluggable across Anthropic, Gemini, Bedrock, OpenRouter and a deterministic stub — the stub is the default, so the whole test suite runs with no key and no network.",
        "Enforced product guardrails in code rather than in the prompt: a daily spending window, daily and weekly allowances, and a delayed 'managers' approval path that deliberately makes loosening your own limits slow.",
        "Backed it with a 19-model Postgres schema through Prisma, including full LLM call logging, so every turn is reconstructable after the fact.",
      ],
      outcome: [
        "An agent with real financial authority whose blast radius is bounded by code, not by prompt wording.",
        "Prompt and model changes are testable — the golden suite catches a widened action surface before deploy.",
        "CI runs security invariants, a secret scan and redaction checks on every push.",
      ],
    },
  },
  {
    slug: "monnie-sdk",
    index: "03",
    category: "AI Infrastructure / Java",
    title: "monnieSDK — Agentic AI SDK in Java",
    summary:
      "A Java 17 library that turns a question about your money into a grounded answer or an actionable confirmation card, with the model kept behind a port so the provider is a configuration change.",
    metrics: [
      { value: "7", label: "Maven modules" },
      { value: "3", label: "model providers" },
      { value: "0", label: "deps in the API core" },
    ],
    tags: ["Java 17", "Hexagonal Architecture", "Maven", "Groq", "Gemini"],
    study: {
      lead: "Most agent tooling assumes Python or TypeScript. This one had to live inside a Spring Boot backend, so I built it as a proper Java library — ports and adapters, published to GitHub Packages, consumed as a dependency.",
      work: [
        "Structured it as seven Maven modules around a dependency rule: the API module has zero third-party dependencies, enforced at build time, and a provider adapter may depend on the API only — never on the core, never on the other adapter. That rule is what makes swapping providers a config change rather than a refactor.",
        "Wrote a figure-fabrication guard that refuses to let the agent state a number it was never given: every figure in an answer must trace back to a tool result, a failure triggers one corrective retry, and a second failure fails the turn closed rather than shipping a confident lie.",
        "Designed a prepare/confirm protocol for mutations — the SDK builds a validated prepared action with a risk tier and a hash of its parameters, the host executes it, and a tampered or stale confirmation is rejected. The SDK itself never calls an executor.",
        "Built the turn engine around scoped cancellation, per-turn timers and streamed event frames, so a long turn can be abandoned cleanly and the UI can render progress rather than a spinner.",
        "Shipped a testkit of fakes — a scripted model, in-memory stores, a sample budget — so an ordinary build needs no API key and no network, while live provider suites activate automatically when a key is present.",
      ],
      outcome: [
        "The host backend integrates an agent by implementing three read ports; everything else ships with a working default.",
        "Provider migration is a configuration line, not a code change.",
        "Documented thoroughly enough that a new developer with only a JDK can build, run and publish it from the README alone.",
        "Designed and written solo, end to end.",
      ],
    },
  },
  {
    slug: "eval",
    index: "04",
    category: "LLMOps / Evaluation",
    title: "LLM Evaluation & Quality System",
    summary:
      "A repeatable evaluation loop built on versioned datasets, multi-turn conversations, a rubric-versioned LLM judge and quality gates.",
    metrics: [
      { value: "21", label: "datasets" },
      { value: "600+", label: "graded cases" },
      { value: "55→95%+", label: "score" },
    ],
    tags: ["LLM-as-Judge", "Golden Sets", "Observability", "CI Gates"],
    study: {
      lead: "You cannot improve a model you cannot measure. This is the harness that turned “it feels better” into a number the team could argue with.",
      work: [
        "Built 21 versioned datasets across ten business domains, split into single-shot and multi-turn conversations, covering more than 600 graded cases — including flows where the failure only appears on turn three.",
        "Combined deterministic checks with an LLM judge, and versioned the judge rubric itself: any edit to the scoring prompt bumps a version, because two runs scored under different rubrics are not comparable.",
        "Gave the judge the list of tools the assistant actually called, which removed its most common false negative — penalising real figures as 'fabricated' simply because it could not see where they came from.",
        "Wired the suite into the release path as a quality gate, so a regression blocks the change instead of reaching users.",
        "Instrumented traces across prompts, retrieval, tool calls, latency and cost, so a failing score points at the layer that caused it.",
      ],
      outcome: [
        "Overall evaluation score moved from 55% to consistently above 95%.",
        "Regressions surface before deployment rather than through user reports.",
        "Prompt and model changes became measurable experiments instead of judgement calls.",
      ],
    },
  },
  {
    slug: "finance",
    index: "05",
    category: "AI / Financial Intelligence",
    title: "AI Financial Intelligence",
    summary:
      "AI-assisted analysis that surfaced anomalous transaction patterns and helped trace a material financial irregularity.",
    callout: {
      value: "₦25M+",
      label: "in fraudulent transactions identified",
    },
    tags: ["Anomaly Detection", "AI Agents", "Structured Data"],
    study: {
      lead: "Transaction data at volume hides its own story. The work was building something that could read the ledger the way an investigator would.",
      work: [
        "Modelled normal transaction behaviour first, so that “anomalous” had a baseline to be anomalous against.",
        "Combined statistical anomaly detection over structured records with agent-driven investigation, following a flagged pattern across related accounts and time windows.",
        "Kept every finding traceable back to the underlying records. The output is evidence, not an opinion from a model.",
      ],
      outcome: [
        "Surfaced patterns that manual review had not caught.",
        "Contributed to identifying fraudulent transactions exceeding ₦25 million, with traceable evidence for the investigation.",
      ],
    },
  },
  {
    slug: "forecast",
    index: "06",
    category: "Machine Learning / Forecasting",
    title: "Business Sales Forecasting",
    summary:
      "An end-to-end sales forecasting system built on Chronos foundation models, benchmarked honestly against tuned classical baselines.",
    tags: ["Time Series", "Forecasting", "Chronos", "Python"],
    study: {
      lead: "Forecasting sales for a real business, and testing whether pretrained time-series models earn their place against well-tuned classical baselines.",
      work: [
        "Built the feature and seasonality treatment first - trend, calendar effects and promotional spikes - so the baseline was honest.",
        "Benchmarked Amazon's Chronos time-series foundation models against classical and gradient-boosted baselines on identical splits.",
        "Evaluated with backtesting over rolling origins rather than a single holdout, so the numbers reflect how the model would actually be used.",
      ],
      outcome: [
        "A forecasting setup that is reproducible and honestly evaluated.",
        "A clear read on where foundation models help and where a tuned baseline still wins.",
      ],
    },
  },
  {
    slug: "student",
    index: "07",
    category: "Master's Research / ML",
    title: "Student Performance Prediction",
    summary:
      "Research applying L-PBBO-ES feature selection with a Gradient Boosting classifier to model student academic performance.",
    tags: ["Feature Selection", "GBM", "Research"],
    study: {
      lead: "A research project on whether a metaheuristic feature-selection strategy can beat standard selection on educational data.",
      work: [
        "Implemented L-PBBO-ES feature selection to search the feature space rather than relying on filter methods alone.",
        "Paired the selected feature set with a Gradient Boosting classifier and evaluated it against baseline selection strategies.",
        "Validated with cross-validation, reporting the metrics that matter for an imbalanced classification problem rather than accuracy alone.",
      ],
      outcome: [
        "A smaller, more interpretable feature set with competitive predictive performance.",
        "A documented, reproducible methodology.",
      ],
    },
  },
];

export const systemLoop = [
  {
    index: "01",
    title: "Evaluate",
    body: "Golden datasets, multi-turn tests, a version-pinned judge rubric, and quality gates that block a bad release.",
  },
  {
    index: "02",
    title: "Observe",
    body: "Traces across prompts, retrieval, tool calls, latency, cost and outcomes - with the feedback loop closed.",
  },
  {
    index: "03",
    title: "Operate",
    body: "Tool boundaries, validators between proposal and execution, access control, and the safeguards that keep a system upright under real traffic.",
  },
];

export const principles = [
  {
    index: "01",
    title: "Make it measurable",
    body: "Define what good looks like before optimising anything. Evaluation is part of the product, not a phase after it.",
  },
  {
    index: "02",
    title: "Never let the model hold the keys",
    body: "An LLM proposes; a validator decides; an executor acts. Money paths and destructive actions stay deterministic, so a bad generation is a bad sentence rather than a bad transaction.",
  },
  {
    index: "03",
    title: "Ground every claim",
    body: "A figure the system states must trace back to something a tool actually returned. When it cannot, fail closed rather than ship a confident lie.",
  },
  {
    index: "04",
    title: "Optimise the whole path",
    body: "Model choice is one lever. Caching, routing, streaming and orchestration shape cost and latency just as much.",
  },
  {
    index: "05",
    title: "Protect the data boundary",
    body: "AI systems should reach business data through controlled, auditable interfaces - never unrestricted database access.",
  },
  {
    index: "06",
    title: "Ship for reality",
    body: "Containers, cloud infrastructure, monitoring and failure handling are what separate a demo from a system.",
  },
];

export const stack = [
  {
    group: "Languages & ML",
    items: [
      "Python",
      "TypeScript",
      "Java 17",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "LightGBM",
      "XGBoost",
    ],
  },
  {
    group: "LLM & Agents",
    items: [
      "LangChain",
      "LangGraph",
      "Transformers",
      "OpenAI",
      "Anthropic",
      "Gemini",
      "AWS Bedrock",
      "Groq",
      "Mistral",
    ],
  },
  {
    group: "Backend & Data",
    items: [
      "NestJS",
      "FastAPI",
      "Flask",
      "Django",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Celery",
    ],
  },
  {
    group: "Product & Infra",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Jest / Pytest",
    ],
  },
];

export const about = {
  kicker: "ABOUT SAMUEL",
  heading: "From models to systems.",
  paragraphs: [
    "I'm Samuel Egwu, Lead AI/ML Engineer at BrandDrive, with 4+ years building intelligent systems that make it past the prototype and into production.",
    "My work spans traditional machine learning, LLM applications, agentic AI, evaluation, and the infrastructure needed to operate all of it reliably. Lately most of it has been agents with real authority — over a bank account, over a business's books — which is where the engineering gets interesting.",
    "The part I enjoy most is what comes after the first successful demo: how do we measure it, how do we make it cheaper, how do we make it safer, and how do we keep it working?",
  ],
  facts: [
    { label: "Based in", value: "Abuja, NG" },
    { label: "Focus", value: "Agentic AI + ML" },
    { label: "Experience", value: "4+ years" },
  ],
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  place: string;
  current?: boolean;
  points: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    period: "Mar 2025 — present",
    title: "Lead AI/ML Engineer",
    org: "BrandDrive",
    place: "Abuja, Nigeria",
    current: true,
    points: [
      "Architected and deployed a production multi-agent AI platform for business and personal banking across web, mobile and WhatsApp.",
      "Built the LLM evaluation and regression-testing framework that moved system quality from ~55% to consistently above 95%.",
      "Engineered cost-aware model routing down to ~$0.007 per request, and cut latency through prompt caching, incremental streaming, agent reuse and fast-path execution.",
      "Designed secure execution for sensitive financial operations: human-in-the-loop approval, permission-aware tool access, auth propagation and PIN verification.",
    ],
    tech: ["Python", "TypeScript", "LangChain", "LangGraph", "Node.js", "AWS"],
  },
  {
    period: "Nov 2023 — Feb 2025",
    title: "Machine Learning Consultant",
    org: "Independent",
    place: "Remote",
    points: [
      "Delivered end-to-end ML solutions for clients in fintech, e-commerce and healthcare — data preparation through to deployment and business integration.",
      "Built predictive analytics for forecasting, classification and decision support using supervised and deep learning methods.",
      "Translated business requirements into production-oriented ML, defining objectives and evaluation metrics with stakeholders rather than inheriting them.",
    ],
    tech: ["Python", "TensorFlow", "scikit-learn", "Pandas", "SQL", "Tableau"],
  },
  {
    period: "Mar 2022 — Nov 2023",
    title: "Chief Data Science",
    org: "CADEMIT",
    place: "Minna, Nigeria",
    points: [
      "Led the data science training programme, mentoring 30+ aspiring data scientists through the full ML lifecycle.",
      "Designed and delivered 120+ hours of hands-on training and 15+ technical workshops across ML, deep learning, NLP, Python, SQL and Git.",
      "Built project-based curricula focused on turning theory into engineering that actually ships.",
    ],
    tech: ["Python", "SQL", "TensorFlow", "scikit-learn", "Jupyter", "Git"],
  },
];

export const credentials = [
  {
    label: "Education",
    value: "BSc Computer Science",
    detail: "Federal University of Technology, Minna",
  },
  {
    label: "Speaking",
    value: "Keynote, Nigerian Society of Engineers",
    detail: "“The Synergy of AI and Engineering” — 100+ engineers, Nov 2023",
  },
  {
    label: "Mentoring",
    value: "30+ data scientists trained",
    detail: "120+ hours of instruction, 15+ workshops delivered",
  },
];
