import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=path.resolve(import.meta.dirname,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(import.meta.dirname,'manifest.json'),'utf8'));
const errors=[];
const ok=(condition,message)=>{if(!condition)errors.push(message)};
const read=(relative)=>fs.readFileSync(path.join(root,relative),'utf8');
function generatedArray(relative,name){const raw=read(relative);const match=raw.match(new RegExp(`export const ${name}:[^=]+= ([\\s\\S]*);\\n?$`));if(!match)throw new Error(`${relative}: generated array missing`);return JSON.parse(match[1])}

const blogs=generatedArray('lib/october12BlogPosts.ts','october12BlogPosts');
const research=generatedArray('lib/october12ResearchPosts.ts','october12ResearchPosts');
const items=[...blogs.map((post)=>({...post,section:'Blog'})),...research.map((post)=>({...post,section:'Research'}))];

ok(manifest.site==='SalesDevelopmentRep','site mismatch');
ok(manifest.canonicalDomain==='https://salesdevelopmentrep.com','canonical domain mismatch');
ok(manifest.repository==='coolifystealthagents/sales-development-rep','repository mismatch');
ok(manifest.branch==='main','branch mismatch');
ok(manifest.baseSha==='54c6fa52d66d3a0ea1667958281da9873309657b','base SHA mismatch');
ok(blogs.length===12,'requires exactly 12 October 12 Blog items');
ok(research.length===5,'requires exactly 5 October 12 Research items');
ok(manifest.items.length===17,'manifest requires 17 items');
ok(new Set(items.map((item)=>item.slug)).size===17,'slugs must be unique');
ok(new Set(items.map((item)=>item.title.toLowerCase())).size===17,'titles must be unique');

const paragraphOwners=new Map();
const paragraphEntries=[];
const hashes=new Set();
for(const item of items){
  ok(item.publishedAt==='2026-10-12',`${item.slug}: wrong publication date`);
  ok(!/\b(?:2026|oct(?:ober)?\s+12|12\s+oct(?:ober)?)\b/i.test(item.title),`${item.slug}: title contains a date`);
  ok(item.thumbnail===`/thumbnails/october-12/${item.slug}.svg`,`${item.slug}: thumbnail mapping mismatch`);
  const sections=item.sections||[];
  ok(sections.length===8,`${item.slug}: expected eight substantive sections`);
  const body=sections.flatMap((section)=>section.paragraphs||[]);
  ok(body.join(' ').length>=2500,`${item.slug}: article lacks depth`);
  for(const paragraph of body.filter((value)=>value.length>=150)){
    const normalized=paragraph.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
    const owners=paragraphOwners.get(normalized)||[];owners.push(item.slug);paragraphOwners.set(normalized,owners);
    paragraphEntries.push({slug:item.slug,text:normalized});
  }
  if(item.section==='Research'){
    ok(item.sources?.length===10,`${item.slug}: Research needs exactly ten sources`);
    ok(new Set((item.sources||[]).map((source)=>source.url)).size===10,`${item.slug}: Research sources must be unique`);
    for(const source of item.sources||[]){try{ok(new URL(source.url).protocol==='https:',`${item.slug}: source is not HTTPS`)}catch{errors.push(`${item.slug}: invalid source URL`)}}
    for(const heading of ['Research question and decision use','Population and observation unit','Data dictionary and evidence lineage','Analysis plan','Reliability and reviewer agreement','Safety, privacy, and limits','Source interpretation','Reporting template'])ok(sections.some((section)=>section.heading===heading),`${item.slug}: missing ${heading}`);
  }
  const thumbPath=path.join(root,'public/thumbnails/october-12',`${item.slug}.svg`);
  ok(fs.existsSync(thumbPath),`${item.slug}: thumbnail missing`);
  if(fs.existsSync(thumbPath)){
    const svg=fs.readFileSync(thumbPath,'utf8');
    ok(/width="1200" height="630"/.test(svg),`${item.slug}: thumbnail must be 1200x630`);
    const escaped=item.title.replaceAll('&','&amp;');
    ok(svg.includes(`<title id="title">${escaped}</title>`),`${item.slug}: semantic thumbnail title mismatch`);
    for(const word of item.title.split(/\s+/))ok(svg.includes(word.replaceAll('&','&amp;')),`${item.slug}: thumbnail missing title word ${word}`);
    hashes.add(crypto.createHash('sha256').update(svg).digest('hex'));
  }
}
for(const [paragraph,owners] of paragraphOwners)if(owners.length>1)errors.push(`duplicate substantive paragraph: ${owners.join(', ')} (${paragraph.slice(0,90)})`);
const tokens=(text)=>new Set(text.split(/\s+/).filter((word)=>word.length>3));
for(let i=0;i<paragraphEntries.length;i++)for(let j=i+1;j<paragraphEntries.length;j++){
  if(paragraphEntries[i].slug===paragraphEntries[j].slug)continue;
  const left=tokens(paragraphEntries[i].text),right=tokens(paragraphEntries[j].text);
  const overlap=[...left].filter((word)=>right.has(word)).length;
  const similarity=overlap/new Set([...left,...right]).size;
  if(similarity>=0.8)errors.push(`near-duplicate substantive paragraph (${similarity.toFixed(2)}): ${paragraphEntries[i].slug}, ${paragraphEntries[j].slug}`);
}
ok(hashes.size===17,'all 17 thumbnails must be unique');

const content=read('lib/content.ts');
const blogRoute=read('app/blog/[slug]/page.tsx');
const researchRoute=read('app/research/[slug]/page.tsx');
const blogIndex=read('app/blog/page.tsx');
const researchIndex=read('app/research/page.tsx');
const researchSidebar=read('components/ResearchSidebar.tsx');
const sitemap=read('app/sitemap.ts');
ok(content.includes('october12BlogPosts')&&content.includes('october12ResearchPosts'),'separate registries are not integrated');
ok(blogRoute.includes('blogBySlug')&&blogRoute.includes('Related articles')&&blogRoute.includes('aria-label="Blog companion"'),'Blog route/sidebar/related behavior incomplete');
ok(researchRoute.includes('researchBySlug')&&researchRoute.includes('ResearchSidebar')&&researchRoute.includes('Related research'),'Research route/sidebar/related behavior incomplete');
ok(blogRoute.includes('dateTime={post.publishedAt}')&&researchRoute.includes('dateTime={post.publishedAt}'),'visible publication dates missing');
ok(blogIndex.includes('blogPosts')&&researchIndex.includes('researchPosts'),'separate indexes missing');
ok(researchSidebar.includes('Research reading check'),'Research sidebar missing');
ok(sitemap.includes('blogPosts')&&sitemap.includes('researchPosts'),'sitemap registry integration missing');
for(const entry of manifest.items){
  const source=entry.section==='Blog'?blogs:research;
  const item=source.find((candidate)=>candidate.slug===entry.slug);
  ok(Boolean(item),`${entry.slug}: manifest item missing from registry`);
  if(item){ok(item.title===entry.title,`${entry.slug}: manifest title mismatch`);ok(entry.publicationDate==='2026-10-12',`${entry.slug}: manifest date mismatch`)}
}

if(errors.length){console.error(`FAIL (${errors.length})`);for(const error of errors)console.error(`- ${error}`);process.exit(1)}
console.log('PASS: SalesDevelopmentRep has 12 Blog + 5 Research items with exact dates, distinct systems, 17 exact-title thumbnails, ten-source research depth, and no duplicate substantive paragraphs.');
