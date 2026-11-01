---
title: "NavCane"
year: "2026"
rank: 3
subtitle: "JAMHacks 10 — AI-Powered Assistive Navigation"
image: "/images/navcane-enhanced.png"
github: "https://devpost.com/software/navcane"
linkLabel: "Check it out"
video: "/videos/navcane.mp4"
timeline: "Jun 2026"
tools: "Next.js, Python, YOLO11m, Gemma, LLaVA, Ollama, QLoRA, Tailwind CSS"
overview: "Built a wearable AI navigation assistant that describes nearby obstacles, reasons about safe paths, and gives real-time audio guidance to blind and visually impaired users."
features:
  - title: "Real-Time Detection"
    description: "Uses YOLO11m to identify nearby people and obstacles with low-latency feedback."
    icon: "code"
  - title: "Context-Aware Routing"
    description: "Routes scenes between local and cloud vision-language models based on urgency and context."
    icon: "cloud"
  - title: "Navigation-Tuned VLM"
    description: "Fine-tunes Gemma with QLoRA to turn visual detections into practical path guidance."
    icon: "terminal"
---

### The Problem

A traditional white cane can only detect what it physically reaches. Obstacles farther ahead remain unknown, making unfamiliar and crowded environments harder to navigate independently. We asked whether a wearable camera and phone could provide useful spatial context before contact occurs.

### Overview & Impact

Built for **JAMHacks 10**, NavCane is a wearable assistive navigation system that translates a live camera feed into concise audio directions. Instead of merely listing objects, it explains where obstacles are and suggests a clearer route around them.

Learn more here: <u><a href="https://www.youtube.com/watch?v=t6SWwYTR-Jo">YouTube Demo</a></u> · <u><a href="https://devpost.com/software/navcane">Devpost</a></u>.

### How It Works

NavCane uses a two-stage vision pipeline. **YOLO11m** runs first for low-latency object detection. The system then routes the scene to a vision-language model for richer spatial reasoning: a local **LLaVA model through Ollama** handles privacy-sensitive situations, while **Gemma** provides more detailed scene understanding when additional latency is acceptable.

### Model Adaptation

We created a 5,000-example navigation dataset using campus footage, indoor COCO images, and synthetic Blender scenes. Each image was paired with guidance about obstacle positions and safe traversal. Using **QLoRA**, we adapted a 26B Gemma checkpoint while training only a small fraction of its parameters, making the process feasible on a single GPU.

### Technical Architecture

- Built the application with **Next.js, Tailwind CSS, and Python**.
- Combined real-time object detection with context-aware VLM routing.
- Used first-person, navigation-focused prompts to prioritize actionable directions over generic image descriptions.
- Designed a map and camera interface for live guidance across the University of Waterloo campus.

### Next Steps

Future work includes reducing end-to-end latency, expanding real-world testing, improving distance estimation, and refining the audio experience with feedback from blind and visually impaired users.
