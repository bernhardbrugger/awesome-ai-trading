// Checks every URL in README.md: HTTP status for all, and for github.com repositories also archived / last push / stars.
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
    const out = execFileSync('gh', ['api', `repos/${m[1]}/${m[2]}`, '--jq', '[.archived,.pushed_at,.stargazers_count,.full_name] | @tsv'], { encoding: 'utf8' });
    const [archived, pushed, stars, full] = out.trim().split('\t');
    return { archived: archived === 'true', pushed: pushed.slice(0, 10), stars: Number(stars), full };
  } catch {
    return { error: 'gh api failed' };
  }
}

let problems = 0;
for (const url of urls) {
  const s = await status(url);
  const info = repoInfo(url);
  const moved = s.final && s.final !== url && s.final.replace(/\/$/, '') !== url.replace(/\/$/, '') ? ` -> ${s.final}` : '';
  const flag = s.code === 200 && !info?.archived && !info?.error ? 'ok  ' : s.code === 403 || s.code === 429 ? 'warn' : 'PROB';
  if (flag === 'PROB') problems++;
  const extra = info && !info.error ? ` [${info.archived ? 'ARCHIVED ' : ''}push ${info.pushed}, ${info.stars}★${info.full.toLowerCase() !== url.split('github.com/')[1].toLowerCase() ? ', now ' + info.full : ''}]` : info?.error ? ` [${info.error}]` : '';
  console.log(`${flag} ${s.code} ${url}${moved}${extra}`);
  await sleep(300);
}
console.log(`\n${urls.length} URLs, ${problems} with problems`);
process.exit(problems ? 1 : 0);
