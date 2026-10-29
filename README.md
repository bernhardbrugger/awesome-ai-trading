# Awesome AI Trading [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Links](https://github.com/bernhardbrugger/awesome-ai-trading/actions/workflows/links.yml/badge.svg)](https://github.com/bernhardbrugger/awesome-ai-trading/actions/workflows/links.yml) [![CC0](https://img.shields.io/badge/license-CC0-lightgrey.svg)](LICENSE)

> A curated list of tools, data, papers and learning material for AI/ML-driven trading and quantitative finance: classic backtesting and machine learning, plus LLM agents, MCP servers and time-series foundation models.

Every project listed here was checked for existence and recent activity on **2026-10-29**; dead and archived projects were removed. Links are re-checked automatically (see [CONTRIBUTING.md](CONTRIBUTING.md)). Anything marked ⚠️ still works but is barely maintained.

> **Not financial advice.** Software and papers in this list are for research and education. Most published strategies stop working once costs, slippage and overfitting are accounted for. Read [Pitfalls: backtests that lie](#pitfalls-backtests-that-lie) before you trade real money.

## Contents

- [LLMs & AI Agents](#llms--ai-agents)
- [Time Series & Forecasting](#time-series--forecasting)
- [Machine Learning & Reinforcement Learning](#machine-learning--reinforcement-learning)
- [Backtesting & Trading Engines](#backtesting--trading-engines)
- [Brokers & Execution](#brokers--execution)
- [Portfolio & Risk Analytics](#portfolio--risk-analytics)
- [Technical Analysis](#technical-analysis)
- [Data Sources & APIs](#data-sources--apis)
- [Research Papers](#research-papers)
- [Pitfalls: backtests that lie](#pitfalls-backtests-that-lie)
- [Strategy Ideas](#strategy-ideas)
- [Courses & Books](#courses--books)
- [Community & Blogs](#community--blogs)
- [Contributing](#contributing) · [License](#license)

---

## LLMs & AI Agents

- [TradingAgents](https://github.com/TauricResearch/TradingAgents) — Multi-agent LLM framework that mimics a trading firm (analysts, researchers, trader, risk team). Paper: [Xiao et al.](https://arxiv.org/abs/2412.20138).
- [ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) — Proof-of-concept team of LLM agents that analyse stocks (for education, no live trading).
- [FinGPT](https://github.com/AI4Finance-Foundation/FinGPT) — Open-source financial LLMs, with data pipelines and fine-tuning recipes.
- [FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) — Open-source AI agent platform for financial analysis, built on LLMs.
- [FinRL-X](https://github.com/AI4Finance-Foundation/FinRL-Trading) — AI-native, modular infrastructure for quantitative trading from the FinRL team.
- [RD-Agent](https://github.com/microsoft/RD-Agent) — Microsoft's agent for automating data-driven R&D, including quantitative factor and model research.
- [FinBERT](https://github.com/ProsusAI/finBERT) — Financial sentiment analysis with a pre-trained BERT model.

### MCP Servers

Few finance MCP servers are mature yet; the list stays short on purpose.

- [Alpaca MCP Server](https://github.com/alpacahq/alpaca-mcp-server) — Official server to query market data and place orders (paper or live) from an MCP client. Treat live trading with extreme care.

---

## Time Series & Forecasting

- [Kronos](https://github.com/shiyu-coder/Kronos) — Foundation model for the "language" of financial candlesticks. Paper: [Shi et al.](https://arxiv.org/abs/2508.02739).
- [Chronos](https://github.com/amazon-science/chronos-forecasting) — Pretrained probabilistic time-series models from Amazon. Paper: [Ansari et al.](https://arxiv.org/abs/2403.07815).
- [TimesFM](https://github.com/google-research/timesfm) — Google's pretrained time-series foundation model. Paper: [Das et al.](https://arxiv.org/abs/2310.10688).
- [Darts](https://github.com/unit8co/darts) — User-friendly forecasting and anomaly detection, from classical models to deep learning.
- [sktime](https://github.com/sktime/sktime) — Unified scikit-learn-style framework for time-series ML.
- [StatsForecast](https://github.com/Nixtla/statsforecast) — Fast statistical and econometric forecasting models.
- [arch](https://github.com/bashtage/arch) — ARCH/GARCH volatility models and unit-root tests.
- [statsmodels](https://github.com/statsmodels/statsmodels) — Statistical modelling and econometrics (ARIMA, regression, cointegration tests).

---

## Machine Learning & Reinforcement Learning

- [Qlib](https://github.com/microsoft/qlib) — Microsoft's AI-oriented quantitative investment platform. Paper: [Yang et al.](https://arxiv.org/abs/2009.11189).
- [FinRL](https://github.com/AI4Finance-Foundation/FinRL) — Deep reinforcement learning framework for quantitative finance.
- [TensorTrade](https://github.com/tensortrade-org/tensortrade) — Reinforcement learning for trading, built on TensorFlow.
- [ml-quant-trading](https://github.com/initial-d/ml-quant-trading) — PyTorch multi-factor research stack with mask-aware factor computation, ML baselines, portfolio optimization, and vectorized backtesting.
- [OpenBB](https://github.com/openbq-org/OpenBB) — Open data platform for analysts, quants and AI agents (the project moved to the `openbq-org` organisation).

---

## Backtesting & Trading Engines

- [NautilusTrader](https://github.com/nautechsystems/nautilus_trader) — Production-grade, Rust-native, event-driven engine with a Python API; the same code runs in backtest and live.
- [Lean (QuantConnect)](https://github.com/QuantConnect/Lean) — Open-source algorithmic trading engine in C# and Python; the [Lean CLI](https://github.com/QuantConnect/lean-cli) runs it locally.
- [VectorBT](https://github.com/polakowo/vectorbt) — Fast vectorised backtesting and analysis for large parameter sweeps.
- [backtesting.py](https://github.com/kernc/backtesting.py) — Small, readable backtesting library (AGPL-3.0).
- [Zipline Reloaded](https://github.com/stefan-jansen/zipline-reloaded) — Maintained fork of Quantopian's Zipline.
- [Backtrader](https://www.backtrader.com/) ⚠️ — Feature-rich Python backtesting and live-trading framework; the [repository](https://github.com/mementum/backtrader) has had no commits since 2024.
- [bt](https://github.com/pmorissette/bt) — Flexible backtesting for portfolio-level strategies.
- [Lumibot](https://github.com/Lumiwealth/lumibot) — Backtesting and live-trading framework with broker integrations and AI-agent support (GPL-3.0).
- [vn.py](https://github.com/vnpy/vnpy) — Python framework for quantitative trading platforms (documentation mostly in Chinese).
- [hftbacktest](https://github.com/nkaz001/hftbacktest) — Tick-level backtesting for high-frequency and market-making strategies, with order-book and latency modelling.
- [Hummingbot](https://github.com/hummingbot/hummingbot) — Framework for market-making and arbitrage bots on crypto exchanges.
- [Freqtrade](https://github.com/freqtrade/freqtrade) — Free crypto trading bot with backtesting, hyper-optimisation and ML strategy support (FreqAI).
- [Jesse](https://jesse.trade/) — Crypto trading framework for research and live trading.

---

## Brokers & Execution

- [alpaca-py](https://github.com/alpacahq/alpaca-py) — Official Python SDK for Alpaca (stocks, options, crypto; paper trading available).
- [ib_async](https://github.com/ib-api-reloaded/ib_async) — Python sync/async framework for Interactive Brokers; the maintained successor of `ib_insync`.
- [CCXT](https://github.com/ccxt/ccxt) — One API for 100+ crypto exchanges, in Python, JavaScript, PHP, C# and Go.

---

## Portfolio & Risk Analytics

- [PyPortfolioOpt](https://github.com/PyPortfolio/PyPortfolioOpt) — Efficient frontier, Black-Litterman and hierarchical risk parity.
- [Riskfolio-Lib](https://github.com/dcajasn/Riskfolio-Lib) — Portfolio optimisation with many risk measures.
- [skfolio](https://github.com/skfolio/skfolio) — Portfolio optimisation and risk management with a scikit-learn API, including cross-validation for portfolios.
- [QuantStats](https://github.com/ranaroussi/quantstats) — Portfolio analytics and tear sheets (Sharpe, drawdowns, rolling statistics).
- [pyfolio-reloaded](https://github.com/stefan-jansen/pyfolio-reloaded) — Maintained fork of Quantopian's performance and risk analysis library.

---

## Technical Analysis

- [TA-Lib](https://ta-lib.org/) — Industry-standard indicator library in C; use the [Python wrapper](https://github.com/TA-Lib/ta-lib-python).
- [pandas-ta-classic](https://github.com/xgboosted/pandas-ta-classic) — Community continuation of pandas-ta: 130+ indicators as Pandas extensions.
- [ta](https://github.com/bukosabino/ta) — Technical analysis indicators for Pandas, pure Python.

---

## Data Sources & APIs

### Market Data

- [yfinance](https://github.com/ranaroussi/yfinance) — Free historical and delayed market data from Yahoo Finance. Not an official API; check Yahoo's terms for your use.
- [Alpaca Market Data](https://alpaca.markets/data) — Stock, options and crypto data with a free tier.
- [Databento](https://databento.com/) — Institutional-grade tick and order-book data, pay per use.
- [Massive (formerly Polygon.io)](https://massive.com/) — Real-time and historical data for stocks, options, forex and crypto.
- [Alpha Vantage](https://www.alphavantage.co/) — Free API for stocks, forex and crypto.
- [Finnhub](https://finnhub.io/) — Real-time stock, forex and crypto data with news and sentiment.
- [Financial Modeling Prep](https://financialmodelingprep.com/) — Financial statements, ratios and market data.
- [Nasdaq Data Link (formerly Quandl)](https://data.nasdaq.com/) — Financial and economic datasets.
- [Tiingo](https://www.tiingo.com/) — End-of-day and IEX real-time stock data.
- [EODHD](https://eodhd.com/) — End-of-day historical data for 70+ exchanges.

### Filings & Macro

- [SEC EDGAR](https://www.sec.gov/edgar) — Official US filings (10-K, 8-K, 13F, insider forms); free, send a descriptive User-Agent.
- [edgartools](https://github.com/dgunning/edgartools) — Python library for SEC filings, XBRL financials and insider/13F data.
- [FRED](https://fred.stlouisfed.org/) — 800,000+ US and international economic time series from the St. Louis Fed (free API key).
- [ECB Data Portal](https://data.ecb.europa.eu/) — Euro-area rates, exchange rates, monetary and banking statistics.
- [Eurostat](https://ec.europa.eu/eurostat) — Official EU statistics on economy, prices and labour.

### Austria

- [Wiener Börse](https://www.wienerborse.at/) — The Vienna Stock Exchange: ATX and prime market data, issuer information.
- [OeNB statistics](https://www.oenb.at/) — Austrian National Bank: interest rates, balance of payments, banking and financial-stability data.
- [Statistik Austria Open Data](https://data.statistik.gv.at/) — Official Austrian statistics as open data (CC BY 4.0).
- [data.gv.at](https://www.data.gv.at/) — Austria's open government data portal.

### Alternative Data

- [Quiver Quantitative](https://www.quiverquant.com/) — Congressional trading, lobbying, insider trades and more.
- [StockTwits](https://stocktwits.com/) — Social sentiment from the StockTwits community.
- [Reddit API](https://www.reddit.com/dev/api/) — Access finance subreddits such as r/wallstreetbets; mind the API terms and rate limits.
- [Google Trends](https://trends.google.com/trends/) — Search interest as a market signal.

### Crypto Data

- [CCXT](https://github.com/ccxt/ccxt) — Unified exchange API (see above).
- [CoinGecko](https://www.coingecko.com/en/api) — Crypto market data API with a free tier.
- [CoinMarketCap](https://coinmarketcap.com/api/) — Crypto market data and rankings.
- [Messari](https://messari.io/api) — Crypto asset data, metrics and research.
- [Glassnode](https://glassnode.com/) — On-chain market intelligence.

---

## Research Papers

### Foundations

- [Deep Learning for Financial Applications: A Survey](https://arxiv.org/abs/2002.05786) — Ozbayoglu et al. (2020).
- [Empirical Asset Pricing via Machine Learning](https://doi.org/10.1093/rfs/hhaa009) — Gu, Kelly & Xiu, Review of Financial Studies (2020). How much ML adds to return prediction, tested on a large cross-section.
- [Advances in Financial Machine Learning](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086) — Marcos López de Prado (2018).

### LLMs & Agents

- [BloombergGPT: A Large Language Model for Finance](https://arxiv.org/abs/2303.17564) — Wu et al. (2023).
- [FinGPT: Open-Source Financial Large Language Models](https://arxiv.org/abs/2306.06031) — Yang et al. (2023).
- [FinRobot: An Open-Source AI Agent Platform for Financial Applications](https://arxiv.org/abs/2405.14767) — Yang et al. (2024).
- [TradingAgents: Multi-Agents LLM Financial Trading Framework](https://arxiv.org/abs/2412.20138) — Xiao et al. (2024).

### Time-Series Foundation Models

- [Chronos: Learning the Language of Time Series](https://arxiv.org/abs/2403.07815) — Ansari et al. (2024).
- [A decoder-only foundation model for time-series forecasting](https://arxiv.org/abs/2310.10688) — Das et al. (2023), TimesFM.
- [Kronos: A Foundation Model for the Language of Financial Markets](https://arxiv.org/abs/2508.02739) — Shi et al. (2025).

### Reinforcement Learning

- [Deep Reinforcement Learning for Automated Stock Trading](https://arxiv.org/abs/2007.12927) — Yang et al. (2020), the FinRL paper.
- [A Deep Reinforcement Learning Framework for the Financial Portfolio Management Problem](https://arxiv.org/abs/1706.10059) — Jiang et al. (2017).
- [Model-based Reinforcement Learning for Predictions and Control for Limit Order Books](https://arxiv.org/abs/1910.03743) — Wei et al. (2019).

### NLP & Sentiment

- [FinBERT: Financial Sentiment Analysis with Pre-Trained Language Models](https://arxiv.org/abs/1908.10063) — Araci (2019).
- [Textual Analysis in Finance](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2984066) — Loughran & McDonald; survey of text-based methods.
- [Stock Movement Prediction from Tweets and Historical Prices](https://aclanthology.org/P18-1183/) — Xu & Cohen, ACL (2018).

### Market Microstructure

- [DeepLOB: Deep Convolutional Neural Networks for Limit Order Books](https://arxiv.org/abs/1808.03668) — Zhang, Zohren & Roberts (2018).
- [High-Frequency Trading: A Practical Guide to Algorithmic Strategies](https://www.wiley.com/en-us/High+Frequency+Trading%3A+A+Practical+Guide+to+Algorithmic+Strategies+and+Trading+Systems%2C+2nd+Edition-p-9781118343500) — Aldridge (2013).

---

## Pitfalls: backtests that lie

A strategy that looks great in a backtest is usually a statistical accident. Read these first.

- [The Probability of Backtest Overfitting](https://doi.org/10.21314/JCF.2016.322) — Bailey, Borwein, López de Prado & Zhu (2016). How many trials you ran matters as much as the result.
- [The Deflated Sharpe Ratio](https://doi.org/10.3905/jpm.2014.40.5.094) — Bailey & López de Prado (2014). Corrects the Sharpe ratio for selection bias, overfitting and non-normal returns.
- Checklist that applies to every tool above: no look-ahead bias, split by time (never shuffle), include fees and slippage, count every strategy you tried, test out-of-sample, then paper-trade before using real money.

---

## Strategy Ideas

Starting points for research, not recommendations. For a searchable collection with academic sources see [Quantpedia](https://quantpedia.com/).

- **Trend following:** moving-average crossover, dual momentum (relative plus absolute), channel breakouts.
- **Mean reversion:** [Bollinger Band](https://en.wikipedia.org/wiki/Bollinger_Bands) reversion, [pairs trading](https://en.wikipedia.org/wiki/Pairs_trade) on cointegrated assets, RSI extremes.
- **Sentiment and alternative data:** LLM/FinBERT scoring of news and earnings calls, social-media signals, search-interest momentum.
- **Machine learning:** tree ensembles and gradient boosting on engineered features, sequence models, reinforcement-learning allocation, foundation-model forecasts.
- **Crypto:** cross-exchange arbitrage, funding-rate strategies, on-chain flow signals.

---

## Courses & Books

### Books

- [Advances in Financial Machine Learning](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086) — Marcos López de Prado. The reference for ML in quant finance.
- [Machine Learning for Algorithmic Trading](https://www.packtpub.com/product/machine-learning-for-algorithmic-trading-second-edition/9781839217715) — Stefan Jansen. Hands-on ML for trading with Python.
- [Quantitative Trading](https://www.wiley.com/en-us/Quantitative+Trading%3A+How+to+Build+Your+Own+Algorithmic+Trading+Business%2C+2nd+Edition-p-9781119800064) — Ernest Chan. From idea to a running strategy.
- [Python for Finance](https://www.oreilly.com/library/view/python-for-finance/9781492024323/) — Yves Hilpisch. Computational finance with Python.
- [Trading and Exchanges](https://openlibrary.org/isbn/9780195144703) — Larry Harris. Market microstructure fundamentals.
- [Inside the Black Box](https://openlibrary.org/isbn/9781118362419) — Rishi Narang. How quantitative and high-frequency trading works.
- [The Man Who Solved the Market](https://www.penguinrandomhouse.com/books/557025/the-man-who-solved-the-market-by-gregory-zuckerman/) — Gregory Zuckerman. Jim Simons and Renaissance Technologies.

### Online Courses

- [Machine Learning for Trading — Georgia Tech](https://lucylabs.gatech.edu/ml4t/) — Tucker Balch's course material, free.
- [QuantConnect Learning](https://www.quantconnect.com/learning) — Free, interactive algorithmic-trading tutorials.
- [Investment Management with Python and Machine Learning — EDHEC / Coursera](https://www.coursera.org/specializations/investment-management-python-machine-learning)
- [Financial Engineering and Risk Management — Columbia / Coursera](https://www.coursera.org/specializations/financialengineering) — Solid quantitative foundations.

---

## Community & Blogs

### Communities

- [r/algotrading](https://www.reddit.com/r/algotrading/) — Algorithmic trading community on Reddit.
- [r/quant](https://www.reddit.com/r/quant/) — Quantitative finance discussions.
- [QuantConnect Forum](https://www.quantconnect.com/forum) — Algo-trading community and code sharing.
- [Quantocracy](https://quantocracy.com/) — Aggregator of quant blog posts.
- [AI4Finance Discord](https://discord.gg/trsr8SXpW5) — Community around FinRL and AI finance.

### Blogs & Newsletters

- [QuantInsti Blog](https://blog.quantinsti.com/) — Algorithmic and quantitative trading education.
- [Robot Wealth](https://robotwealth.com/blog/) — Systematic trading research and insights.
- [Flirting with Models (Newfound Research)](https://blog.thinknewfound.com/) — Quantitative portfolio research.
- [Quantpedia](https://quantpedia.com/) — Database of trading strategies with academic references.

### YouTube

- [Part Time Larry](https://www.youtube.com/@parttimelarry) — Python trading bots and APIs.
- [Algovibes](https://www.youtube.com/@Algovibes) — Algorithmic trading tutorials.
- [CodeTrading](https://www.youtube.com/@CodeTrading) — Python trading automation.

---

## Contributing

Pull requests are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) first: it lists what belongs here and how entries are checked.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related rights to this work. See [LICENSE](LICENSE).
