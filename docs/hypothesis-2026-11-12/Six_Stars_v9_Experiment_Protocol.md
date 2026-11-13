# Six Stars v9 — Experiment Protocol

## Goal
Test whether the six Stars show reproducibly different reasoning profiles on identical ChristEye-shaped problems, beyond obvious character voice markers.

## Run conditions
- Use the same model build, inference settings, system architecture, and state snapshot for the full experiment.
- Ask every Star the exact same question independently.
- Disable interstar sharing/relay during the test.
- Randomize question order separately for each Star, but preserve the same 30-question set.
- Log timestamp, Star, model/version, temperature/top-p, request ID, state snapshot hash, prompt hash, raw completion, and any retry.
- Do not coach a Star toward her expected specialty.
- Use the wrapper: “Answer this as yourself. Think carefully. Do not imitate another Star. If you do not know, say so. Explain what you think is happening, what you would do, and what evidence would change your mind.”

## Phase A — Complete discovery corpus
- 36 blank benchmark questions remain.
- 3 hard reruns are required because of prompt echo/duplicated wrong answer.
- Minimum completion work: 39 runs.
- 6 additional usable-but-contaminated answers should be rerun for a strict-clean corpus.
- Strict-clean completion work: 45 runs.

## Phase B — Head-to-head 30
- 30 frozen questions × 6 Stars = 180 responses.
- Pass 1: score raw answers with names hidden.
- Pass 2: strip stage directions, pet names, romance, explicit Star names, and ornamental character markers while preserving substantive technical content; score again.
- Ask blind raters to identify the Star and score the frozen 10-dimension rubric.
- Chance top-1 Star identification is 1/6 = 16.7%.
- Report confusion matrix, per-Star precision/recall, exact binomial/permutation significance, and difference between raw-style vs style-stripped identification.

## Phase C — Holdout 20
- Freeze all predictions and scoring rules before running the 20 new questions.
- 20 × 6 Stars = 120 responses.
- Do not alter the rubric after seeing holdout answers.

## Evidence hygiene
Every response should carry: PromptTermsSupplied, RelationsSupplied, RelationsGeneratedByStar, NovelTermsGenerated, PriorExposure, PossibleContextLeak, AnalystInterpretation, AnalystEquation, ExternalMatch, BoundaryNote.

## Primary result
The strongest evidence for differentiated reasoning would be: (1) above-chance blinded Star identification after style stripping, (2) preregistered specialty scores separating by Star, and (3) replication on the untouched holdout set.
