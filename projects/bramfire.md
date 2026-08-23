---
title: "BramFire Labs"
year: "2025"
rank: 5
subtitle: "Amazon x BramHacks 2025 Winner"
image: "/images/bramfire_mockup.png"
github: "https://github.com/AkshayG99/BramHacks2025"
timeline: "2025"
tools: "Python, YOLOv11, TypeScript, Gemini API, Flask, Node.js"
overview: "Won Amazon x BramHacks 2025 for an AI-powered wildfire detection platform leveraging satellite data + drone imagery."
features:
  - title: "Geospatial Pipeline"
    description: "Built a real-time geospatial data pipeline and fine-tuned a YOLOv11 model for early fire detection with high recall."
    icon: "cloud"
  - title: "Live Dashboard"
    description: "Developed a full-stack dashboard for live inference, alerting, and heat-map visualization of fire-risk regions."
    icon: "code"
  - title: "Twilio Notifications"
    description: "Implemented a Twilio notification system to automatically text/call subscribed users and emergency dispatchers."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Imagine you are an emergency dispatcher watching a dry, windy summer afternoon unfold. Deep in a remote forest, a spark ignites. By the time a hiker notices the smoke hours later and calls it in, the fire has already consumed hundreds of acres and is threatening nearby towns. Traditional watchtowers and low-resolution satellite updates are simply too slow; you are always reacting to the disaster instead of preventing it. You need a system that can see the very first plume of smoke the second it appears.

### Overview & Impact

We won the **Amazon x BramHacks 2025** hackathon out of 125 competing teams by developing BramFire Labs—an AI-powered wildfire detection platform that leverages the combined capabilities of satellite data and drone imagery to provide early warnings.

### Technical Implementation

- **Geospatial Pipeline:** We built a real-time geospatial data pipeline that processes incoming aerial imagery and feeds it to our machine learning model.
- **Computer Vision (YOLOv11):** We fine-tuned a **YOLOv11** object detection model, optimizing it for the early detection of fires and smoke plumes with exceptionally high recall.
- **Live Dashboard:** We developed a full-stack dashboard (using **TypeScript, Node.js, and Flask**) that provides live inference results, active alerting, and a dynamic heat-map visualization of high-risk fire regions.
- **Twilio Integration:** We implemented a robust notification system using the Twilio API that automatically dispatches text messages and calls to subscribed users and emergency dispatchers the moment a fire is detected.

### Challenges

Processing high-resolution satellite imagery in real-time caused our backend to bottleneck during the hackathon. We had to implement aggressive image downscaling and asynchronous processing to ensure the YOLOv11 model could run inference fast enough to provide meaningful early warnings.

### Next Steps

Deploying the inference engine directly onto edge devices (such as a Raspberry Pi mounted on the drones) to remove the latency of sending video feeds to a centralized cloud server.
