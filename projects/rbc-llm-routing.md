---
title: "Royal Bank of Canada (RBC)"
year: "2026"
rank: -1
type: "Work"
subtitle: "Machine Learning Engineer - Intelligent LLM Routing"
image: "/images/rbc-ml-engineer.jpeg"
github: "https://www.linkedin.com/posts/akshay-m-gupta_i-saved-rbc-100000-yesterday-stripe-ugcPost-7496311816260849664-QWI4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEn1XpwBBBgmxP5haGgDe2gobC9FhG-pkGU"
linkLabel: "LinkedIn"
timeline: "Jun 2026 - Sep 2026"
tools: "Qwen 3.5, Llama Factory, GPT-5 mini, Angular, Flask, Python"
overview: "Built a prompt difficulty classifier that routes 10,000+ daily requests to the optimal LLM with 92% accuracy, projected to save RBC $100,000 annually."
features:
  - title: "Intelligent LLM Routing"
    description: "Built a prompt difficulty classifier that scores query complexity before routing each request to the most suitable LLM."
    icon: "code"
  - title: "92% Routing Accuracy"
    description: "Fine-tuned Qwen 3.5 0.8B with Llama Factory and evaluated routing results using GPT-5 mini as an LLM judge."
    icon: "cloud"
  - title: "Production-Scale Impact"
    description: "Deployed a headless application handling 10,000+ requests daily, with projected savings of $100,000 per year."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Enterprise chatbots can access many language models, but sending every request to the most capable model creates unnecessary cost and latency. At the same time, routing a difficult request to a smaller model can reduce answer quality. RBC needed a reliable way to estimate prompt complexity before inference and select the best model for each query.

### Overview & Impact

As a **Machine Learning Engineer at RBC**, I built a prompt difficulty classifier that scores incoming queries and routes them to the optimal LLM. The system achieved **92% routing accuracy**, intercepts more than **10,000 requests per day**, and is projected to save **$100,000 annually** by balancing response quality, latency, and inference cost.

### Technical Implementation

- **Prompt Difficulty Classification:** I developed a classifier that estimates the complexity of each incoming prompt before selecting an appropriate language model.
- **Model Fine-Tuning:** I fine-tuned **Qwen 3.5 0.8B** on an internal RBC dataset using **Llama Factory** to improve routing decisions.
- **Multi-Objective Evaluation:** I incorporated **SWE-bench, TruthfulQA, Finance Agent, cost, latency, and accuracy** into the routing evaluation framework.
- **LLM-as-a-Judge:** I used **GPT-5 mini** to evaluate routing results, which demonstrated 92% accuracy.
- **Full-Stack Integration:** I integrated an **Angular** frontend and **Flask** backend into RBC's chatbot, helping employees understand which LLM is best suited to their requests.
- **Headless Deployment:** I deployed the classifier as a headless application that intercepts and routes more than 10,000 chatbot requests each day.

### Challenges

The core challenge was balancing several competing goals: model quality, response latency, and inference cost. A routing decision that optimized only one metric could degrade the overall employee experience, so the evaluation framework needed to combine benchmark performance with real production constraints and remain reliable across technical, financial, and general-knowledge prompts.

### Next Steps

The next phase is to continuously recalibrate routing thresholds using production feedback, expand support for newly available models, and introduce confidence-aware fallbacks for ambiguous or unusually complex requests.
