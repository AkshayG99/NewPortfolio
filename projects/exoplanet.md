---
title: "Exoplanet Habitability"
year: "2023"
rank: 9
subtitle: "Supervised Machine Learning for Exoplanet Colonization"
image: "/images/exoplanet.png"
github: "https://github.com/AkshayG99/Nasa-Planet-Habitability-Predictions"
timeline: "2023"
tools: "Python, Scikit-Learn, Pandas, NumPy, XGBoost, Matplotlib"
overview: "Built a supervised machine learning classification model in Python trained on NASA Kepler exoplanet data to predict planetary habitability scores."
features:
  - title: "Feature Engineering"
    description: "Performed end-to-end data analysis on multi-dimensional datasets (planet mass, radius, surface temperature, stellar flux)."
    icon: "code"
  - title: "Modular Pipeline"
    description: "Designed a modular pipeline with configurable retraining and serialized model persistence (joblib/pickle)."
    icon: "cloud"
  - title: "Real-world Case Study"
    description: "Applied the model to rank the top 5 candidate planets by predicted habitability score for human colonization."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Imagine you are an astronomer staring at a dataset containing thousands of newly discovered exoplanets. Somewhere in that massive spreadsheet of numbers—masses, radiuses, and stellar fluxes—could be "Earth 2.0." But manually analyzing the multi-dimensional data for every single planet to determine if it can support liquid water is impossible. You need an intelligent system that can instantly sift through the cosmic noise and point your telescope directly at the planets most likely to harbor life.

### Overview & Impact

As part of a research initiative into space colonization, I built a supervised machine learning classification model to predict planetary habitability scores across thousands of candidate planets. 

### Technical Implementation

- **Data Engineering:** I performed end-to-end data analysis and feature engineering on multi-dimensional planetary datasets sourced from the NASA Kepler mission. This involved processing complex variables such as planet mass, radius, surface temperature, stellar flux, and orbital period.
- **ML Pipeline Design:** I designed a robust, modular machine learning pipeline in Python (using **Scikit-Learn, Pandas, NumPy, and XGBoost**). The pipeline supports configurable retraining and utilizes serialized model persistence (via joblib/pickle) to enable reproducible inference without the need for constant recomputation.
- **Case Study Application:** I applied the trained model to a real-world colonization case study. The model successfully evaluated and ranked the top 5 candidate planets based on their predicted habitability scores, providing a data-driven approach to identifying the optimal targets for human colonization.

### Challenges

The NASA Kepler dataset contained significant gaps and missing values for critical features like surface temperature. Implementing sophisticated imputation techniques without skewing the distribution of the data was essential to training an accurate XGBoost model.

### Next Steps

Building a public-facing web dashboard that allows amateur astronomers to input new planetary data and instantly receive a predicted habitability score from the deployed model.
