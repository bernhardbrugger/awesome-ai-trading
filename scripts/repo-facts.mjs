// Prints the facts CONTRIBUTING.md asks for, for GitHub repositories given as owner/name arguments:
// archived, last commit on the default branch, latest release, stars, licence, description.
// Usage: node scripts/repo-facts.mjs nautechsystems/nautilus_trader kernc/backtesting.py
//
// "Maintained" means a commit or a release within the last 12 months (status OLD otherwise).
// GitHub's pushed_at is not used for that: it also moves for pushes to other branches (bots,
// gh-pages), so a repository whose last commit is years old can still show a recent push.
import { execFileSync } from 'node:child_process';

const YEAR_MS = 365 * 24 * 3600 * 1000;

function gh(path, jq) {
  return execFileSync('gh', ['api', path, '--jq', jq], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

function optional(fn) {
  try {
    return fn() || '';
  } catch {
    return '';
  }
}

for (const repo of process.argv.slice(2)) {
  let info;
  try {
    info = gh(`repos/${repo}`, '[.full_name,(.archived|tostring),(.stargazers_count|tostring),(.license.spdx_id // "no-license"),(.description // "")[:90]]|@tsv');
  } catch {
    console.log(`404  ${repo}`);
    continue;
  }
  const [full, archived, stars, license, desc] = info.split('\t');
  const commit = optional(() => gh(`repos/${full}/commits?per_page=1`, '.[0].commit.committer.date[:10]'));
  const release = optional(() => gh(`repos/${full}/releases/latest`, '.published_at[:10]'));
  const latest = [commit, release].filter(Boolean).sort().pop();
  const recent = latest && Date.now() - Date.parse(latest) <= YEAR_MS;
  const status = archived === 'true' ? 'ARCH ' : recent ? 'ok   ' : 'OLD  ';
  console.log(
    `${status}${full.padEnd(44)} commit ${(commit || '?').padEnd(10)}  release ${(release || '-').padEnd(10)}  ${stars.padStart(6)}★  ${license.padEnd(14)} ${desc}`,
  );
}
