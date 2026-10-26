import type { ResearchPost } from './types';
export const october25ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "list-hygiene-consistency",
    "title": "Measuring Prospect List Hygiene Consistency",
    "summary": "A method for testing whether reviewers agree on duplicates, invalid contacts, and suppression status.",
    "cluster": "List research",
    "publishedAt": "2026-10-25",
    "thumbnail": "/article-thumbnails/october-25/list-hygiene-consistency.svg",
    "finding": "A method for testing whether reviewers agree on duplicates, invalid contacts, and suppression status.",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Prospect List Hygiene Consistency asks whether two reviewers classify the same prospect list record the same way. The unit is one sales development record or event, not an individual performance rating. The method fixes the window, source, exclusions, and owner.",
          "The output is a reproducible evidence register, not a benchmark for every outbound team. It does not establish causation or a universal quality score."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect duplicate, validity, suppression, and source for each sampled record. Include routine, returned, corrected, and unresolved cases. Preserve source, version, event time, and load time.",
          "Mark missing or conflicting evidence explicitly. Do not merge records or backfill a field from a later state to make the sample cleaner."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify a frozen sample independently and record reasons. Measure classification agreement and agreement before concluding. Resolve disagreements against the written rule and revise ambiguous definitions before expanding.",
          "Separate preparation from judgment. A reviewer can classify and route; the named owner decides the exception or control change."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot prove causation and a clean CRM state does not prove a customer or prospect outcome.",
          "Give the owner a short result, population, one proposed control change, and a retest date. Change one control at a time."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "sequence-enrollment-latency",
    "title": "Measuring Sequence Enrolment Latency",
    "summary": "A method for separating preparation, approval, and actual enrolment time.",
    "cluster": "Sequence research",
    "publishedAt": "2026-10-25",
    "thumbnail": "/article-thumbnails/october-25/sequence-enrollment-latency.svg",
    "finding": "A method for separating preparation, approval, and actual enrolment time.",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Sequence Enrolment Latency asks how much enrolment time reflects preparation, owner wait, or system delay. The unit is one sales development record or event, not an individual performance rating. The method fixes the window, source, exclusions, and owner.",
          "The output is a reproducible evidence register, not a benchmark for every outbound team. It does not establish causation or a universal quality score."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect prepared time, approval, enrolment, and owner for each sampled record. Include routine, returned, corrected, and unresolved cases. Preserve source, version, event time, and load time.",
          "Mark missing or conflicting evidence explicitly. Do not merge records or backfill a field from a later state to make the sample cleaner."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify a frozen sample independently and record reasons. Measure approval latency and agreement before concluding. Resolve disagreements against the written rule and revise ambiguous definitions before expanding.",
          "Separate preparation from judgment. A reviewer can classify and route; the named owner decides the exception or control change."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot prove causation and a clean CRM state does not prove a customer or prospect outcome.",
          "Give the owner a short result, population, one proposed control change, and a retest date. Change one control at a time."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "suppression-propagation",
    "title": "Measuring Suppression Propagation",
    "summary": "A method for testing whether an opt-out reaches every outbound system.",
    "cluster": "Compliance research",
    "publishedAt": "2026-10-25",
    "thumbnail": "/article-thumbnails/october-25/suppression-propagation.svg",
    "finding": "A method for testing whether an opt-out reaches every outbound system.",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Suppression Propagation asks whether a suppression event is reflected in every sending system before the next send. The unit is one sales development record or event, not an individual performance rating. The method fixes the window, source, exclusions, and owner.",
          "The output is a reproducible evidence register, not a benchmark for every outbound team. It does not establish causation or a universal quality score."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect opt-out, systems, verification, and time for each sampled record. Include routine, returned, corrected, and unresolved cases. Preserve source, version, event time, and load time.",
          "Mark missing or conflicting evidence explicitly. Do not merge records or backfill a field from a later state to make the sample cleaner."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify a frozen sample independently and record reasons. Measure propagation coverage and agreement before concluding. Resolve disagreements against the written rule and revise ambiguous definitions before expanding.",
          "Separate preparation from judgment. A reviewer can classify and route; the named owner decides the exception or control change."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot prove causation and a clean CRM state does not prove a customer or prospect outcome.",
          "Give the owner a short result, population, one proposed control change, and a retest date. Change one control at a time."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "crm-note-quality",
    "title": "Measuring CRM Note Quality",
    "summary": "A method for testing whether a note preserves source, next step, owner, and decision.",
    "cluster": "CRM research",
    "publishedAt": "2026-10-25",
    "thumbnail": "/article-thumbnails/october-25/crm-note-quality.svg",
    "finding": "A method for testing whether a note preserves source, next step, owner, and decision.",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring CRM Note Quality asks whether another rep can reconstruct the next action from the note. The unit is one sales development record or event, not an individual performance rating. The method fixes the window, source, exclusions, and owner.",
          "The output is a reproducible evidence register, not a benchmark for every outbound team. It does not establish causation or a universal quality score."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect source, next step, owner, and decision for each sampled record. Include routine, returned, corrected, and unresolved cases. Preserve source, version, event time, and load time.",
          "Mark missing or conflicting evidence explicitly. Do not merge records or backfill a field from a later state to make the sample cleaner."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify a frozen sample independently and record reasons. Measure note completeness and agreement before concluding. Resolve disagreements against the written rule and revise ambiguous definitions before expanding.",
          "Separate preparation from judgment. A reviewer can classify and route; the named owner decides the exception or control change."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot prove causation and a clean CRM state does not prove a customer or prospect outcome.",
          "Give the owner a short result, population, one proposed control change, and a retest date. Change one control at a time."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  },
  {
    "slug": "meeting-handoff-completeness",
    "title": "Measuring Meeting Handoff Completeness",
    "summary": "A method for testing whether a booked meeting reaches the right owner with context.",
    "cluster": "Meeting research",
    "publishedAt": "2026-10-25",
    "thumbnail": "/article-thumbnails/october-25/meeting-handoff-completeness.svg",
    "finding": "A method for testing whether a booked meeting reaches the right owner with context.",
    "sections": [
      {
        "heading": "Research scope and unit",
        "paragraphs": [
          "Measuring Meeting Handoff Completeness asks whether the handoff includes attendee, agenda, source, and owner. The unit is one sales development record or event, not an individual performance rating. The method fixes the window, source, exclusions, and owner.",
          "The output is a reproducible evidence register, not a benchmark for every outbound team. It does not establish causation or a universal quality score."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Collect attendee, agenda, source, and owner for each sampled record. Include routine, returned, corrected, and unresolved cases. Preserve source, version, event time, and load time.",
          "Mark missing or conflicting evidence explicitly. Do not merge records or backfill a field from a later state to make the sample cleaner."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Two reviewers classify a frozen sample independently and record reasons. Measure handoff completeness and agreement before concluding. Resolve disagreements against the written rule and revise ambiguous definitions before expanding.",
          "Separate preparation from judgment. A reviewer can classify and route; the named owner decides the exception or control change."
        ]
      },
      {
        "heading": "Limitations and decision use",
        "paragraphs": [
          "Report counts, denominators, missing-data rates, and limitations. A bounded sample cannot prove causation and a clean CRM state does not prove a customer or prospect outcome.",
          "Give the owner a short result, population, one proposed control change, and a retest date. Change one control at a time."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Bureau of Labor Statistics, Sales Representatives",
        "url": "https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ]
  }
];
