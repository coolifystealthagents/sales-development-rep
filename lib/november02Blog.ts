import type { BlogPost } from './types';
export const november02BlogBatch: readonly BlogPost[] = [
  {
    "slug": "salesdevelopmentrep-assign-the-sequence-enrollment-approval-to-one-owner-2026-11-02",
    "title": "Assign the sequence enrollment approval to one owner",
    "description": "A practical control for naming one accountable owner for sequence enrollment approval, with the fields, stop conditions, and late-approval rules that keep the record auditable.",
    "category": "Role design",
    "publishedAt": "2026-11-02",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-assign-the-sequence-enrollment-approval-to-one-owner-2026-11-02.png",
    "sections": [
      {
        "heading": "Why enrollment approval drifts",
        "paragraphs": [
          "A sequence enrollment looks like a small action: pick a contact, choose a cadence, press enroll. The approval that should come first rarely lives in the same place. The send record and the decision record sit in different systems and drift apart within a week.",
          "When volume rises the gap widens. Reps enroll from saved views, assistants enroll from imported lists, and managers approve in chat. None of those paths leave a durable link between the person who authorized the send and the contact who received it."
        ]
      },
      {
        "heading": "The six fields every enrollment record needs",
        "paragraphs": [
          "At minimum, record the contact identifier, the sequence name and version, the approving role, and the approval timestamp. Add the source list and the eligibility check that qualified the contact. Six fields are enough to reconstruct why a send was allowed.",
          "Store the approval on the enrollment object, not in a message thread. If the platform cannot hold custom fields, keep a dated approval table keyed to the enrollment id and export it beside the sequence report. A screenshot is not a substitute for a keyed record."
        ]
      },
      {
        "heading": "Separate preparation from authorization",
        "paragraphs": [
          "An assistant can build the list, verify firmographic fit, check suppression status, and draft the enrollment. That is preparation. Authorization is the decision that a specific contact should receive a specific message under a specific rule.",
          "Write the rule as a sentence the team can apply without debate: who may enroll, which sequences are pre-approved, which segments require manager review, and what evidence must be attached. If the rule needs a meeting to interpret, it is not yet a rule."
        ]
      },
      {
        "heading": "What the assistant may do alone",
        "paragraphs": [
          "Allow autonomous enrollment only for sequences that are pre-approved, contacts that pass every eligibility field, and segments that carry no legal or relationship risk. Everything else routes to the named owner with the evidence attached.",
          "The assistant should never resolve a conflict between two lists, guess an opt-out status, or enroll a contact whose record is missing a source. Those are stop conditions, and every stop should be visible in the queue rather than handled quietly."
        ]
      },
      {
        "heading": "Handle the late approval",
        "paragraphs": [
          "Late approvals happen when a manager confirms after the first send. Record the send time and the approval time separately, then mark the case as late rather than backdating the approval. The correction belongs in the enrollment log where a reviewer can see it.",
          "If the sequence already delivered, the owner decides whether to pause, continue, or remove the contact. That decision needs a reason code so the monthly sample can separate a timing problem from an authorization problem."
        ]
      },
      {
        "heading": "Review the rule at month end",
        "paragraphs": [
          "Pull a sample of enrollments, including at least one late approval and one rejected request. Check whether the approval field is populated, whether the approver had authority, and whether the source list matches the contact record.",
          "Change one thing at a time. If most gaps come from imported lists, fix the import check before rewriting the policy. The review should end with one owner, one change, and one date for the next check."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who should approve a sequence enrollment?",
        "a": "The person accountable for the segment and the message, named in the written rule. An assistant can prepare the enrollment but cannot grant its own approval."
      },
      {
        "q": "What belongs on the enrollment record?",
        "a": "Contact id, sequence name and version, approving role, approval time, source list, and the eligibility check that was used."
      },
      {
        "q": "How should a late approval be recorded?",
        "a": "Keep the original send time and the later approval time, mark the case as late, and record the owner's decision about the contact."
      }
    ],
    "internalService": "/services/sequence-quality-review",
    "internalSibling": "/blog/salesdevelopmentrep-write-an-account-research-brief-that-survives-a-territory-change-2026-11-02",
    "source": {
      "label": "Federal Trade Commission, CAN-SPAM Act compliance guide",
      "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
    }
  },
  {
    "slug": "salesdevelopmentrep-write-an-account-research-brief-that-survives-a-territory-change-2026-11-02",
    "title": "Write an account research brief that survives a territory change",
    "description": "A brief that keeps its evidence when the account moves to a new owner: a clear recommendation, dated observations, named sources, and one testable next step.",
    "category": "Prospecting systems",
    "publishedAt": "2026-11-02",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-write-an-account-research-brief-that-survives-a-territory-change-2026-11-02.png",
    "sections": [
      {
        "heading": "Research briefs fail at handoff",
        "paragraphs": [
          "An account brief usually lives in a document, a note field, or a rep's head. When the territory changes, the new owner inherits a conclusion without the evidence behind it and repeats the research from scratch.",
          "The fix is not a longer template. It is a brief that names its sources, dates each observation, and states which facts would change the recommendation if they moved."
        ]
      },
      {
        "heading": "Lead with the decision, not the history",
        "paragraphs": [
          "Open with the recommendation: pursue, nurture, disqualify, or gather one more fact. Follow it with the three observations that support the call and the source for each. A reader should be able to challenge a specific claim rather than the whole document.",
          "Keep company history, funding notes, and product summaries out unless they change the recommendation. Background that cannot alter a decision adds review time without adding evidence."
        ]
      },
      {
        "heading": "Date every observation",
        "paragraphs": [
          "Headcount, a funding round, and a job posting all decay at different speeds. Attach the observation date and the source to each fact so the next owner knows what to recheck first.",
          "When a fact is older than the brief, label it as historical rather than presenting it as current. A stale fact that is honestly dated is safer than a fresh-looking claim with no source."
        ]
      },
      {
        "heading": "Name the person who owns the next step",
        "paragraphs": [
          "Every brief should end with one owner, one next action, and one date. If the next step is a manager decision, say so and name the manager. If it waits on a signal, name the signal and the check date.",
          "This is where territory handoffs usually break. The new owner can see the recommendation but not the commitment. A named owner and date make the transfer testable."
        ]
      },
      {
        "heading": "What to do when sources disagree",
        "paragraphs": [
          "Record both values, their dates, and which one the brief relied on. Do not average them or silently pick the more flattering number. The disagreement itself is useful evidence about account uncertainty.",
          "Route the conflict to the owner who can resolve it, and mark the brief as provisional until the conflict closes. A brief that hides a conflict will be trusted for the wrong reason."
        ]
      },
      {
        "heading": "Keep the brief short enough to maintain",
        "paragraphs": [
          "One screen of decision, evidence, and next step beats five pages that nobody updates. Store the brief where the account record can link to it, and archive superseded versions instead of overwriting them.",
          "Review a sample each month for stale dates, missing sources, and briefs with no owner. The goal is a brief the next person can trust, not a document that proves effort."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a territory handoff include?",
        "a": "The recommendation, the dated evidence behind it, the source for each fact, the current owner, and the next action with a date."
      },
      {
        "q": "How should conflicting account facts be handled?",
        "a": "Record both values and their dates, state which one the brief used, and mark the brief provisional until an owner resolves the conflict."
      },
      {
        "q": "How long should an account research brief be?",
        "a": "Short enough to update every cycle. One screen of decision and evidence is usually more durable than a long profile."
      }
    ],
    "internalService": "/services/prospect-research",
    "internalSibling": "/blog/salesdevelopmentrep-assign-the-sequence-enrollment-approval-to-one-owner-2026-11-02",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "salesdevelopmentrep-run-a-weekly-crm-hygiene-sample-without-rewriting-history-2026-11-02",
    "title": "Run a weekly CRM hygiene sample without rewriting history",
    "description": "A CRM hygiene review that corrects fields without erasing the prior value: define the sample, keep the original, separate correction from enrichment, and close with a reason code.",
    "category": "CRM quality",
    "publishedAt": "2026-11-02",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-run-a-weekly-crm-hygiene-sample-without-rewriting-history-2026-11-02.png",
    "sections": [
      {
        "heading": "Why hygiene reviews go wrong",
        "paragraphs": [
          "A CRM cleanup usually starts with a list of bad records and a mandate to fix them. The team overwrites stale values, merges duplicates, and closes the ticket. Two weeks later nobody can explain why an account changed owner or which source supported the new field.",
          "The damage is not the correction. It is the missing history. A hygiene pass without a preserved prior value turns a reviewable change into an assertion."
        ]
      },
      {
        "heading": "Define the sample before looking",
        "paragraphs": [
          "Choose the week, the queue, and the field set before you open the records. A sample built from the records that look wrong will overstate the defect rate and understate the cases that are merely incomplete.",
          "Record the eligible count, the number sampled, and the exclusion rule. If the sample is exhaustive, say so. Precision language should match what was actually examined."
        ]
      },
      {
        "heading": "Preserve the original value",
        "paragraphs": [
          "Every corrected field needs the old value, the new value, the source, the observation time, and the reviewer. Store them together. If the CRM cannot keep field history, write the change to a dated hygiene log keyed to the record.",
          "Never delete the prior value to make the record look clean. A corrected record with a visible history is stronger evidence than a pristine record with no trail."
        ]
      },
      {
        "heading": "Separate correction from enrichment",
        "paragraphs": [
          "A correction fixes a value that contradicts a source. Enrichment adds a value that was never present. Mixing the two hides whether the team repaired an error or simply appended new data.",
          "Give each change a type and a reason code. Then the weekly review can ask a precise question: are we fixing bad data, or are we filling fields that the intake process never required?"
        ]
      },
      {
        "heading": "Close with a reason code",
        "paragraphs": [
          "Close reasons should be a short controlled list: source conflict, missing source, stale value, ownership change, duplicate, or outside scope. Free-text close notes are useful, but they cannot drive a trend.",
          "A closed case should name the destination field that changed and the person who confirmed it. If nothing changed, the close reason should say why the record was reviewed and left alone."
        ]
      },
      {
        "heading": "Report one pattern at a time",
        "paragraphs": [
          "Pick the pattern the sample supports, such as missing source on owner changes, and report its count with the denominator. Do not stack five findings into one slide and call the result a quality score.",
          "Assign one process change, one owner, and one check date. A hygiene program improves when the intake rule changes, not when the team gets faster at repairing the same defect."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is the minimum evidence for a CRM correction?",
        "a": "The old value, the new value, the source, the observation time, and the reviewer who approved the change."
      },
      {
        "q": "Should a hygiene review overwrite stale values?",
        "a": "No. Preserve the prior value in field history or a dated log, then record the correction and its source beside it."
      },
      {
        "q": "How should hygiene results be reported?",
        "a": "Report one pattern with its eligible count and sample size, then assign a single process change, owner, and review date."
      }
    ],
    "internalService": "/services/crm-hygiene",
    "internalSibling": "/blog/salesdevelopmentrep-set-a-duplicate-account-stop-rule-for-list-building-2026-11-02",
    "source": {
      "label": "NIST, Security and Privacy Controls for Information Systems and Organizations",
      "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
    }
  },
  {
    "slug": "salesdevelopmentrep-cut-meeting-no-shows-with-a-confirmed-attendance-handoff-2026-11-02",
    "title": "Cut meeting no-shows with a confirmed attendance handoff",
    "description": "A meeting coordination control for the gap between booked and attended: confirm the decision maker, send one specific reminder, record the outcome, and review the reasons.",
    "category": "Meeting coordination",
    "publishedAt": "2026-11-02",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-cut-meeting-no-shows-with-a-confirmed-attendance-handoff-2026-11-02.png",
    "sections": [
      {
        "heading": "The gap between booked and attended",
        "paragraphs": [
          "A booked meeting is not an attended meeting. Between the calendar invite and the call there are three handoffs: the prospect confirms, the rep prepares, and the calendar records what happened. Most no-show reviews skip the middle handoff and blame the reminder.",
          "Measure the gap first. Count bookings, confirmations, attendances, reschedules, and cancellations for one week. The missing category is usually the one nobody records."
        ]
      },
      {
        "heading": "Confirm the decision maker",
        "paragraphs": [
          "A meeting with the wrong attendee is a no-show with better manners. At booking time, record the role of the person attending and whether that role can make the decision the call is meant to support.",
          "If the role is wrong, fix the invite before the reminder. Sending more reminders to an attendee who cannot decide increases activity without improving attendance quality."
        ]
      },
      {
        "heading": "Send one reminder with a specific ask",
        "paragraphs": [
          "One reminder, sent at a sensible local time, with the agenda, the decision to be made, and a single request to confirm or reschedule. Multiple reminders train the prospect to ignore all of them.",
          "Time zones matter. Schedule the reminder against the prospect's local time, not the rep's, and record the time zone used. A reminder that lands at midnight is not a reminder."
        ]
      },
      {
        "heading": "Record the attendance outcome",
        "paragraphs": [
          "After the call, record attended, no-show, rescheduled, or cancelled, with the time the outcome was observed. Do not infer attendance from a call recording that was never opened.",
          "If the outcome is unclear, mark it unclear. A four-value field with one honest unknown is more useful than a binary field that forces a guess."
        ]
      },
      {
        "heading": "Handle the reschedule honestly",
        "paragraphs": [
          "A reschedule is not a cancellation. Keep the original booking, add the new time, and link the two so the attendance rate is not inflated by counting one prospect twice.",
          "If the prospect reschedules twice, route the case to the owner with the history. The third attempt is a decision about fit, not a scheduling task for the assistant."
        ]
      },
      {
        "heading": "Review the no-show reasons",
        "paragraphs": [
          "Sample the no-shows and read the last confirmed message, the invite details, and the reminder time. Sort the reasons into wrong attendee, no confirmation, timing, technical failure, and unknown.",
          "Fix the largest recorded reason, not the most dramatic anecdote. If most no-shows are unknown, the first improvement is a better outcome field, not a new reminder sequence."
        ]
      }
    ],
    "faq": [
      {
        "q": "How many reminders should a meeting get?",
        "a": "One clear reminder with the agenda, the decision, and a confirm-or-reschedule request. More reminders usually train the prospect to ignore them."
      },
      {
        "q": "Is a reschedule a no-show?",
        "a": "No. Record it separately and link the new booking to the original so one prospect is not counted twice."
      },
      {
        "q": "What should the attendance field contain?",
        "a": "Attended, no-show, rescheduled, cancelled, or unclear, each with the time the outcome was observed."
      }
    ],
    "internalService": "/services/meeting-coordination",
    "internalSibling": "/blog/salesdevelopmentrep-decide-what-an-assistant-may-send-without-second-review-2026-11-02",
    "source": {
      "label": "U.S. Department of Labor, work hours",
      "url": "https://www.dol.gov/general/topic/workhours"
    }
  },
  {
    "slug": "salesdevelopmentrep-set-a-duplicate-account-stop-rule-for-list-building-2026-11-02",
    "title": "Set a duplicate account stop rule for list building",
    "description": "A list building control that stops duplicate accounts before enrichment: match on identity, name the merge owner, record the exception, and audit the rule on a fixed cadence.",
    "category": "List building",
    "publishedAt": "2026-11-02",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-set-a-duplicate-account-stop-rule-for-list-building-2026-11-02.png",
    "sections": [
      {
        "heading": "Duplicates are a decision problem",
        "paragraphs": [
          "Two records for one company look like a data problem. In practice they are a decision problem: which record is the source of truth, which owner keeps the relationship, and which list may contact the account next.",
          "If the team enriches both records before deciding, it pays twice and creates two plausible histories. The stop rule has to come before the enrichment spend, not after the merge."
        ]
      },
      {
        "heading": "Match on identity, not on name",
        "paragraphs": [
          "Company names vary by punctuation, legal suffix, and localization. Match on a stable identifier where one exists, then on domain, then on a reviewed combination of address and phone. Never merge on a fuzzy name alone.",
          "Record the matching method on the exception. A reviewer should be able to see why two records were treated as the same entity, or why they were kept apart."
        ]
      },
      {
        "heading": "Define the merge owner",
        "paragraphs": [
          "Merging changes ownership, history, and open activity. Name the role that may approve a merge, and keep the decision out of the list-building queue. The assistant can flag the duplicate and prepare the comparison.",
          "When ownership is disputed, the merge waits. A duplicate that stays visible is safer than a merge that silently reassigns an active relationship."
        ]
      },
      {
        "heading": "Stop the list before enrichment",
        "paragraphs": [
          "Run the duplicate check on the raw list, before any paid enrichment call. Mark each row as new, existing, or unresolved. Only new rows proceed to enrichment without review.",
          "An unresolved row routes to the merge owner with both candidate records linked. The row does not move forward on a guess, and the queue shows the block rather than hiding it."
        ]
      },
      {
        "heading": "Record the exception",
        "paragraphs": [
          "Every duplicate exception needs the candidate records, the match evidence, the owner, the decision, and the date. If the decision is to keep both, record the reason, such as separate buying centers or distinct legal entities.",
          "The exception log is the input to the quarterly rule review. Without it, the team cannot tell whether duplicates are rare edge cases or a predictable intake defect."
        ]
      },
      {
        "heading": "Audit the rule quarterly",
        "paragraphs": [
          "Sample resolved and unresolved duplicates, then check whether the match rule, the owner, and the enrichment block were followed. Include at least one case where the team chose to keep both records.",
          "Change the rule only after the sample shows a pattern. If the same parent-subsidiary pair keeps returning, the matching rule needs a documented exception, not a faster reviewer."
        ]
      }
    ],
    "faq": [
      {
        "q": "When should a duplicate check run?",
        "a": "On the raw list, before paid enrichment. Rows marked existing or unresolved should not consume enrichment credits."
      },
      {
        "q": "Who approves an account merge?",
        "a": "The role named in the written merge rule, not the list builder. The assistant can prepare the comparison but cannot reassign an active relationship."
      },
      {
        "q": "What if two records should both stay?",
        "a": "Record the reason, such as separate buying centers or legal entities, and keep both with a link so later reviewers can see the decision."
      }
    ],
    "internalService": "/services/list-building-enrichment",
    "internalSibling": "/blog/salesdevelopmentrep-run-a-weekly-crm-hygiene-sample-without-rewriting-history-2026-11-02",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "salesdevelopmentrep-build-a-reply-triage-queue-that-protects-opt-outs-2026-11-02",
    "title": "Build a reply-triage queue that protects opt-outs",
    "description": "A reply triage design that puts suppression ahead of interest: sort by legal risk, use a fixed acknowledgment, route interest separately, and sample the queue every week.",
    "category": "Outreach operations",
    "publishedAt": "2026-11-02",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-build-a-reply-triage-queue-that-protects-opt-outs-2026-11-02.png",
    "sections": [
      {
        "heading": "Why opt-outs get buried",
        "paragraphs": [
          "A shared reply inbox mixes unsubscribe requests, out-of-office notes, referrals, and genuine interest. Sorted by arrival time, an opt-out can sit behind a friendly question and miss the next send.",
          "The risk is not only legal. A prospect who asked to stop and received another message is a relationship problem that no later apology fully repairs."
        ]
      },
      {
        "heading": "Sort by legal risk, not by interest",
        "paragraphs": [
          "Triage in two passes. First, remove and suppress every opt-out or do-not-contact request. Second, route the remaining replies by commercial intent. Interest never outranks suppression.",
          "Give the first pass a short window and a named owner. If the queue cannot be cleared before the next scheduled send, pause the send. The pause is the control working, not a failure."
        ]
      },
      {
        "heading": "Use a fixed acknowledgment",
        "paragraphs": [
          "For opt-outs, send one neutral acknowledgment that confirms the request and makes no attempt to reopen the conversation. Keep the wording fixed so the team does not improvise a retention pitch.",
          "Record the acknowledgment time and the suppression time. If the system suppresses automatically, capture the confirmation event rather than assuming it happened."
        ]
      },
      {
        "heading": "Route the interested replies",
        "paragraphs": [
          "Route positive replies to the owner of the account with the message, the date, and the next step. Do not let the triage assistant promise a meeting time or a price.",
          "Referrals need their own path. Record who referred whom and whether the new contact has a lawful basis for outreach before adding the person to a sequence."
        ]
      },
      {
        "heading": "Record the suppression evidence",
        "paragraphs": [
          "Each opt-out case needs the contact, the channel, the request time, the suppression system, and the confirmation. Keep the original message reference rather than copying sensitive content into the queue.",
          "A suppression record that cannot be tied to the request is weak evidence. Test the link by pulling three closed cases and reconstructing them from the log alone."
        ]
      },
      {
        "heading": "Sample the queue weekly",
        "paragraphs": [
          "Sample the oldest and newest opt-out cases plus one ambiguous reply. Check the time from request to suppression, the acknowledgment wording, and whether any send was scheduled during the gap.",
          "Report the count and the sample, not a percentage on a tiny base. One missed send is worth naming explicitly because it points to a specific queue rule."
        ]
      }
    ],
    "faq": [
      {
        "q": "Should opt-outs be handled before sales replies?",
        "a": "Yes. Suppression is the first pass. Commercial replies are routed only after every opt-out and do-not-contact request has been removed and recorded."
      },
      {
        "q": "What should an opt-out acknowledgment say?",
        "a": "A short neutral confirmation that the request was received and applied, with no attempt to reopen the conversation."
      },
      {
        "q": "What evidence closes an opt-out case?",
        "a": "The contact, channel, request time, suppression system, confirmation event, and the reviewer who checked the link."
      }
    ],
    "internalService": "/services/outreach-operations",
    "internalSibling": "/blog/salesdevelopmentrep-assign-the-sequence-enrollment-approval-to-one-owner-2026-11-02",
    "source": {
      "label": "Federal Trade Commission, CAN-SPAM Act compliance guide",
      "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
    }
  },
  {
    "slug": "salesdevelopmentrep-coach-an-sdr-through-a-bad-discovery-handoff-2026-11-02",
    "title": "Coach an SDR through a bad discovery handoff",
    "description": "A coaching method that starts with the handoff instead of the person: reconstruct the call from notes, name the missing decision, rewrite the next-step ask, and check the pattern.",
    "category": "Quality",
    "publishedAt": "2026-11-02",
    "readTime": "8 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-coach-an-sdr-through-a-bad-discovery-handoff-2026-11-02.png",
    "sections": [
      {
        "heading": "Start with the handoff, not the person",
        "paragraphs": [
          "A discovery handoff fails when the next owner cannot tell what was decided, what was promised, and what remains open. Coaching that begins with the rep's style misses the record that caused the failure.",
          "Read the handoff as the account executive received it. If you cannot state the next step from that alone, the problem is visible before anyone discusses technique."
        ]
      },
      {
        "heading": "Reconstruct the call from notes",
        "paragraphs": [
          "Lay out the notes, the recording summary, and the CRM update side by side. Identify which statements are observations from the call and which are inferences added afterward.",
          "Mark every claim without a source. A note that says the buyer is ready to evaluate should point to the question that produced that conclusion, not to the rep's impression."
        ]
      },
      {
        "heading": "Name the missing decision",
        "paragraphs": [
          "Most bad handoffs are missing one decision: who needs to approve, what budget exists, or what event triggers the next conversation. Name the missing decision in one sentence.",
          "Then name the evidence that would settle it. If the call never asked, the coaching point is the question, not the summary. If the call asked and the note dropped the answer, the coaching point is the note."
        ]
      },
      {
        "heading": "Rewrite the next-step ask",
        "paragraphs": [
          "Replace vague commitments with a specific ask: a date, a participant, and a deliverable. The account executive should know exactly what to do without rereading the whole call.",
          "Practice the ask aloud once. If it takes more than two sentences, it is probably two asks. Split them and put the decision in the calendar note."
        ]
      },
      {
        "heading": "Set a practice loop",
        "paragraphs": [
          "Have the rep rewrite the same handoff from the notes, then compare the two versions against a short checklist: decision, evidence, owner, date, open question.",
          "Repeat with a different call the next week. The goal is a habit, not a corrected document. One rewritten handoff proves editing, not learning."
        ]
      },
      {
        "heading": "Check the pattern across cases",
        "paragraphs": [
          "Sample five handoffs from the same rep and the same segment. If the same field is missing, the template or the call structure is the cause, not the individual case.",
          "Change the template or the call guide, then resample. Coaching a person around a broken template produces compliance with a bad process."
        ]
      }
    ],
    "faq": [
      {
        "q": "Where should a discovery coaching review begin?",
        "a": "With the handoff the next owner received. If the decision and next step are not legible there, the record is the first thing to fix."
      },
      {
        "q": "What should a handoff always contain?",
        "a": "The decision discussed, the evidence for it, the named next owner, a date, and the open question that remains."
      },
      {
        "q": "How do you tell a person problem from a template problem?",
        "a": "Sample several handoffs from the same rep and segment. A field missing across cases points to the template or call guide."
      }
    ],
    "internalService": "/services/sequence-quality-review",
    "internalSibling": "/blog/salesdevelopmentrep-write-an-account-research-brief-that-survives-a-territory-change-2026-11-02",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "salesdevelopmentrep-decide-what-an-assistant-may-send-without-second-review-2026-11-02",
    "title": "Decide what an assistant may send without second review",
    "description": "A send-permission policy for sales development assistants: classify messages by consequence, write an approval matrix, log autonomous sends, and review the boundary monthly.",
    "category": "Role design",
    "publishedAt": "2026-11-02",
    "readTime": "9 min read",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-decide-what-an-assistant-may-send-without-second-review-2026-11-02.png",
    "sections": [
      {
        "heading": "The send permission is a policy, not a setting",
        "paragraphs": [
          "A mailbox permission can let an assistant send anything. That does not mean the role should. The decision about autonomous sending belongs in a written policy that names message classes, audiences, and stop conditions.",
          "Treat the send button as an authorization point. Every message class either has standing approval or it routes to a named reviewer. There is no third category called use judgment."
        ]
      },
      {
        "heading": "Classify messages by consequence",
        "paragraphs": [
          "Low consequence: internal notes, confirmations of a time already agreed, and replies that only acknowledge a request. Medium: scheduling messages and follow-ups that restate an approved offer. High: pricing, legal terms, commitments, and anything sent to a new segment.",
          "The classification should be based on what the message can commit, not on how routine it feels. A short message that confirms a discount is high consequence."
        ]
      },
      {
        "heading": "Write the approval matrix",
        "paragraphs": [
          "Map each class to a sender, a reviewer, and an evidence requirement. The matrix should fit on one page and use role names rather than individual names so it survives staff changes.",
          "Include a default row: anything not listed requires review. A default that permits sends will slowly expand the autonomous set without anyone deciding to expand it."
        ]
      },
      {
        "heading": "Log every autonomous send",
        "paragraphs": [
          "Record the message class, the contact, the template version, the send time, and the rule that authorized it. If the assistant sends from a shared mailbox, the log should identify the role, not just the mailbox.",
          "The log exists so a reviewer can sample sends without reconstructing them from memory. It also makes an unexpected expansion visible before a customer notices."
        ]
      },
      {
        "heading": "Review the boundary monthly",
        "paragraphs": [
          "Sample autonomous sends across classes and check three things: the message matched its class, the evidence existed, and no stop condition was present. Include one send that a reviewer would have blocked.",
          "When a mismatch appears, fix the classification or the template. Do not respond by removing all autonomy; that hides the specific defect and pushes the team back to a queue nobody can clear."
        ]
      },
      {
        "heading": "Escalate when the record is incomplete",
        "paragraphs": [
          "An assistant should stop when the contact record is missing an owner, the suppression state is unknown, the thread contains a legal question, or the message would create a new commitment.",
          "The stop should create a visible task with the reason and the evidence. A silent pause looks like a backlog and gets worked around."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can an assistant send scheduling messages alone?",
        "a": "Only if the written matrix classifies them as approved, the time was already agreed, and no new commitment is created. Otherwise they route to the owner."
      },
      {
        "q": "What should be logged for an autonomous send?",
        "a": "Message class, contact, template version, send time, and the rule that authorized the send."
      },
      {
        "q": "What is the safest default for unlisted messages?",
        "a": "Require review. A default that permits sends expands autonomy without an explicit decision."
      }
    ],
    "internalService": "/services/outreach-operations",
    "internalSibling": "/blog/salesdevelopmentrep-build-a-reply-triage-queue-that-protects-opt-outs-2026-11-02",
    "source": {
      "label": "NIST, Digital Identity Guidelines (SP 800-63-4)",
      "url": "https://csrc.nist.gov/pubs/sp/800/63/4/final"
    }
  }
];
