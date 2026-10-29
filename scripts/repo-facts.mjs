// Prints archived/last-push/stars/license/description for GitHub repositories given as owner/name arguments.
// Usage: node scripts/repo-facts.mjs nautechsystems/nautilus_trader kernc/backtesting.py
import { execFileSync } from 'node:child_process';

for (const repo of process.argv.slice(2)) {
  try {
    const out = execFileSync(
      'gh',
      ['api', `repos/${repo}`, '--jq', '[.full_name,(.archived|tostring),.pushed_at[:10],(.stargazers_count|tostring),(.license.spdx_id // "no-license"),(.description // "")[:90]]|@tsv'],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    );
    const [full, archived, pushed, stars, license, desc] = out.trim().split('\t');
    console.log(`${archived === 'true' ? 'ARCH ' : 'ok   '}${full.padEnd(44)} push ${pushed}  ${stars.padStart(6)}★  ${license.padEnd(14)} ${desc}`);
  } catch {
    console.log(`404  ${repo}`);
  }
}
