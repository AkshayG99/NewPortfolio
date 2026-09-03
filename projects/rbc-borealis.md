---
title: "RBC Borealis"
year: "2026"
rank: 0
type: "Work"
subtitle: "Part-Time Machine Learning Researcher - Tabular Reasoning"
image: "/images/rbc-borealis-researcher.jpg"
timeline: "Jun 2026 - Sep 2026"
tools: "Qwen, DisCO, GRPO, Llama Factory, Python, PR-AUC"
overview: "Redesigned the reward and evaluation framework for an RL-trained tabular reasoning LLM to address minority-class collapse on imbalanced credit datasets."
features:
  - title: "Minority-Class Recovery"
    description: "Redesigned the reward function for a GRPO-based tabular reasoning LLM to address minority-class collapse."
    icon: "code"
  - title: "DisCO Fine-Tuning"
    description: "Applied DisCO as an alternative to GRPO for reinforcement-learning fine-tuning on imbalanced tabular classification tasks."
    icon: "cloud"
  - title: "PR-AUC Evaluation"
    description: "Replaced F1 with PR-AUC to better measure minority-class detection on highly skewed credit datasets."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Tabular reasoning models trained on highly imbalanced credit datasets can learn to favor the majority class, producing strong aggregate results while failing to detect the rare cases that matter most. The existing GRPO-based reward function and F1 evaluation did not adequately capture this minority-class collapse.

### Overview & Impact

As a **Part-Time Machine Learning Researcher at RBC Borealis**, I redesigned the reinforcement-learning reward and evaluation framework for a tabular reasoning LLM. The work focused on improving minority-class detection on skewed credit datasets while preserving the model's ability to produce clear chain-of-thought rationales.

### Technical Implementation

- **Reward Function Redesign:** I redesigned the reward function for a **GRPO-based tabular reasoning LLM** to directly address minority-class collapse.
- **DisCO Reinforcement Learning:** I used **DisCO** as an alternative to GRPO for imbalanced classification when reinforcement-learning fine-tuning Qwen on tabular reasoning tasks.
- **Evaluation Strategy:** I replaced F1 with **PR-AUC** to better capture minority-class detection performance on skewed credit datasets.
- **Reasoning Alignment:** I fine-tuned **Qwen** on tabular reasoning data using **Llama Factory**, aligning the model with chain-of-thought rationales.

### Challenges

Optimizing an LLM for imbalanced classification required more than improving overall accuracy. The reward signal needed to discourage majority-class shortcuts without destabilizing training, while the evaluation metric had to reflect performance on rare but consequential examples. Maintaining useful reasoning behavior throughout reinforcement-learning fine-tuning added another layer of complexity.

### Next Steps

Future work includes validating the redesigned reward across additional tabular datasets, measuring calibration alongside PR-AUC, and exploring adaptive reward weighting based on class prevalence and prediction confidence.
