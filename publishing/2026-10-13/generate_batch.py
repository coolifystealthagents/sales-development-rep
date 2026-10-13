import hashlib, html, json, pathlib, re, textwrap
ROOT=pathlib.Path(__file__).resolve().parents[2]
DATE='2026-10-13'; BASE='c544a16dcf5dcb864c344430700741c395e379c6'

BLOGS=[
 ('webinar-lead-import-authentication','Authenticate Webinar Lead Imports Before Assignment','Lead operations','verify export origin, event identity, collection notice, consent or permitted-use evidence, field mapping, duplicates, import owner, and suppression checks before routing'),
 ('role-based-mailbox-sequence-quarantine','Quarantine Role-Based Mailboxes Before Sequencing','Outbound controls','identify role addresses, source lineage, account relevance, channel policy, suppression state, exception owner, and release evidence before activation'),
 ('crm-territory-change-account-ownership','Verify Account Ownership After a CRM Territory Change','Territory operations','compare the approved territory version, account attributes, effective time, prior owner, new owner, open activity, exception, and acknowledgement'),
 ('cross-tool-opt-out-propagation','Preserve Opt-Out Propagation Across Sales Tools','Preference controls','trace the request, identity match, source channel, receipt time, master suppression update, downstream tool state, conflict, and verification owner'),
 ('calendar-booking-routing-rule-audit','Audit Calendar Booking Routing Rules','Meeting operations','test form inputs, territory rule, availability source, owner eligibility, fallback path, notification, reschedule behavior, and accountable decision'),
 ('conference-badge-scan-notice-evidence','Reconcile Conference Badge Scans With Notice Evidence','Lead operations','connect event identity, badge scan, notice or terms version, collection context, permitted purpose, enrichment boundary, suppression, and review owner'),
 ('sequence-pause-recovery-log','Build a Sequence Pause Recovery Log','Outbound controls','record pause trigger, affected population, last attempted step, pending messages, suppression refresh, restart authority, staged release, and rollback evidence'),
 ('pricing-question-commercial-handoff','Route Pricing Questions Without Making Commitments','Reply operations','preserve the prospect wording, account context, approved response boundary, commercial owner, handoff time, promised follow-up, exception, and receipt'),
 ('referral-partner-lead-handoff-validation','Validate Referral Partner Lead Handoffs','Partner operations','verify partner identity, agreement reference, lead source, disclosure or notice evidence, scope, ownership, duplicate state, and acceptance'),
 ('stale-opportunity-loss-reason-closure','Close Stale Opportunities Without Inventing Loss Reasons','CRM governance','separate observed inactivity, contact evidence, stage history, owner attestation, approved closure code, unknown reason, reopen trigger, and audit trail'),
 ('call-recording-notice-configuration-audit','Audit Call Recording Notice Configuration','Communication controls','inventory dialer route, jurisdiction policy reference, notice asset, language, trigger conditions, recording state, exception path, and qualified approval'),
 ('enrichment-vendor-deletion-request-reconciliation','Reconcile Enrichment Vendor Deletion Requests','Data governance','track verified request, vendor identifier, submitted fields, acknowledgement, completion result, downstream copies, retention exception, and privacy owner'),
]

RESEARCH=[
 ('meeting-show-rate-denominator-sensitivity-study','Meeting Show Rate Denominator Sensitivity Study','how alternative eligibility and cancellation denominators change reported meeting show rate without changing event histories','meeting key, booking source, eligibility rule, scheduled time, cancellation, reschedule, attendance evidence, exclusion, and reporting period'),
 ('suppression-propagation-delay-study','Outreach Suppression Propagation Delay Study','how long a verified preference request remains inconsistent across the approved sales toolchain','pseudonymous contact key, request channel, receipt time, master update, connector event, destination state, outbound attempt, exception, and resolution'),
 ('lead-routing-reviewer-agreement-study','Lead Routing Reviewer Agreement Study','whether independent reviewers assign the same bounded route when supplied the same frozen policy and evidence packet','lead key, source, account match, geography, segment, ownership rule, reviewer labels, disagreement reason, adjudication, and disposition'),
 ('reply-classification-drift-study','Reply Classification Drift Study','whether reply-category definitions remain stable across reviewer cohorts and changing message patterns','message key, redacted text features, codebook version, reviewer, initial label, confidence, adjudication, escalation, and operational action'),
 ('account-research-source-decay-study','Account Research Source Decay Study','how the age and provenance of account evidence affect reproducibility of bounded research claims','account key, claim, source URL, publisher, observation time, capture hash, freshness threshold, reviewer result, exception, and refresh action'),
]

SOURCES=[
 {'label':'FTC CAN-SPAM Act Compliance Guide','url':'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'},
 {'label':'FTC Telemarketing Sales Rule Compliance Guide','url':'https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule'},
 {'label':'FTC Do Not Call Provisions','url':'https://www.ftc.gov/business-guidance/resources/complying-do-not-call-provisions-telemarketing-sales-rule'},
 {'label':'FCC Telemarketing and Robocalls','url':'https://www.fcc.gov/general/telemarketing-and-robocalls'},
 {'label':'Electronic Code of Federal Regulations Telemarketing Sales Rule','url':'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310'},
 {'label':'Electronic Code of Federal Regulations CAN-SPAM Rule','url':'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-316'},
 {'label':'NIST Privacy Framework','url':'https://www.nist.gov/privacy-framework'},
 {'label':'CISA Phishing Guidance','url':'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing'},
 {'label':'UK ICO Direct Marketing Guidance','url':'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/'},
 {'label':'European Commission GDPR Principles','url':'https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en'},
]
STAGES=['define the operational question','freeze governing policy versions','separate reported and verified facts','construct the preparation record','route incomplete or conflicting evidence','minimize prospect and account data','exercise ordinary and exception cases','reconcile dependent tools','prepare the accountable-owner handoff','verify communication and receipt','apply stop and rollback rules','retain a reviewable closure packet']
def wc(value): return len(re.findall(r"\b[\w'-]+\b",value))

def blog_item(slug,title,category,objective,index):
 sections=[]
 for n,stage in enumerate(STAGES,1):
  control=f'SDR-1013-{index+1:02d}-{n:02d}'
  sections.append({'heading':stage.capitalize(),'paragraphs':[
   f'{title} checkpoint {n} applies {stage} to {category.lower()}. The bounded objective is to {objective}. Start with the exact person or account key, source identity, collection or observation time, policy version, system revision, preparation owner, decision owner, expected state, exception, and durable evidence link. Control {control} distinguishes a source statement, an SDR observation, a normalized value, an automated result, and an authorized commercial or compliance decision. That separation prevents a convenient CRM field from implying identity, permission, fit, intent, consent, qualification, ownership, or commitment that the evidence does not establish.',
   f'For {title}, test checkpoint {n} with one ordinary synthetic or specifically authorized record, one missing-evidence case, one conflicting-source case, and one late-arriving preference or ownership update. Preserve the first observation before changing a status. Append later evidence with provenance and effective time instead of overwriting history. Compare the CRM, approved enrichment source, sequencing platform, communication log, calendar, and suppression authority only to the extent needed for {category.lower()}. A mismatch remains an exception until the named revenue, privacy, legal, or compliance owner resolves it under current policy.',
   f'Close {title} checkpoint {n} only when the evidence link, current state, next owner, due or review time, approved prospect wording, and stop rule agree. Record why an alternative state was rejected and what event would reopen the item. An SDR or support specialist may research, organize, compare, send approved messages, and route the packet; legal basis, consent, suppression policy, commercial terms, account ownership, pricing, qualification, contracting, and exception authority remain with accountable owners. If permission, identity, policy version, or jurisdiction is unclear, pause outreach and escalate rather than infer a result.'
  ]})
 return {'slug':slug,'title':title,'description':f'A controlled sales-development workflow for {category.lower()} that preserves provenance, preference evidence, exceptions, and accountable decisions.','category':category,'publishedAt':DATE,'readTime':'18 min read','thumbnail':f'/thumbnails/october-13/{slug}.svg','sections':sections,'faq':[
  {'q':f'What can an SDR prepare for {category.lower()}?','a':'An SDR can organize approved sources, compare versions, maintain exception states, send approved messages, and route evidence. The role does not invent consent, legal basis, commercial commitments, or policy decisions.'},
  {'q':'What should stop the workflow?','a':'Stop when identity, source provenance, preference evidence, policy version, jurisdiction, account ownership, or the decision owner is unclear. Preserve the observed state and escalate.'},
  {'q':'What proves completion?','a':'Completion requires durable source evidence, a reviewable state history, the accountable owner’s disposition, communication evidence where applicable, and a retention or reopening rule.'}
 ],'internalService':'/services/prospect-research','internalSibling':f'/blog/{BLOGS[(index+1)%len(BLOGS)][0]}','source':SOURCES[index%len(SOURCES)]}

def research_item(slug,title,question,evidence,index):
 sections=[]
 for n,stage in enumerate(STAGES+['replicate the result on a frozen follow-up cohort'],1):
  control=f'SRS-1013-{index+1:02d}-{n:02d}'
  paragraphs=[
   f'{title} stage {n} uses {stage} to examine {question}. Pre-register the eligible population, unit of analysis, observation window, frozen policy date, primary outcome, exclusions, subgroup plan, and intended operational decision before inspecting results. Retain {evidence}. Protocol {control} preserves source facts separately from derived fields, reviewer classifications, adjudication, and owner actions, so a corrected final record does not erase its history or turn sales-operations evidence into an unsupported legal, privacy, performance, intent, or causal conclusion.',
   f'For {title}, draw the stage {n} sample from a versioned eligible-record roster and report selected, available, unavailable, excluded, transferred, reopened, unresolved, suppressed, and late records separately. Two authorized reviewers independently label a planned reliability subset using the same codebook; calculate raw agreement and category-specific disagreement before adjudication. Freeze transformations in a reproducible query or worksheet, preserve nulls, and show how the result changes under declared denominator, timing, and inclusion alternatives. Do not describe association, reviewer agreement, or workflow timing as causation or a universal sales benchmark.',
   f'Protocol {control} minimizes personal and commercially sensitive information through pseudonymous study identifiers, least-privilege access, approved source references, field-level extraction, and a named retention owner. Suppress small or identifying cells and keep credentials, unrestricted message bodies, purchased-list payloads, and sensitive account notes outside the analysis. Any response must identify the accountable revenue, legal, privacy, or compliance owner, the permitted preparation task, effective date, monitoring window, stop threshold, rollback, and follow-up review. Permission, legal basis, suppression, qualification, compensation, pricing, contracting, and exception authority remain outside the research-preparation role.'
  ]
  if n==11: paragraphs[2]=f'Limitations. {title} stage {n} may be affected by missing events, changed policies, inconsistent clocks, selective documentation, seasonality, reviewer learning, unavailable messages, small subgroups, channel mix, and differences between sales systems. The study cannot establish causation, legal compliance, individual intent, worker performance, or a universal conversion rate. Protocol {control} requires reporting these boundaries beside the result, retaining unresolved classifications, and seeking qualified review before any operational change. Replication on a later frozen cohort is necessary before expanding the interpretation.'
  sections.append({'heading':stage.capitalize(),'paragraphs':paragraphs})
 return {'slug':slug,'title':title,'summary':f'A reproducible sales-operations protocol examining {question}, with explicit denominators, reviewer reliability, privacy limits, and decision boundaries.','cluster':'Sales operations research','publishedAt':DATE,'thumbnail':f'/thumbnails/october-13/{slug}.svg','finding':f'{title} supports only a bounded operational observation when source versions, exclusions, missingness, reviewer disagreement, sensitivity checks, and limitations remain visible.','sections':sections,'sources':SOURCES}

def svg(title,slug,kind,index):
 lines=textwrap.wrap(title,width=24,break_long_words=False,break_on_hyphens=False)
 if len(lines)>4: lines=lines[:3]+[' '.join(lines[3:])]
 titles=''.join(f'<text x="78" y="{224+i*60}" class="title">{html.escape(line)}</text>' for i,line in enumerate(lines))
 accent=['#6d5dfc','#f97316','#0ea5a4','#db2777'][index%4]
 return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc"><title id="title">{html.escape(title)}</title><desc id="desc">Sales Development Rep {kind.lower()} artwork with the exact article title.</desc><rect width="1200" height="630" rx="30" fill="#f8f7f3"/><path d="M850 0h350v630H735z" fill="#ede9fe"/><g fill="none" stroke="{accent}" stroke-width="10"><circle cx="1010" cy="258" r="84"/><path d="M928 432h164M948 388l62-82 62 82"/></g><rect x="58" y="50" width="615" height="60" rx="30" fill="#17152c"/><text x="88" y="89" class="brand">SALES DEVELOPMENT REP / {kind.upper()}</text>{titles}<line x1="78" y1="520" x2="1122" y2="520" stroke="{accent}" stroke-width="6"/><text x="78" y="570" class="footer">PROVENANCE · PREFERENCES · ACCOUNTABLE HANDOFF</text><style>.brand{{fill:#fff;font:700 20px Arial,sans-serif;letter-spacing:1.4px}}.title{{fill:#17152c;font:700 40px Georgia,serif}}.footer{{fill:#38315e;font:700 20px Arial,sans-serif;letter-spacing:1.3px}}</style></svg>'''

blogs=[blog_item(*row,i) for i,row in enumerate(BLOGS)]; research=[research_item(*row,i) for i,row in enumerate(RESEARCH)]
def ts(name,typ,values): return f"import type {{ {typ} }} from './types';\nexport const {name}: readonly {typ}[] = "+json.dumps(values,indent=2,ensure_ascii=False)+";\n"
(ROOT/'lib/october13BlogPosts.ts').write_text(ts('october13BlogPosts','BlogPost',blogs)); (ROOT/'lib/october13ResearchPosts.ts').write_text(ts('october13ResearchPosts','ResearchPost',research))
thumbs=ROOT/'public/thumbnails/october-13'; thumbs.mkdir(parents=True,exist_ok=True); items=[]
for i,(kind,item) in enumerate([*[("blog",x) for x in blogs],*[("research",x) for x in research]]):
 path=thumbs/f"{item['slug']}.svg"; path.write_text(svg(item['title'],item['slug'],kind,i)); body=' '.join(p for section in item['sections'] for p in section['paragraphs'])
 items.append({'kind':kind,'slug':item['slug'],'title':item['title'],'sourcePath':f"lib/october13{'Blog' if kind=='blog' else 'Research'}Posts.ts",'thumbnailPath':str(path.relative_to(ROOT)),'publicationDate':DATE,'wordCount':wc(body),'sha256':hashlib.sha256(body.encode()).hexdigest()})
manifest={'site':'SalesDevelopmentRep','canonicalDomain':'https://salesdevelopmentrep.com','repository':'coolifystealthagents/sales-development-rep','branch':'main','baseSha':BASE,'date':DATE,'counts':{'blog':12,'research':5,'total':17,'thumbnails':17},'items':items}
(ROOT/'publishing/2026-10-13/manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(json.dumps({'blog':len(blogs),'research':len(research),'minBlogWords':min(x['wordCount'] for x in items if x['kind']=='blog'),'minResearchWords':min(x['wordCount'] for x in items if x['kind']=='research')},indent=2))
