# Awesome AI Trading [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Links](https://github.com/bernhardbrugger/awesome-ai-trading/actions/workflows/links.yml/badge.svg)](https://github.com/bernhardbrugger/awesome-ai-trading/actions/workflows/links.yml) [![CC0](https://img.shields.io/badge/license-CC0-lightgrey.svg)](LICENSE)

> A curated list of tools, data, papers and learning material for AI/ML-driven trading and quantitative finance: classic backtesting and machine learning, plus LLM agents, MCP servers and time-series foundation models.

Every project listed here was checked for existence and recent activity on **2026-11-05**; dead and archived projects were removed. Links are re-checked automatically (see [CONTRIBUTING.md](CONTRIBUTING.md)). Anything marked ⚠️ still works but is barely maintained.

> **Not financial advice.** Software and papers in this list are for research and education. Most published strategies stop working once costs, slippage and overfitting are accounted for. Read [Pitfalls: backtests that lie](#pitfalls-backtests-that-lie) before you trade real money.

## Start here

Not sure where to begin? Pick the question you have:

- **"I want to test a trading idea honestly."** Read [Pitfalls: backtests that lie](#pitfalls-backtests-that-lie) first, then choose an engine with [Which backtester?](#which-backtester), then judge the result with [QuantStats](https://github.com/ranaroussi/quantstats) or [skfolio](https://github.com/skfolio/skfolio).
- **"I want data."** [Data Sources & APIs](#data-sources--apis) says what is free and what is not; the academic sets (Fama-French factors, Open Source Asset Pricing) are listed under [Academic datasets](#academic-datasets).
- **"I want an LLM to help with research."** [LLMs & AI Agents](#llms--ai-agents) lists agents and finance MCP servers and its papers; read [Pitfalls](#pitfalls-backtests-that-lie) before you believe a backtest of an LLM signal (the model may have seen the period it is tested on).
- **"I need Austrian or European data."** [Austria](#austria), [ECB](https://data.ecb.europa.eu/) and [Eurostat](https://ec.europa.eu/eurostat) are keyless.
- **"I want to learn."** [Courses & Books](#courses--books), starting with López de Prado and Jansen.

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
- [TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) — Chinese-enhanced multi-agent LLM research assistant for China A-share stocks (debate-style agents, screening, paper trading). Hybrid licence: Apache-2.0 for the core agent library and supporting code; proprietary source-available `app/`, `frontend/` and `core/` (personal evaluation and non-commercial education allowed; redistribution and commercial use of those dirs need a separate licence).
- [ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) — Proof-of-concept team of LLM agents that analyse stocks (for education, no live trading).
- [FinGPT](https://github.com/AI4Finance-Foundation/FinGPT) — Open-source financial LLMs, with data pipelines and fine-tuning recipes.
- [FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) — Open-source AI agent platform for financial analysis, built on LLMs.
- [FinRL-X](https://github.com/AI4Finance-Foundation/FinRL-Trading) — AI-native, modular infrastructure for quantitative trading from the FinRL team.
- [Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) — Agent that turns finance questions into research reports, backtests and paper portfolios (MIT). It can also route live orders through a supported broker; treat that part with care.
- [FinMem](https://arxiv.org/abs/2311.13743) — Paper on an LLM trading agent with layered memory and a character profile; read it for the design, then check the authors' code yourself.
- [RD-Agent](https://github.com/microsoft/RD-Agent) — Microsoft's agent for automating data-driven R&D, including quantitative factor and model research.
- [FinBERT](https://github.com/ProsusAI/finBERT) — Financial sentiment analysis with a pre-trained BERT model.
- [LLM_trader (Semantic Signal)](https://github.com/qrak/LLM_trader) — Paper-trading LLM agent that renders each closed candle's chart, retrieves its own closed trades as memory, and books a trade only after deterministic checks; every prompt and decision is public.

### MCP Servers

Few finance MCP servers are mature yet; the list stays short on purpose. Servers without a commit in 12 months are left out (for example the Financial Datasets server, last updated in June 2025). Read-only data servers come first; anything that can place orders is marked.

- [Massive MCP Server](https://github.com/massive-com/mcp_massive) — Official MCP server for Massive (formerly Polygon.io) market data; needs a Massive API key (MIT).
- [SEC EDGAR MCP](https://github.com/stefanoamorelli/sec-edgar-mcp) — Filings, XBRL financials and insider forms from SEC EDGAR for MCP clients (AGPL-3.0).
- [Alpaca MCP Server](https://github.com/alpacahq/alpaca-mcp-server) — Official server to query market data and place orders (paper or live) from an MCP client. Treat live trading with extreme care.

---

## Time Series & Forecasting

- [Kronos](https://github.com/shiyu-coder/Kronos) — Foundation model for the "language" of financial candlesticks. Paper: [Shi et al.](https://arxiv.org/abs/2508.02739).
- [Chronos](https://github.com/amazon-science/chronos-forecasting) — Pretrained probabilistic time-series models from Amazon. Paper: [Ansari et al.](https://arxiv.org/abs/2403.07815).
- [TimesFM](https://github.com/google-research/timesfm) — Google's pretrained time-series foundation model. Paper: [Das et al.](https://arxiv.org/abs/2310.10688).
- [Moirai (uni2ts)](https://github.com/SalesforceAIResearch/uni2ts) — Salesforce's universal time-series forecasting transformer and its training code. Paper: [Woo et al.](https://arxiv.org/abs/2402.02592).
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
- [Backtrader](https://www.backtrader.com/) ⚠️ — Feature-rich Python backtesting and live-trading framework; the [repository](https://github.com/mementum/backtrader) has had no commits since April 2023.
- [bt](https://github.com/pmorissette/bt) — Flexible backtesting for portfolio-level strategies.
- [Lumibot](https://github.com/Lumiwealth/lumibot) — Backtesting and live-trading framework with broker integrations and AI-agent support (GPL-3.0).
- [vn.py](https://github.com/vnpy/vnpy) — Python framework for quantitative trading platforms (documentation mostly in Chinese).
- [hftbacktest](https://github.com/nkaz001/hftbacktest) — Tick-level backtesting for high-frequency and market-making strategies, with order-book and latency modelling.
- [Hummingbot](https://github.com/hummingbot/hummingbot) — Framework for market-making and arbitrage bots on crypto exchanges.
- [Freqtrade](https://github.com/freqtrade/freqtrade) — Free crypto trading bot with backtesting, hyper-optimisation and ML strategy support (FreqAI).
- [Jesse](https://jesse.trade/) — Crypto trading framework for research and live trading.

### Which backtester?

Facts, not rankings. "Live" means the project itself can send orders to a broker or exchange.

| Project | Approach | Language | Live | Licence |
|---|---|---|---|---|
| [NautilusTrader](https://github.com/nautechsystems/nautilus_trader) | Event-driven, same code for backtest and live | Rust core, Python API | yes | LGPL-3.0 |
| [Lean](https://github.com/QuantConnect/Lean) | Event-driven, many asset classes | C#, Python | yes | Apache-2.0 |
| [Zipline Reloaded](https://github.com/stefan-jansen/zipline-reloaded) | Event-driven on bars, data bundles | Python | no | Apache-2.0 |
| [VectorBT](https://github.com/polakowo/vectorbt) | Vectorised, thousands of parameter sets at once | Python | no | Apache-2.0 with Commons Clause (you may not sell a product built on it) |
| [backtesting.py](https://github.com/kernc/backtesting.py) | Bar-by-bar, one instrument, small API | Python | no | AGPL-3.0 |
| [bt](https://github.com/pmorissette/bt) | Portfolio-level algos (rebalancing, weights) | Python | no | MIT |
| [hftbacktest](https://github.com/nkaz001/hftbacktest) | Tick-level with order book and latency | Rust, Python | yes | MIT |
| [Lumibot](https://github.com/Lumiwealth/lumibot) | Event-driven, broker integrations | Python | yes | GPL-3.0 |

Rule of thumb: vectorised engines are fast for screening ideas but make look-ahead and unrealistic fills easy; event-driven engines are slower and closer to how orders really work.

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
- [empyrical-reloaded](https://github.com/stefan-jansen/empyrical-reloaded) — Maintained fork of the risk and performance metrics behind Zipline and pyfolio (Sharpe, drawdown, alpha and beta).
- [alphalens-reloaded](https://github.com/stefan-jansen/alphalens-reloaded) — Maintained fork of Quantopian's tool to test whether a predictive factor carries information (quantile returns, information coefficient, turnover).
- [ffn](https://github.com/pmorissette/ffn) — Financial functions for Pandas: performance statistics, drawdowns, returns and plotting.
- [QuantLib](https://github.com/lballabio/QuantLib) — The standard open-source library for pricing derivatives, curves and fixed income (C++ with Python bindings, BSD-style licence).

---

## Technical Analysis

- [TA-Lib](https://ta-lib.org/) — Industry-standard indicator library in C; use the [Python wrapper](https://github.com/TA-Lib/ta-lib-python).
- [pandas-ta-classic](https://github.com/xgboosted/pandas-ta-classic) — Community continuation of pandas-ta: 130+ indicators as Pandas extensions.
- [ta](https://github.com/bukosabino/ta) — Technical analysis indicators for Pandas, pure Python.

---

## Data Sources & APIs

### Market Data

- [yfinance](https://github.com/ranaroussi/yfinance) — Free historical and delayed market data from Yahoo Finance. Not an official API; check Yahoo's terms for your use.
- [AKShare](https://github.com/akfamily/akshare) — Python library with one-call functions for free public financial data, mostly Chinese markets (A-shares and more) plus some US stocks. Documentation in Chinese; its README warns that interfaces can be removed when a source changes.
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

### Academic datasets

- [Ken French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html) — Fama-French factors, industry portfolios and breakpoints, free to download. The usual benchmark for factor research.
- [Open Source Asset Pricing](https://www.openassetpricing.com/) — Chen and Zimmermann's reproducible set of 200+ published return predictors (code: [CrossSection](https://github.com/OpenSourceAP/CrossSection), GPL-2.0). Useful to see how many of them survive.
- [BIS Data Portal](https://data.bis.org/) — Bank for International Settlements statistics: credit, exchange rates, property prices, derivatives turnover.
- [CFTC Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm) — Weekly futures positioning of large speculators and commercial hedgers; free, published on Fridays for Tuesday.
- [U.S. Treasury Fiscal Data](https://fiscaldata.treasury.gov/) — Debt, auctions and interest-rate data from the US Treasury, with an open API.

### Alternative Data

- [Quiver Quantitative](https://www.quiverquant.com/) — Congressional trading, lobbying, insider trades and more.
- [StockTwits](https://stocktwits.com/) — Social sentiment from the StockTwits community.
- [Reddit API](https://www.reddit.com/dev/api/) — Access finance subreddits such as r/wallstreetbets; mind the API terms and rate limits.
- [Google Trends](https://trends.google.com/trends/) — Search interest as a market signal.

### Crypto Data

- [CCXT](https://github.com/ccxt/ccxt) — Unified exchange API (see above).
- [CoinGecko](https://www.coingecko.com/en/api) — Crypto market data API with a free tier.
- [CoinMarketCap](https://coinmarketcap.com/api/) — Crypto market data and rankings.
- [Blockworks API (formerly Messari)](https://docs.blockworks.com/) — Crypto asset data, metrics and research. messari.io now redirects to Blockworks; the legacy Messari API is in maintenance mode and new data ships only on the Blockworks API.
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
- [Can ChatGPT Forecast Stock Price Movements?](https://arxiv.org/abs/2304.07619) — Lopez-Lira & Tang (2023). News-based LLM signals; read together with the look-ahead warnings in Pitfalls.
- [FinanceBench: A New Benchmark for Financial Question Answering](https://arxiv.org/abs/2311.11944) — Islam et al. (2023).
- [FinBen: A Holistic Financial Benchmark for Large Language Models](https://arxiv.org/abs/2402.12659) — Xie et al. (2024); code: [FinBen](https://github.com/The-FinAI/FinBen) (MIT).

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
- [Pseudo-Mathematics and Financial Charlatanism](https://doi.org/10.1090/noti1105) — Bailey, Borwein, López de Prado & Zhu, Notices of the AMS (2014). How many strategy variants you can try before a short backtest finds a good-looking one by luck.
- [...and the Cross-Section of Expected Returns](https://doi.org/10.1093/rfs/hhv059) — Harvey, Liu & Zhu, Review of Financial Studies (2016). With hundreds of factors tried, the bar for a new one must be higher (t above 3).
- [Is There a Replication Crisis in Finance?](https://doi.org/10.1111/jofi.13249) — Jensen, Kelly & Pedersen, Journal of Finance (2023). Testing 153 factors the same way, most replicate, and the evidence clusters in a few themes.
- [A Backtesting Protocol in the Era of Machine Learning](https://doi.org/10.3905/jfds.2019.1.064) — Arnott, Harvey & Markowitz, Journal of Financial Data Science (2019). A checklist for researchers.
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
- [Machine Learning for Algorithmic Trading](https://www.packtpub.com/product/machine-learning-for-algorithmic-trading-second-edition/9781839217715) — Stefan Jansen. Hands-on ML for trading with Python. The [code for the 3rd edition](https://github.com/stefan-jansen/machine-learning-for-trading) (27 chapters, nine case studies, MIT) is free on GitHub; the 2nd edition's code is on its `second-edition` branch.
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
