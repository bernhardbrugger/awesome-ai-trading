// Checks every URL in README.md: HTTP status for all, and for github.com repositories also archived / last commit or release / stars.
// 'old' = no commit on the default branch and no release in the last 12 months (GitHub's pushed_at is not
// used: it also moves for pushes to other branches). 'old' is reported, not counted as a problem.
// Usage: node scripts/check-links.mjs [--github-token-from-gh]   (needs `gh` for the repository details)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const readme = fs.readFileSync(new URL('../README.md', import.meta.url), 'utf8');
const urls = [...new Set([...readme.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]))];
const UA = 'Mozilla/5.0 (compatible; awesome-ai-trading link check; +https://github.com/bernhardbrugger/awesome-ai-trading)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function status(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, { method, redirect: 'follow', headers: { 'user-agent': UA }, signal: AbortSignal.timeout(20000) });
      if (res.ok || method === 'GET') return { code: res.status, final: res.url };
    } catch (e) {
      if (method === 'GET') return { code: 0, final: String(e.cause?.code ?? e.message) };
    }
  }
}

function repoInfo(url) {
  const m = /^https:\/\/github\.com\/([^/]+)\/([^/#?]+)\/?$/.exec(url);
  if (!m) return null;
  try {
    const gh = (path, jq) => execFileSync('gh', ['api', path, '--jq', jq], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    const optional = (fn) => { try { return fn(); } catch { return ''; } };
    const [archived, stars, full] = gh(`repos/${m[1]}/${m[2]}`, '[.archived,.stargazers_count,.full_name] | @tsv').split('\t');
    const commit = optional(() => gh(`repos/${full}/commits?per_page=1`, '.[0].commit.committer.date[:10]'));
    const release = optional(() => gh(`repos/${full}/releases/latest`, '.published_at[:10]'));
    const latest = [commit, release].filter(Boolean).sort().pop();
    const old = !latest || Date.now() - Date.parse(latest) > 365 * 24 * 3600 * 1000;
    return { archived: archived === 'true', commit: commit || '?', release, old, stars: Number(stars), full };
  } catch {
    return { error: 'gh api failed' };
  }
}

let problems = 0;
for (const url of urls) {
  const s = await status(url);
  const info = repoInfo(url);
  const moved = s.final && s.final !== url && s.final.replace(/\/$/, '') !== url.replace(/\/$/, '') ? ` -> ${s.final}` : '';
  const flag = s.code === 200 && !info?.archived && !info?.error ? (info?.old ? 'old ' : 'ok  ') : s.code === 403 || s.code === 429 ? 'warn' : 'PROB';
  if (flag === 'PROB') problems++;
  const extra = info && !info.error ? ` [${info.archived ? 'ARCHIVED ' : ''}commit ${info.commit}${info.release ? ', release ' + info.release : ''}, ${info.stars}★${info.full.toLowerCase() !== url.split('github.com/')[1].toLowerCase() ? ', now ' + info.full : ''}]` : info?.error ? ` [${info.error}]` : '';
  console.log(`${flag} ${s.code} ${url}${moved}${extra}`);
  await sleep(300);
}
console.log(`\n${urls.length} URLs, ${problems} with problems`);
process.exit(problems ? 1 : 0);
