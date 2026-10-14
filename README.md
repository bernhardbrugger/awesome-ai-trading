# Awesome AI Trading [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources for AI/ML-powered trading — libraries, data sources, research papers, strategies, and more.

**Contributions welcome!** Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a PR.

---

## Contents

- [Libraries & Frameworks](#libraries--frameworks)
- [Data Sources & APIs](#data-sources--apis)
- [Research Papers](#research-papers)
- [Strategies](#strategies)
- [Courses & Books](#courses--books)
- [Community & Blogs](#community--blogs)

---

## Libraries & Frameworks

### Backtesting & Trading

- [Backtrader](https://www.backtrader.com/) — Feature-rich Python backtesting framework with live trading support.
- [OpenBacktesting](https://github.com/lucidcog/openbacktesting) — Python framework for single-asset historical backtesting with pandas statistics, indicators, and parameter optimization.
- [Zipline](https://github.com/quantopian/zipline) — Pythonic algorithmic trading library (originally by Quantopian).
- [VectorBT](https://github.com/polakowo/vectorbt) — Blazing-fast vectorized backtesting and analysis toolkit.
- [Lean (QuantConnect)](https://github.com/QuantConnect/Lean) — Open-source algorithmic trading engine in C#/Python.
- [Jesse](https://jesse.trade/) — Advanced crypto trading framework for research and live trading.
- [FreqTrade](https://github.com/freqtrade/freqtrade) — Free, open-source crypto trading bot with ML strategy support.
- [Catalyst](https://github.com/enigmampc/catalyst) — Algorithmic trading library for crypto assets, built on Zipline.
- [bt](https://github.com/pmorissette/bt) — Flexible backtesting for Python, built on ffn.
- [PyAlgoTrade](https://github.com/gbeced/pyalgotrade) — Event-driven algorithmic trading library.
- [Lumibot](https://github.com/Lumiwealth/lumibot) — Backtesting and trading bot framework with broker integration.

### Machine Learning & Deep Learning

- [FinRL](https://github.com/AI4Finance-Foundation/FinRL) — Deep reinforcement learning framework for quantitative finance.
- [TensorTrade](https://github.com/tensortrade-org/tensortrade) — Reinforcement learning for trading using TensorFlow.
- [QLib](https://github.com/microsoft/qlib) — Microsoft's AI-oriented quantitative investment platform.
- [FinBERT](https://github.com/ProsusAI/finBERT) — Financial sentiment analysis with pre-trained NLP models.
- [Stock-Prediction-Models](https://github.com/huseinzol05/Stock-Prediction-Models) — Collection of ML/DL models for stock prediction.
- [mlfinlab](https://github.com/hudson-and-thames/mlfinlab) — Implementations from *Advances in Financial Machine Learning*.
- [OpenBB](https://github.com/OpenBB-finance/OpenBB) — Open-source investment research platform with ML integrations.

### Technical Analysis

- [TA-Lib](https://ta-lib.org/) — Industry-standard technical analysis library (C with Python wrapper).
- [pandas-ta](https://github.com/twopirllc/pandas-ta) — 130+ technical indicators as Pandas extensions.
- [finta](https://github.com/peerchemist/finta) — Financial Technical Analysis indicators for Pandas DataFrames.
- [tulipy](https://github.com/jessecallahan/tulipy) — Python bindings for Tulip Indicators.

---

## Data Sources & APIs

### Market Data

- [Yahoo Finance (yfinance)](https://github.com/ranaroussi/yfinance) — Free historical and real-time market data.
- [Alpha Vantage](https://www.alphavantage.co/) — Free API for stocks, forex, and crypto data.
- [Polygon.io](https://polygon.io/) — Real-time and historical market data (stocks, options, crypto, forex).
- [Finnhub](https://finnhub.io/) — Real-time stock, forex, and crypto data with news and sentiment.
- [Financial Modeling Prep (FMP)](https://financialmodelingprep.com/) — Financial statements, ratios, and market data.
- [Quandl (Nasdaq Data Link)](https://data.nasdaq.com/) — Massive collection of financial and economic datasets.
- [Tiingo](https://www.tiingo.com/) — End-of-day and IEX real-time stock data.
- [IEX Cloud](https://iexcloud.io/) — Financial data infrastructure and APIs.
- [EODHD](https://eodhd.com/) — End-of-day historical data for 70+ exchanges.

### Alternative Data

- [Quiver Quantitative](https://www.quiverquant.com/) — Alternative data: congressional trading, lobbying, insider trades.
- [StockTwits API](https://api.stocktwits.com/) — Social sentiment from the StockTwits community.
- [Reddit API](https://www.reddit.com/dev/api/) — Scrape r/wallstreetbets and other finance subreddits.
- [Google Trends](https://trends.google.com/) — Search interest data as a market signal.

### Crypto Data

- [CoinGecko](https://www.coingecko.com/en/api) — Comprehensive crypto data API (free tier available).
- [CoinMarketCap](https://coinmarketcap.com/api/) — Crypto market data and rankings.
- [CCXT](https://github.com/ccxt/ccxt) — Unified API for 100+ cryptocurrency exchanges.
- [Messari](https://messari.io/api) — Crypto asset data, metrics, and research.
- [Glassnode](https://glassnode.com/) — On-chain market intelligence.

---

## Research Papers

### Foundational

- [Deep Learning for Financial Applications](https://arxiv.org/abs/2002.05786) — Ozbayoglu et al. — Comprehensive survey of DL in finance (2020).
- [Advances in Financial Machine Learning](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086) — Marcos López de Prado (2018). The reference for ML in quant finance.

### Reinforcement Learning

- [Deep Reinforcement Learning for Automated Stock Trading](https://arxiv.org/abs/2007.12927) — Yang et al. (2020) — FinRL paper.
- [A Deep Reinforcement Learning Framework for the Financial Portfolio Management Problem](https://arxiv.org/abs/1706.10059) — Jiang et al. (2017).
- [Model-based Reinforcement Learning for Predictions and Control for Limit Order Books](https://arxiv.org/abs/1910.03743) — Wei et al. (2019).

### NLP & Sentiment

- [FinBERT: Financial Sentiment Analysis with Pre-Trained Language Models](https://arxiv.org/abs/1908.10063) — Araci (2019).
- [Textual Analysis in Finance](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2984066) — Loughran & McDonald — Survey of text-based methods.
- [Stock Movement Prediction from Tweets and Historical Prices](https://aclanthology.org/P18-1183/) — Xu & Cohen, ACL (2018).

### Market Microstructure

- [High-Frequency Trading: A Practical Guide to Algorithmic Strategies](https://www.wiley.com/en-us/High+Frequency+Trading%3A+A+Practical+Guide+to+Algorithmic+Strategies+and+Trading+Systems%2C+2nd+Edition-p-9781118343500) — Aldridge (2013).

---

## Strategies

### Trend Following

- **Moving Average Crossover** — Classic SMA/EMA crossover signals.
- **Dual Momentum** — Gary Antonacci's relative + absolute momentum approach.
- **Turtle Trading** — Breakout strategy from the famous Turtle Traders experiment.
- **Heikin-Ashi Trend** — Smoothed candlestick patterns for trend identification.

### Mean Reversion

- **Bollinger Band Reversion** — Trade bounces off Bollinger Bands.
- **Pairs Trading** — Statistical arbitrage on cointegrated asset pairs.
- **RSI Extremes** — Buy oversold / sell overbought with RSI thresholds.
- **Polynomial Regression Bands** — Fit polynomial curves and trade deviations.

### Sentiment & Alternative Data

- **News Sentiment Trading** — Use NLP (FinBERT, GPT) to score financial news.
- **Social Media Signals** — Reddit/Twitter/StockTwits sentiment as trading signals.
- **Earnings Call Analysis** — NLP on earnings transcripts for alpha signals.
- **Google Trends Momentum** — Search interest as a leading indicator.

### Machine Learning Strategies

- **Random Forest Classification** — Predict up/down movements with tree ensembles.
- **LSTM Price Prediction** — Sequence modeling for time series forecasting.
- **Reinforcement Learning Portfolio** — RL agents for dynamic allocation.
- **XGBoost Feature Engineering** — Gradient boosting on technical + fundamental features.
- **Transformer Models** — Attention-based architectures for market prediction.

### Crypto-Specific

- **Cross-Exchange Arbitrage** — Exploit price differences across exchanges.
- **DeFi Yield Strategies** — Automated yield farming optimization.
- **On-Chain Analysis** — Whale tracking, exchange flows, MVRV ratio signals.

---

## Courses & Books

### Books

- 📕 [Advances in Financial Machine Learning](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086) — Marcos López de Prado — *The* ML quant book.
- 📗 [Machine Learning for Algorithmic Trading](https://www.packtpub.com/product/machine-learning-for-algorithmic-trading-second-edition/9781839217715) — Stefan Jansen — Hands-on ML trading with Python.
- 📘 [Quantitative Trading](https://www.wiley.com/en-us/Quantitative+Trading%3A+How+to+Build+Your+Own+Algorithmic+Trading+Business%2C+2nd+Edition-p-9781119800064) — Ernest Chan — From idea to live trading.
- 📙 [Python for Finance](https://www.oreilly.com/library/view/python-for-finance/9781492024323/) — Yves Hilpisch — Python-based computational finance.
- 📕 [Trading and Exchanges](https://global.oup.com/academic/product/trading-and-exchanges-9780195144703) — Larry Harris — Market microstructure fundamentals.
- 📗 [Inside the Black Box](https://www.wiley.com/en-us/Inside+the+Black+Box%3A+A+Simple+Guide+to+Quantitative+and+High+Frequency+Trading%2C+2nd+Edition-p-9781118362419) — Rishi Narang — How quant trading works.
- 📘 [The Man Who Solved the Market](https://www.penguinrandomhouse.com/books/557025/the-man-who-solved-the-market-by-gregory-zuckerman/) — Gregory Zuckerman — Jim Simons & Renaissance Technologies.

### Online Courses

- 🎓 [Machine Learning for Trading — Georgia Tech / Udacity](https://www.udacity.com/course/machine-learning-for-trading--ud501) — Free, comprehensive.
- 🎓 [QuantConnect Bootcamp](https://www.quantconnect.com/learning) — Free, interactive algo trading tutorials.
- 🎓 [Investment Management with Python and ML — Coursera / EDHEC](https://www.coursera.org/specializations/investment-management-python-machine-learning) — EDHEC Business School.
- 🎓 [Financial Engineering and Risk Management — Columbia / Coursera](https://www.coursera.org/specializations/financialengineering) — Solid quantitative foundations.

---

## Community & Blogs

### Communities

- [r/algotrading](https://www.reddit.com/r/algotrading/) — Reddit's algorithmic trading community.
- [r/quant](https://www.reddit.com/r/quant/) — Quantitative finance discussions.
- [QuantConnect Forum](https://www.quantconnect.com/forum) — Algo trading community and code sharing.
- [Quantocracy](https://quantocracy.com/) — Aggregator of quant trading blog posts.
- [AI4Finance Discord](https://discord.gg/trsr8SXpW5) — Community around FinRL and AI finance.

### Blogs & Newsletters

- [QuantStart](https://www.quantstart.com/) — Tutorials on quant trading and ML.
- [Towards Data Science – Finance](https://towardsdatascience.com/tagged/finance) — ML/finance articles on Medium.
- [QuantInsti Blog](https://blog.quantinsti.com/) — Algorithmic and quantitative trading education.
- [Robot Wealth](https://robotwealth.com/blog/) — Systematic trading research and insights.
- [Flirting with Models (Newfound Research)](https://blog.thinknewfound.com/) — Quantitative portfolio research.

### YouTube

- [Part Time Larry](https://www.youtube.com/@parttimelarry) — Python trading bots and APIs.
- [Algovibes](https://www.youtube.com/@Algovibes) — Algorithmic trading tutorials.
- [CodeTrading](https://www.youtube.com/@CodeTrading) — Python trading automation.

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

This list is released under CC0 — public domain.
