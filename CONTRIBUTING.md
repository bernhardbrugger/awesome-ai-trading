# Contributing to Awesome AI Trading

Thanks for helping. A short, accurate list is worth more than a long one.

## What belongs here

- **Tools and libraries** that are maintained: a commit or release within the last 12 months, and a clear licence.
- **Data sources** with a free tier or open data; say what is free and what is not.
- **Papers** with a verifiable link (arXiv, DOI, publisher) and the right year and authors.
- **Learning material** that is hands-on and still available without a login wall.

## What does not belong here

- Signal sellers, "guaranteed returns", paid courses without a free part, referral and affiliate links.
- Archived or dead projects (use a maintained fork instead, e.g. Zipline Reloaded).
- Duplicates: search the list first, one entry per project.
- Anything that cannot be checked: unverifiable performance claims, screenshots of profits.

## Format

```
- [Name](https://example.org) — Short factual description, ending with a period.
```

- Put the entry in the best-fitting section; keep sections roughly alphabetical or by relevance, not by when you added it.
- Describe what the project **is**, not how great it is. Mention a licence that limits use (GPL, AGPL, commercial) when it matters.
- Mark barely maintained but still useful projects with ⚠️ and say why.
- Papers: `[Title](link) — Authors (year).` Prefer `doi.org` or `arxiv.org/abs` links.

## Checking your change

Every link is checked automatically on pull requests and once a month. You can run the check locally (Node 20+, GitHub CLI for the repository details):

```bash
node scripts/check-links.mjs          # status of every link, archived / last push of GitHub repositories
node scripts/repo-facts.mjs owner/name  # facts for a repository you want to add
node scripts/arxiv-titles.mjs 2412.20138  # confirm title, authors and year of an arXiv paper
```

Some sites block automated requests (403/429); those are listed in `.lychee.toml` and checked by hand.

## Pull request steps

1. Fork, create a branch, edit `README.md`.
2. Run the checks above for what you added.
3. Open a pull request and fill in the template: say why the entry belongs and how you verified it.

Dead links and outdated entries are welcome as issues, too.
