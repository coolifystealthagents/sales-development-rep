import type { ResearchPost } from './types';
export const november02ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "salesdevelopmentrep-how-often-do-sequence-enrollments-lack-documented-approval-2026-11-02",
    "title": "How often do sequence enrollments lack documented approval?",
    "summary": "A measurement design for the share of sequence enrollments that cannot be tied to a named approver, using one population, one window, and a fixed case key.",
    "cluster": "Sequence quality",
    "publishedAt": "2026-11-02",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-how-often-do-sequence-enrollments-lack-documented-approval-2026-11-02.png",
    "finding": "The share can be reported only when the enrollment id, the approval event, and the send time are joined on the same case key; otherwise the result measures record access, not approval.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks a narrow question: in one defined enrollment population and one observation window, how many enrollments can be tied to a named approver before the first send? It does not estimate whether the sequence was well written or whether the contact was a good fit.",
          "The decision the result should inform is where to place the approval control. If most gaps sit in imported lists, the intake check is the place to fix. If they sit in manual enrollments, the send permission is the place."
        ]
      },
      {
        "heading": "Population and case key",
        "paragraphs": [
          "Define one case as one contact enrolled in one sequence version during the window. Decide before collection whether a re-enrollment after a pause is a new case or a continuation, and apply the rule consistently.",
          "Use the enrollment id as the case key and carry it into the approval log and the send log. If the platform lacks an id, create one at export time and record the export date, filter, and row count."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "An approval is documented only when the approval event names the approver, the time, the sequence version, and the contact or segment. A chat message without those fields is a lead, not evidence.",
          "Treat missing, unavailable, and confirmed negative as three states. An enrollment with no approval record is not the same as an enrollment explicitly rejected. Collapsing them hides the difference between a gap and a decision."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "If the population is small, report every case and say the sample is exhaustive. If it is large, use consecutive enrollments and stratify by source list so the sample is not only the manually reviewed work.",
          "Include adverse cases: a late approval, a disputed approver, and an enrollment that was paused before send. These are where the definition is tested and where a clean-looking rate usually breaks."
        ]
      },
      {
        "heading": "Limits and reporting",
        "paragraphs": [
          "Report the eligible count, the sampled count, the exclusions, and the number of cases that could not be classified. A rate without those numbers is not reproducible.",
          "The cited public sources frame recordkeeping and control practice; they do not supply a result for this population. Any change to the sequence tool, the approval rule, or the source list during the window should be recorded as a limit."
        ]
      }
    ],
    "sources": [
      {
        "label": "Federal Trade Commission, CAN-SPAM Act compliance guide",
        "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST, Security and Privacy Controls for Information Systems and Organizations",
        "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
      }
    ]
  },
  {
    "slug": "salesdevelopmentrep-where-does-account-research-time-accumulate-before-first-touch-2026-11-02",
    "title": "Where does account research time accumulate before first touch?",
    "summary": "A time-segmentation method for account research, separating list intake, source verification, note writing, and review so delay is visible by stage rather than as one total.",
    "cluster": "Prospecting systems",
    "publishedAt": "2026-11-02",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-where-does-account-research-time-accumulate-before-first-touch-2026-11-02.png",
    "finding": "A single research cycle time hides the stage where work waits; the useful measure is elapsed time per stage with the queue owner and the blocking reason recorded.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks where elapsed time accumulates between a qualified account entering the research queue and the first approved touch. It does not measure research quality or the value of the account.",
          "Name the stages before collection: intake, source verification, brief writing, review, and release to outreach. If the team uses different stage names, map them to these five and keep the mapping with the data."
        ]
      },
      {
        "heading": "Unit and observation window",
        "paragraphs": [
          "The unit is one account research case. Link it to the account id and the first approved send. A case that is reopened after a correction keeps the original open time and adds a separate reopen event.",
          "Choose a window long enough for the slowest legitimate case to finish, then report cases still open at the close separately. Excluding them would remove the delay the study is trying to find."
        ]
      },
      {
        "heading": "Data sources and definitions",
        "paragraphs": [
          "Collect timestamps from the queue system, the source tool, and the send log. Record the extraction time and the field used for each timestamp, because a status field and an event log rarely agree.",
          "Define waiting time as the gap between the end of one stage and the start of the next, with the owner of the receiving queue named. Work time is a separate measure and should not be inferred from elapsed time."
        ]
      },
      {
        "heading": "Sampling and exclusions",
        "paragraphs": [
          "Sample consecutive cases and include at least one that waited on the account owner and one that waited on source access. Record every exclusion with its reason and date.",
          "If a case moved between researchers, keep both owner periods and record the handoff time. A single total for the case would attribute the second owner's wait to the first."
        ]
      },
      {
        "heading": "Limits and interpretation",
        "paragraphs": [
          "Timestamps may be entered at the end of the day, and a queue status may be updated later than the real handoff. Report the granularity of the timestamps and any known recording lag.",
          "The result describes where time was observed in this population. It does not prove that removing a stage will shorten the cycle, because the stages may overlap or protect quality."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor, work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "CISA, cybersecurity best practices",
        "url": "https://www.cisa.gov/topics/cybersecurity-best-practices"
      }
    ]
  },
  {
    "slug": "salesdevelopmentrep-what-share-of-crm-hygiene-exceptions-clear-in-one-business-day-2026-11-02",
    "title": "What share of CRM hygiene exceptions clear within one business day?",
    "summary": "A clearance-time protocol for CRM hygiene exceptions, with an explicit clock, a preserved prior value, and a close reason that separates repair from enrichment.",
    "cluster": "CRM quality",
    "publishedAt": "2026-11-02",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-what-share-of-crm-hygiene-exceptions-clear-in-one-business-day-2026-11-02.png",
    "finding": "Clearance time is interpretable only when the clock start, the business-day rule, and the closing event are defined before collection and applied to every exception.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The question is how many CRM hygiene exceptions opened in the window reached a documented close within one business day. It does not measure whether the corrected value was the best possible value.",
          "State the decision the result informs: staffing the hygiene queue, changing the intake rule, or setting a service expectation. Each implies a different denominator and a different close event."
        ]
      },
      {
        "heading": "The clock and the calendar",
        "paragraphs": [
          "Define the start as the time the exception was created, not the time it was first assigned. Define the stop as the time the destination field changed and the reviewer confirmed it.",
          "Business days need a time zone, a start hour, an end hour, and a holiday rule. Write them down. A one-day target that silently uses weekends will overstate or understate clearance depending on the week."
        ]
      },
      {
        "heading": "Evidence for a close",
        "paragraphs": [
          "A close needs the old value, the new value, the source, the reviewer, and the reason code. An exception closed because the record was deleted is not a repair and should be reported separately.",
          "Keep enrichment changes distinct from corrections. Mixing them lets the team improve the clearance rate by adding fields rather than fixing the ones that were wrong."
        ]
      },
      {
        "heading": "Sampling and exclusions",
        "paragraphs": [
          "Use consecutive exceptions from the queue and include at least one reopened case and one that was rejected as outside scope. Record the eligible count and every exclusion.",
          "If the queue changed its definition during the window, split the data at the change and report both periods rather than blending them into one rate."
        ]
      },
      {
        "heading": "Limits and reporting",
        "paragraphs": [
          "Report the median and the count, not only a percentage. A small sample can move several points on one case, and a median makes that sensitivity visible.",
          "The public sources cited here describe control and recordkeeping practice, not a benchmark for this queue. Report the observed distribution and the cases that drove it."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST, Security and Privacy Controls for Information Systems and Organizations",
        "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "CISA, cybersecurity best practices",
        "url": "https://www.cisa.gov/topics/cybersecurity-best-practices"
      }
    ]
  },
  {
    "slug": "salesdevelopmentrep-how-complete-is-meeting-attendance-evidence-in-the-calendar-2026-11-02",
    "title": "How complete is meeting attendance evidence in the calendar?",
    "summary": "An evidence-completeness audit for meeting attendance, testing whether each booking has a recorded outcome, an attendee role, and a linked reschedule history.",
    "cluster": "Meeting coordination",
    "publishedAt": "2026-11-02",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-how-complete-is-meeting-attendance-evidence-in-the-calendar-2026-11-02.png",
    "finding": "Attendance evidence is complete only when the booking, the attendee role, the observed outcome, and any linked reschedule share one case key and one observation time.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks how many booked meetings in the window have a complete attendance record. Completeness means an outcome observed at the time, not a status inferred later from a recording or a note.",
          "It does not measure whether the meeting was valuable, whether the right decision was reached, or whether the rep performed well."
        ]
      },
      {
        "heading": "Unit and fields",
        "paragraphs": [
          "The unit is one booked meeting. Required fields are the booking id, the attendee role, the scheduled time with time zone, the observed outcome, the observation time, and any linked reschedule id.",
          "Decide whether a meeting with two internal attendees is one unit or several, and apply the rule consistently. Record the decision in the data dictionary with the date it took effect."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "An outcome recorded the next week is weaker evidence than one recorded after the call. Keep the observation time so the reader can judge the gap between the meeting and the record.",
          "Unclear is a legitimate value. A binary attended or no-show field forces a guess when the calendar, the recording, and the rep note disagree."
        ]
      },
      {
        "heading": "Collection and sample",
        "paragraphs": [
          "Pull consecutive bookings and include at least one reschedule, one cancellation, and one meeting with an attendee whose role is unknown. These cases test the completeness definition.",
          "Record the calendar export date, the filter, and the row count. If the export omits cancelled events, say so, because the missing rows change the denominator."
        ]
      },
      {
        "heading": "Limits and reporting",
        "paragraphs": [
          "Calendar data is maintained for scheduling, not for measurement. Fields may be reused, time zones may be stored inconsistently, and reschedules may create new events without linking the old one.",
          "Report completeness by field as well as overall, so a single missing field does not hide behind a high total. The cited sources frame scheduling and recordkeeping context; they do not provide a result for this calendar."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor, work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "salesdevelopmentrep-do-opt-outs-reach-suppression-before-the-next-send-2026-11-02",
    "title": "Do opt-outs reach suppression before the next send?",
    "summary": "A suppression-timing audit that links the request, the suppression event, and the next scheduled send on one case key, with a clear rule for ambiguous requests.",
    "cluster": "Compliance operations",
    "publishedAt": "2026-11-02",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-do-opt-outs-reach-suppression-before-the-next-send-2026-11-02.png",
    "finding": "The control can be tested only by joining the request time, the suppression confirmation, and the next send time; measuring any one of them alone cannot show whether a message was sent after an opt-out.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The question is whether each opt-out or do-not-contact request in the window reached the suppression system before the next scheduled message to that contact. It is a timing question, not a legal opinion.",
          "Name the channels in scope: email, phone, social, and any automated sequence that can send without a manual step. A channel left out of the population can hide a real failure."
        ]
      },
      {
        "heading": "Case key and joins",
        "paragraphs": [
          "Use the contact id plus the channel as the case key. Join the reply log, the suppression system, and the send log on that key. Record the export time for each source.",
          "If the systems use different identifiers, keep the crosswalk in an approved location and record the mapping date. A join built from memory is not reproducible."
        ]
      },
      {
        "heading": "Ambiguous requests",
        "paragraphs": [
          "A request to stop calling is not automatically a request to stop emailing, and a request to pause is not always an opt-out. Define how each phrase is classified and who resolves ambiguity.",
          "Record the classification, the reviewer, and the date. Cases that cannot be classified belong in a separate unresolved count, not in the numerator or denominator."
        ]
      },
      {
        "heading": "Observation and clock",
        "paragraphs": [
          "Measure from the request time to the suppression confirmation, then compare the confirmation time with the next send time. A request that arrived after a send is a different finding from a request that was ignored.",
          "Use one time zone and state it. Keep the original timestamps rather than the display time in the queue, and record any clock differences between systems."
        ]
      },
      {
        "heading": "Limits and reporting",
        "paragraphs": [
          "Suppression may be applied by a vendor whose confirmation arrives later than the actual block. The record can show the confirmation, not the instant the block took effect.",
          "Report counts and the sampled window, and describe every case where the join failed. The sources cited here frame direct-marketing and privacy practice; they do not decide the outcome for this population."
        ]
      }
    ],
    "sources": [
      {
        "label": "Federal Trade Commission, CAN-SPAM Act compliance guide",
        "url": "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "UK Information Commissioner's Office, direct marketing guidance",
        "url": "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "salesdevelopmentrep-how-stable-is-territory-coverage-when-one-sdr-is-out-2026-11-02",
    "title": "How stable is territory coverage when one SDR is out?",
    "summary": "A coverage-stability method that measures queue ownership, handoff time, and unresolved accounts when one territory owner is unavailable.",
    "cluster": "Continuity",
    "publishedAt": "2026-11-02",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-how-stable-is-territory-coverage-when-one-sdr-is-out-2026-11-02.png",
    "finding": "Coverage can be described without guessing intent when each account has a named backup, a handoff event, and a recorded period of unowned time.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks what happens to a territory when one owner is unavailable for a defined period. It looks at queue ownership, handoff time, and accounts with no named backup.",
          "It does not measure revenue impact or individual performance. The purpose is to make coverage visible before an absence becomes a customer-facing delay."
        ]
      },
      {
        "heading": "Unit and ownership record",
        "paragraphs": [
          "The unit is one account with an active queue item. Record the primary owner, the backup owner, the handoff time, and the period when neither owner had acted.",
          "A backup named in a document but never enabled in the system is not coverage. Check the system assignment, not only the roster."
        ]
      },
      {
        "heading": "Definitions",
        "paragraphs": [
          "Define unowned time as the interval after the primary owner becomes unavailable and before a backup opens or acknowledges the item. Pauses requested by the account are separate and should be recorded as pauses.",
          "Decide whether a reassignment that happens after the first customer message counts as late. The definition should be written before the sample so the answer is not chosen after seeing the cases."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample absences rather than accounts where possible, then sample queue items within each absence. Include planned leave, unplanned absence, and a partial-day gap.",
          "Record the source of the absence dates, the system assignment log, and the queue export time. If the roster and the system disagree, keep both and report the disagreement."
        ]
      },
      {
        "heading": "Limits and reporting",
        "paragraphs": [
          "A small number of absences makes the result unstable, so report the count and the range rather than a precise average. One long absence can dominate a short window.",
          "The cited public sources frame work-time and control practice; they do not provide a coverage benchmark. Report the observed pattern and the cases that created the largest unowned period."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor, work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "CISA, cybersecurity best practices",
        "url": "https://www.cisa.gov/topics/cybersecurity-best-practices"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "salesdevelopmentrep-can-a-reply-handling-report-be-reproduced-from-source-records-2026-11-02",
    "title": "Can a reply-handling report be reproduced from its source records?",
    "summary": "A reproducibility test for reply-handling reports: fixed definitions, a stable case key, preserved source versions, and an explicit list of exclusions.",
    "cluster": "Measurement",
    "publishedAt": "2026-11-02",
    "thumbnail": "/article-thumbnails/november-02/salesdevelopmentrep-can-a-reply-handling-report-be-reproduced-from-source-records-2026-11-02.png",
    "finding": "A reply report is reproducible only when a second reviewer can rebuild the same numerator and denominator from the named sources without consulting the author.",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This brief asks whether a reply-handling report can be rebuilt from its source records by a reviewer who did not produce it. It tests the method, not the commercial quality of the replies.",
          "Choose one report and one period. Reproduce the count of replies, the classification of each reply, and the count excluded from the denominator."
        ]
      },
      {
        "heading": "Definitions and case key",
        "paragraphs": [
          "Write the definitions for a reply, a positive reply, an opt-out, a referral, and an auto-reply. Then assign one case key per reply and keep it stable across the inbox export and the CRM.",
          "A definition that depends on the reviewer's memory is not reproducible. Include one example and one non-example for each class so a second reviewer can apply the rule."
        ]
      },
      {
        "heading": "Source versions",
        "paragraphs": [
          "Record the inbox export date, the CRM export date, the report version, and the person who approved each. If a label changed during the period, preserve the earlier label and add a dated note.",
          "Do not overwrite an earlier classification to match a later report. The difference between the two is evidence about how the definition changed."
        ]
      },
      {
        "heading": "Reconstruction test",
        "paragraphs": [
          "Have a second reviewer rebuild the report from the sources and the written rules alone. Compare the counts and the case-level classifications, then explain every difference.",
          "A difference is not automatically an error. It may show an ambiguous rule, a missing export, or a legitimate judgment. Classify the cause before changing the report."
        ]
      },
      {
        "heading": "Limits and reporting",
        "paragraphs": [
          "Reproducibility does not prove the report is useful or that the classifications are correct. It proves that the method can be repeated, which is a precondition for trusting a trend.",
          "Report the reconstruction result, the differences, and the open questions. The sources cited here frame recordkeeping and control practice; they do not validate this specific report."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST, Security and Privacy Controls for Information Systems and Organizations",
        "url": "https://www.nist.gov/publications/security-and-privacy-controls-information-systems-and-organizations"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "CISA, cybersecurity best practices",
        "url": "https://www.cisa.gov/topics/cybersecurity-best-practices"
      }
    ]
  }
];
