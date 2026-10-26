import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october12BlogPosts';
import { october12ResearchPosts } from './october12ResearchPosts';
import { october13BlogPosts } from './october13BlogPosts';
import { october13ResearchPosts } from './october13ResearchPosts';
import { october25BlogBatch } from './october25Blog';
import { october25ResearchBatch } from './october25Research';
import { october22BlogBatch, october22ResearchBatch } from './october22Batch';

const existingBlogPosts: BlogPost[] = [
  {
    "slug": "fractional-sales-development-leader-vs-sdr-va",
    "title": "Fractional sales development leader vs SDR VA",
    "description": "A practical guide to fractional sales development leader vs sdr va for founders, revenue leaders, and sales development managers.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Fractional sales development leader vs SDR VA starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For founders, revenue leaders, and sales development managers, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What prospect research can handle",
        "paragraphs": [
          "Prepare focused account and contact context from approved sources. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/prospect-research",
    "internalSibling": "/blog/prospect-research-brief",
    "source": {
      "label": "Federal Trade Commission",
      "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
    }
  },
  {
    "slug": "prospect-research-brief",
    "title": "Build a prospect research brief sellers will use",
    "description": "A practical guide to build a prospect research brief sellers will use for founders, revenue leaders, and sales development managers.",
    "category": "Prospecting systems",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Build a prospect research brief sellers will use starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For founders, revenue leaders, and sales development managers, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What list building and enrichment can handle",
        "paragraphs": [
          "Build reviewable prospect lists without sacrificing source quality. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/list-building-enrichment",
    "internalSibling": "/blog/outreach-response-routing",
    "source": {
      "label": "Federal Trade Commission",
      "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
    }
  },
  {
    "slug": "outreach-response-routing",
    "title": "A clearer outreach response routing workflow",
    "description": "A practical guide to a clearer outreach response routing workflow for founders, revenue leaders, and sales development managers.",
    "category": "Outreach operations",
    "publishedAt": "2026-10-06",
    "readTime": "11 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "A clearer outreach response routing workflow starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For founders, revenue leaders, and sales development managers, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What outreach operations support can handle",
        "paragraphs": [
          "Maintain approved sequences, task queues, and response routing. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/outreach-operations",
    "internalSibling": "/blog/crm-hygiene-review",
    "source": {
      "label": "Federal Trade Commission",
      "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
    }
  },
  {
    "slug": "crm-hygiene-review",
    "title": "How to run a focused CRM hygiene review",
    "description": "A practical guide to how to run a focused crm hygiene review for founders, revenue leaders, and sales development managers.",
    "category": "CRM quality",
    "publishedAt": "2026-10-07",
    "readTime": "12 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "How to run a focused CRM hygiene review starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For founders, revenue leaders, and sales development managers, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What crm hygiene can handle",
        "paragraphs": [
          "Keep ownership, activity, and next steps accurate enough to trust. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/crm-hygiene",
    "internalSibling": "/blog/sales-development-meeting-handoff",
    "source": {
      "label": "Federal Trade Commission",
      "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
    }
  },
  {
    "slug": "sales-development-meeting-handoff",
    "title": "Design a sales development meeting handoff",
    "description": "A practical guide to design a sales development meeting handoff for founders, revenue leaders, and sales development managers.",
    "category": "Outreach operations",
    "publishedAt": "2026-10-08",
    "readTime": "13 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Design a sales development meeting handoff starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For founders, revenue leaders, and sales development managers, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What meeting coordination can handle",
        "paragraphs": [
          "Handle the scheduling and context around qualified conversations. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/meeting-coordination",
    "internalSibling": "/blog/fractional-sales-development-leader-vs-sdr-va",
    "source": {
      "label": "Federal Trade Commission",
      "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
    }
  }
];
const existingResearchPosts: ResearchPost[] = [
  {
    "slug": "prospect-research-workflow-boundary-review-1",
    "title": "Prospect research: workflow boundary review",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve prospect research workflows.",
    "cluster": "Prospecting systems",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "list-building-enrichment-source-quality-audit-2",
    "title": "List building and enrichment: source quality audit",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve list building and enrichment workflows.",
    "cluster": "Outreach operations",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "outreach-operations-exception-pattern-study-3",
    "title": "Outreach operations support: exception pattern study",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve outreach operations support workflows.",
    "cluster": "CRM quality",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "crm-hygiene-handoff-reliability-brief-4",
    "title": "CRM hygiene: handoff reliability brief",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve crm hygiene workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "meeting-coordination-review-consistency-report-5",
    "title": "Meeting coordination: review consistency report",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve meeting coordination workflows.",
    "cluster": "Prospecting systems",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "sequence-quality-review-workflow-boundary-review-6",
    "title": "Sequence quality review: workflow boundary review",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve sequence quality review workflows.",
    "cluster": "Outreach operations",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "prospect-research-source-quality-audit-7",
    "title": "Prospect research: source quality audit",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve prospect research workflows.",
    "cluster": "CRM quality",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "list-building-enrichment-exception-pattern-study-8",
    "title": "List building and enrichment: exception pattern study",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve list building and enrichment workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "outreach-operations-handoff-reliability-brief-9",
    "title": "Outreach operations support: handoff reliability brief",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve outreach operations support workflows.",
    "cluster": "Prospecting systems",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "crm-hygiene-review-consistency-report-10",
    "title": "CRM hygiene: review consistency report",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve crm hygiene workflows.",
    "cluster": "Outreach operations",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "meeting-coordination-workflow-boundary-review-11",
    "title": "Meeting coordination: workflow boundary review",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve meeting coordination workflows.",
    "cluster": "CRM quality",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "sequence-quality-review-source-quality-audit-12",
    "title": "Sequence quality review: source quality audit",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve sequence quality review workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "prospect-research-exception-pattern-study-13",
    "title": "Prospect research: exception pattern study",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve prospect research workflows.",
    "cluster": "Prospecting systems",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "list-building-enrichment-handoff-reliability-brief-14",
    "title": "List building and enrichment: handoff reliability brief",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve list building and enrichment workflows.",
    "cluster": "Outreach operations",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "outreach-operations-review-consistency-report-15",
    "title": "Outreach operations support: review consistency report",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve outreach operations support workflows.",
    "cluster": "CRM quality",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "crm-hygiene-workflow-boundary-review-16",
    "title": "CRM hygiene: workflow boundary review",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve crm hygiene workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "meeting-coordination-source-quality-audit-17",
    "title": "Meeting coordination: source quality audit",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve meeting coordination workflows.",
    "cluster": "Prospecting systems",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "sequence-quality-review-exception-pattern-study-18",
    "title": "Sequence quality review: exception pattern study",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve sequence quality review workflows.",
    "cluster": "Outreach operations",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "prospect-research-handoff-reliability-brief-19",
    "title": "Prospect research: handoff reliability brief",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve prospect research workflows.",
    "cluster": "CRM quality",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "list-building-enrichment-review-consistency-report-20",
    "title": "List building and enrichment: review consistency report",
    "summary": "A source-led brief on how founders, revenue leaders, and sales development managers can define, inspect, and improve list building and enrichment workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];

export const blogPosts: BlogPost[] = [...october25BlogBatch, ...october22BlogBatch, ...october13BlogPosts, ...october12BlogPosts, ...existingBlogPosts];
export const researchPosts: ResearchPost[] = [...october25ResearchBatch, ...october22ResearchBatch, ...october13ResearchPosts, ...october12ResearchPosts, ...existingResearchPosts];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
