---
title: "Triviality"
year: "2026"
rank: 1
subtitle: "Hack the North 2026 — Best Use of Vultr & Runner-up for Best Use of Cognition"
image: "/images/triviality.png"
github: "https://brojust.study/"
linkLabel: "Check it out"
video: "/videos/triviality.mp4"
timeline: "Sep 2026"
tools: "Next.js, TypeScript, Python, openJiuwen SwarmFlow, Node.js, MongoDB, Redis, Lean 4, Vultr"
overview: "Built an AI research workspace that coordinates specialized agent teams to explore mathematical problems, challenge proposed solutions, and verify conclusions with formal proof checkers."
features:
  - title: "Research Agent Swarms"
    description: "Coordinates a six-agent team of researchers, a challenger, a proof writer, and a research coordinator."
    icon: "cloud"
  - title: "Interactive Math Atlas"
    description: "Maps mathematical fields, problems, sources, and research relationships in an explorable 3D graph."
    icon: "code"
  - title: "Formal Verification"
    description: "Submits reviewed proof candidates to Lean 4 and returns verification feedback to the research workflow."
    icon: "terminal"
---

### The Problem

Mathematical research is rarely a straight path. Promising ideas can hide unsupported assumptions, several approaches may need to be explored in parallel, and a convincing explanation is not the same as a formally verified proof. We wanted to create a workspace that could preserve this exploratory process while making every claim and artifact inspectable.

### Overview & Impact

At **Hack the North 2026**, our team built Triviality and won **Best Use of Vultr**, while placing second for **Best Use of Cognition**. Triviality combines an interactive mathematical atlas with an AI research workspace, allowing researchers to explore open problems, coordinate specialized agents, and inspect the evidence behind their conclusions.

Learn more here: <u><a href="https://github.com/sharonbasovich/norththehackers/tree/main">GitHub</a></u> · <u><a href="https://www.youtube.com/watch?v=JoDcHAMOXgo">YouTube Demo</a></u> · <u><a href="https://devpost.com/software/rbc-buddies">Devpost</a></u>.

### How It Works

Each investigation uses a six-agent research team. A coordinator develops three distinct directions, and SwarmFlow's `parallel()` API runs the researchers concurrently with independent contexts. A challenger returns structured feedback identifying questionable claims, mathematical evidence, unresolved gaps, and proposed tests. Reported refutations retire an approach, while repeated stagnation prompts the coordinator to assign a new direction. A proof writer then converts reviewed arguments into formal proof candidates.

Findings, criticism, failed approaches, and supporting evidence remain available in a shared discovery bank. This preserves useful partial work and allows replacement research branches to learn from previous attempts instead of repeating them.

### Verified Results

- **Trihexagonal shell counterexample:** Triviality found a connected 23-cell shell enclosing 31 cells, disproving a proposed upper bound of 29. The construction was checked with a Lean 4 and Mathlib certificate.
- **Constrained 5×5 grid:** The system established that exactly 12 cells can be marked while avoiding axis-aligned rectangles and limiting the number of marked cells on each diagonal.

### Technical Architecture

- Built the frontend with **Next.js, React, TypeScript, Tailwind CSS, Three.js, and KaTeX**.
- Built the **WorkSwarm** research harness around **Huawei openJiuwen SwarmFlow**, using programmable Python workflows for parallel exploration, agent handoffs, and review cycles.
- Packaged the complete research protocol as a reusable **Swarm Skill**, including its role definitions, coordination rules, and executable workflow.
- Kept orchestration separate from model execution so individual research roles can use different models without changing the underlying process.
- Connected the Python runtime to a Node.js worker through structured **JSON-lines events**, with investigation progress persisted for the dashboard.
- Used **MongoDB** for research history and graph relationships, **Redis** for background jobs, and **OpenAlex** for literature retrieval.
- Embedded SwarmFlow at a pinned revision, verified its integrity at startup, and used its journal to replay completed agent calls when workflow inputs remained unchanged.
- Hosted mathematical experiment workers and the **Lean 4** verification runner on **Vultr**, feeding counterexamples and compiler errors back into the research loop for further revision.

### Challenges

The hardest part was making parallel agents genuinely collaborate instead of repeating the same idea. We separated their contexts, introduced structured evidence sharing and adversarial review, and distinguished between a reported claim, a challenger-approved argument, and a formally checked result.

### Next Steps

Future work includes stronger literature retrieval, resumable long-running investigations, clearer review of model-generated formal statements, and evaluation against single-agent research baselines.
