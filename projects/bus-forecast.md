---
title: "Bus Forecast"
year: "2024"
rank: 7
subtitle: "Amazon x BramHacks 2024 Winner"
image: "/images/bus_forecast_mockup.png"
github: "https://github.com/AkshayG99/BusForcast"
timeline: "2024"
tools: "ReactJS, NextJS, Python, Facebook API, ML, Demographics API"
overview: "Won BramHacks out of 500 competitors for an AI-powered bus route optimization tool that automates Brampton's surge bus allocation process."
features:
  - title: "Automated Web Scraper"
    description: "Designed an automated web scraper to collect upcoming Brampton events from Facebook."
    icon: "code"
  - title: "Machine Learning Model"
    description: "Built a machine learning model predicting event attendance using demographic and income datasets."
    icon: "cloud"
  - title: "Visual Analytics"
    description: "Developed a visual analytics system highlighting high-demand bus routes in red for surge planning."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Imagine you are a city transit manager on a Friday afternoon. Suddenly, a massive local cultural festival lets out, and thousands of people flood the bus stops simultaneously. You had no idea this localized surge was going to happen because your manual allocation process only accounts for major national holidays. Now, buses are dangerously overcrowded, schedules are ruined, and commuters are stranded in the cold. You need a way to predict the unpredictable.

### Overview & Impact

We won **BramHacks 2024** out of 500 competitors by developing an AI-powered bus route optimization tool. Our solution directly addressed a key municipal transportation challenge by replacing Brampton Transit's previous holiday-only, manual bus allocation process with a fully automated, data-driven system capable of accounting for smaller surges and local events.

### Technical Implementation

- **Automated Web Scraping:** We designed an automated web scraper using Python and the Facebook API to continuously collect data on upcoming events across Brampton.
- **Machine Learning Predictor:** We built a machine learning model that predicts expected event attendance by correlating the scraped event data with local demographic and income datasets.
- **Visual Analytics Dashboard:** We developed a centralized visual analytics system (built with **ReactJS and NextJS**) that displays event attendance forecasts and highlights high-demand bus routes in red, enabling transit officials to optimize surge planning effectively.
- **Municipal Collaboration:** We collaborated directly with Brampton Transit officials to ensure our dashboard provided actionable insights and solved real logistical bottlenecks.

### Challenges

Scraping Facebook for event data proved difficult due to strict rate limits and dynamic DOM structures. We had to implement randomized user-agents and robust error handling. Additionally, translating demographic data into accurate bus ridership surges required significant feature engineering to normalize the datasets.

### Next Steps

Integrating real-time GPS data from the buses themselves to create a dynamic rerouting engine that adapts to sudden traffic accidents or weather delays in real-time.
