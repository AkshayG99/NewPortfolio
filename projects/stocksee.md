---
title: "StockSee"
year: "2023"
rank: 4
subtitle: "Correlating real-world events with stock prices & RL/NLP prediction"
image: "/images/stocksee_mockup.png"
github: "https://github.com/AkshayG99/StockSee"
timeline: "2023"
tools: "Python, TensorFlow, Reinforcement Learning, NLP, Node.js, Web API"
overview: "Correlates real-world socioeconomic events with stock prices to show that price curves reflect industry trends, company earnings reports, and product releases."
features:
  - title: "Historical Search Interface"
    description: "Users query stock tickers to see a 2-year historical price chart populated with sentiment-analyzed news event nodes."
    icon: "code"
  - title: "LSTM Price Prediction"
    description: "Predicts future price trends 50 days out using a TensorFlow LSTM model based on sequential windows of 200 previous daily closing prices."
    icon: "cloud"
  - title: "Custom NLP Model"
    description: "Incorporates closing prices and public news sentiment scores generated via a custom NLP model trained on public datasets."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Imagine you are an everyday retail investor trying to make sense of the stock market. Every morning, you are bombarded by a chaotic flood of news articles, earnings reports, and conflicting opinions on social media. While Wall Street hedge funds use massive supercomputers to instantly analyze the sentiment of millions of articles and predict market movements, you are left manually reading the news and guessing how the market will react. You need a way to instantly see the hidden connections between real-world events and stock price curves.

### Overview & Impact

**StockSee** is an advanced financial analytics platform designed to correlate real-world socioeconomic events with stock prices, demonstrating that price curves accurately reflect industry trends, earnings reports, and product releases.

### Technical Implementation

- **Predictive ML Modeling:** I built a **TensorFlow LSTM** model that predicts future price trends up to 50 days out, based on sequential windows of 200 previous daily closing prices. The model is trained on all 30 stocks in the Dow Jones Industrial Average to ensure a generalized and accurate prediction baseline.
- **NLP Sentiment Analysis:** The prediction engine incorporates both historical closing prices and public news sentiment scores. These scores are generated via a custom Natural Language Processing (NLP) model that was trained on extensive public datasets.
- **Interactive Search & Visualization:** The platform provides a search interface where users can query specific stock tickers (e.g., AAPL) and view a 2-year historical price chart populated dynamically with sentiment-analyzed news event nodes.
- **Model Evaluation & Tuning:** The system supports local training configurations, allowing users to continually train and improve the prediction and sentiment analysis models with new ticker entries. It also features comparative performance graphs displaying training/validation loss and directional accuracy metrics.

### Challenges

Financial APIs are notoriously expensive and strictly rate-limited. We had to implement an intelligent caching layer to prevent hitting API caps while still serving near real-time data to the React frontend. Additionally, fine-tuning the NLP model to accurately gauge the sarcastic sentiment often found in public financial news and forums was a major hurdle.

### Next Steps

Integrating algorithmic trading backtesting directly into the dashboard, allowing users to run simulations of their own trading strategies against historical price and sentiment data.
