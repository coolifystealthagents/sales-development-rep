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
          "Separate preparation from judgment. A reviewer can classify and route;;
