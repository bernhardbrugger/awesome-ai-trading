// Prints title, authors and year for arXiv ids: node scripts/arxiv-titles.mjs 2306.06031 2412.20138
const ids = process.argv.slice(2);
const res = await fetch(`https://export.arxiv.org/api/query?id_list=${ids.join(',')}&max_results=${ids.length}`, {
  headers: { 'user-agent': 'awesome-ai-trading link check (+https://github.com/bernhardbrugger/awesome-ai-trading)' },
});
const xml = await res.text();
for (const entry of xml.split('<entry>').slice(1)) {
  const id = /<id>http:\/\/arxiv\.org\/abs\/([^<]+)<\/id>/.exec(entry)?.[1];
  const title = /<title>([\s\S]*?)<\/title>/.exec(entry)?.[1].replace(/\s+/g, ' ').trim();
  const year = /<published>(\d{4})/.exec(entry)?.[1];
  const authors = [...entry.matchAll(/<name>([^<]+)<\/name>/g)].map((m) => m[1]);
  const who = authors.length > 2 ? `${authors[0].split(' ').pop()} et al.` : authors.map((a) => a.split(' ').pop()).join(' & ');
  console.log(`${id} | ${year} | ${who} | ${title}`);
}
