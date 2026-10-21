# Top 10 Antigravity Skills — Complete Reference Guide

This comprehensive guide details the **Top 10 Antigravity Skill Repositories** installed in your system (`~/.gemini/config/skills/` and `~/.gemini/config/plugins/`).

---

## Table of Contents

1. [How Antigravity Skills Work](#how-antigravity-skills-work)
2. [01. Superpowers (`obra/superpowers`)](#01-superpowers-obrasuperpowers)
3. [02. Ponytail (`DietrichGebert/ponytail`)](#02-ponytail-dietrichgebertponytail)
4. [03. UI UX Pro Max (`nextlevelbuilder/ui-ux-pro-max-skill`)](#03-ui-ux-pro-max-nextlevelbuilderui-ux-pro-max-skill)
5. [04. Graphify (`Graphify-Labs/graphify`)](#04-graphify-graphify-labsgraphify)
6. [05. Caveman (`JuliusBrussee/caveman`)](#05-caveman-juliusbrusseecaveman)
7. [06. Addy Osmani Skills (`addyosmani/agent-skills`)](#06-addy-osmani-skills-addyosmaniagent-skills)
8. [07. Understand Anything (`Egonex-AI/Understand-Anything`)](#07-understand-anything-egonex-aiunderstand-anything)
9. [08. Awesome Claude Skills (`ComposioHQ/awesome-claude-skills`)](#08-awesome-claude-skills-composiohqawesome-claude-skills)
10. [09. I Have ADHD (`ayghri/i-have-adhd`)](#09-i-have-adhd-ayghrii-have-adhd)
11. [10. Agentic Awesome Skills (`sickn33/agentic-awesome-skills`)](#10-agentic-awesome-skills-sickn33agentic-awesome-skills)
12. [Quick-Reference Trigger Cheat Sheet](#quick-reference-trigger-cheat-sheet)

---

## How Antigravity Skills Work

Antigravity uses **Progressive Disclosure**:

- **Lightweight by default**: Only skill names and descriptions are loaded into the AI's system prompt to save context tokens.
- **On-Demand Activation**: The AI reads the full `SKILL.md` runbook only when a task matches the skill's triggers or when you explicitly invoke it.
- **Location**: Installed globally in `C:\Users\ASEEL\.gemini\config\skills/` and `C:\Users\ASEEL\.gemini\config\plugins/`, making them available across all your projects.

---

## 01. Superpowers (`obra/superpowers`)

> **GitHub Stars:** ~289k | **Focus:** Software Engineering Rigor & Subagent Workflows

A suite of structured engineering practices that transition the AI from a simple code generator into a disciplined engineering team.

### Included Skills

- `brainstorming`: Creative divergent thinking before touching any code. Explores architectures, trade-offs, and edge cases.
- `writing-plans`: Creates structured, actionable markdown implementation plans with clear verification steps.
- `executing-plans`: Guides step-by-step execution of approved plans without drifting off-track.
- `subagent-driven-development`: Deploys parallel subagents for independent tasks, reviewing each branch before merging.
- `systematic-debugging`: Enforces root-cause debugging (hypothesize → isolate → reproduce with test → patch) instead of blind trial-and-error.
- `test-driven-development`: Red-Green-Refactor workflow ensuring unit tests exist before feature code is written.
- `verification-before-completion`: Demands proof (passing tests, lint runs, build logs) before claiming a task is done.
- `requesting-code-review` & `receiving-code-review`: Structured multi-perspective code review protocols.
- `using-git-worktrees`: Isolates feature experiments in ephemeral git worktrees without disrupting your working tree.

### When to Use

- Starting any non-trivial multi-step feature.
- Tracking down obscure bugs or flaky tests.
- When you want complete confidence that code is tested and verified.

**Triggers:** `"write a plan for this"`, `"systematic debugging"`, `"TDD this feature"`, `"verify before completing"`.

---

## 02. Ponytail (`DietrichGebert/ponytail`)

> **GitHub Stars:** ~143k | **Focus:** Senior Pragmatic Dev / Zero Bloat / YAGNI

Emulates a seasoned senior developer who refuses to over-engineer. Focuses on the smallest change that fully solves the problem, keeping dependencies lean and avoiding unnecessary abstractions.

### Included Skills

- `ponytail`: General mode for simple, clean, no-bloat coding.
- `ponytail-audit`: Audits your entire repository for bloat, unnecessary packages, slow paths, and code that can be deleted.
- `ponytail-review`: Harsh review of PRs or diffs asking: _"Is every line needed? Will this break under load?"_
- `ponytail-debt`: Generates a technical debt ledger of deferred shortcuts.
- `ponytail-gain`: Measures saved code, execution speed, and token cost.

### Ponytail Levels

- **Lite**: Mild simplification, keeps existing conventions.
- **Full (Default)**: Rejects bloated patterns, simplifies logic, favors vanilla solutions.
- **Ultra**: Strips away all boilerplate; bare minimum necessary code.

**Triggers:** `"ponytail"`, `"be lazy"`, `"simplest solution"`, `"YAGNI"`, `"audit this repo for bloat"`.

---

## 03. UI UX Pro Max (`nextlevelbuilder/ui-ux-pro-max-skill`)

> **GitHub Stars:** ~129k | **Focus:** High-End Aesthetics & Frontend Polish

Elevates interfaces from basic MVPs to stunning, consumer-grade digital experiences with rich color schemes, glassmorphism, micro-animations, and typographic precision.

### Included Skills

- `ui-ux-pro-max`: Master frontend orchestrator applying modern UX patterns, visual hierarchy, and polished interactions.
- `design`: General aesthetic guidance, spacing grids, responsive layouts, and accessibility guidelines (WCAG AAA).
- `design-system`: Three-layer design tokens (primitive → semantic → component), typography scales, and CSS variable architectures.
- `ui-styling`: Advanced CSS/Tailwind utility strategies avoiding bland browser defaults.
- `banner-design`: Creates high-impact hero banners and marketing visuals.
- `brand`: Brand identity, color harmony (tailored HSL palettes), and consistent tone of voice.
- `slides`: Generates responsive HTML presentations with interactive charts and copywriting formulas.

**Triggers:** `"make this look premium"`, `"improve UI/UX"`, `"build a design system"`, `"fix spacing and typography"`.

---

## 04. Graphify (`Graphify-Labs/graphify`)

> **GitHub Stars:** ~120k | **Focus:** Codebase Knowledge Graphs & Architecture Mapping

Turns your entire repository, documentation, and external APIs into a persistent interactive knowledge graph with god-node detection and relationship clustering.

### Key Capabilities

- Extracts abstract syntax trees (ASTs), module imports, data models, and API boundaries.
- Detects circular dependencies, architectural bottlenecks, and orphaned code.
- Answers complex queries like: _"If I change this data model, what files, controllers, and frontend routes break?"_

**Triggers:** `"graphify"`, `"map the architecture"`, `"find all dependencies of this file"`, `"explain codebase relationships"`.

---

## 05. Caveman (`JuliusBrussee/caveman`)

> **GitHub Stars:** ~107k | **Focus:** Token Compression & Ultra-Dense Communication

Forces the AI into a hyper-concise voice that eliminates conversational fluff while preserving 100% of the technical accuracy and code quality. Saves up to 60% of input/output tokens.

### Included Skills

- `caveman`: Terser conversational responses without pleasantries. Direct answers first.
- `cavecrew`: Delegates tasks to mini-investigators and builders whose outputs are compressed before entering main context.
- `caveman-commit`: Generates dense, intent-only Conventional Commit messages.
- `caveman-compress`: Compresses large memory files (e.g., `README.md`, `CLAUDE.md`, documentation) into concise summaries.
- `caveman-review`: One-line-per-finding compressed code review.

**Triggers:** `"/caveman"`, `"caveman mode"`, `"less tokens"`, `"be terse"`, `"/caveman-commit"`.

---

## 06. Addy Osmani Skills (`addyosmani/agent-skills`)

> **GitHub Stars:** ~97.5k | **Focus:** Google-Grade Web Engineering Best Practices

Curated by Google Engineering Leader Addy Osmani, this collection covers modern full-stack web standards, performance, and API design.

### Highlights (25 Skills Included)

- `browser-testing-with-devtools`: Automated real-browser testing, network request inspection, and DOM assertion.
- `api-and-interface-design`: Designing resilient REST/GraphQL APIs, schemas, and contract interfaces.
- `performance-optimization`: Core Web Vitals optimization, bundle splitting, query caching, and memoization.
- `frontend-ui-engineering`: Production-grade UI architecture, state management, and WCAG accessibility compliance.
- `code-simplification`: Behavior-preserving refactoring to eliminate cognitive complexity.
- `debugging-and-error-recovery`: Systematic runtime debugging and error boundary strategies.
- `source-driven-development`: Verifies patterns against official latest framework documentation.
- `security-and-hardening`: OWASP checks, sanitization, CSRF/XSS prevention, and secret management.

**Triggers:** `"optimize web performance"`, `"review API design"`, `"simplify this component"`, `"check accessibility"`.

---

## 07. Understand Anything (`Egonex-AI/Understand-Anything`)

> **GitHub Stars:** ~83.4k | **Focus:** Deep Code Exploration & Reverse Engineering

An analysis engine that produces visual knowledge graphs, component hierarchies, and interactive dashboards to explain any unknown project.

### Included Skills

- `understand`: Generates the core knowledge graph of the current project.
- `understand-dashboard`: Launches an interactive web dashboard visualizer.
- `understand-diff`: Analyzes git diffs and explains the blast radius of changes.
- `understand-domain`: Extracts core business logic and domain data flows.
- `understand-explain`: Deep-dive architectural explanation of a single file, class, or service.
- `understand-figma`: Ingests Figma files to map design tokens directly to code components.
- `understand-onboard`: Generates complete step-by-step developer onboarding guides for the repository.

**Triggers:** `"understand this project"`, `"explain this file in detail"`, `"generate onboarding guide"`, `"analyze this git diff"`.

---

## 08. Awesome Claude Skills (`ComposioHQ/awesome-claude-skills`)

> **GitHub Stars:** ~75.4k | **Focus:** Automation, Research & Workflow Accelerators

A collection of specialized utilities designed to automate business, marketing, research, and developer workflows.

### Included Skills

- `artifacts-builder`: Builds sophisticated, multi-component React/Tailwind/shadcn web applications.
- `competitive-ads-extractor`: Analyzes competitor ads across LinkedIn and Meta Ad Libraries for copywriting ideas.
- `content-research-writer`: Research assistant that adds authoritative citations, hooks, and fact-checks.
- `developer-growth-analysis`: Evaluates chat history to identify personal coding blind spots and learning paths.
- `domain-name-brainstormer`: Generates brandable domain ideas and verifies TLD availability.
- `file-organizer` & `invoice-organizer`: Organizes local directories, receipts, and messy folders.
- `lead-research-assistant`: Analyzes prospects, business domains, and B2B outreach strategies.
- `twitter-algorithm-optimizer`: Formats and edits posts according to open-source algorithmic engagement signals.
- `video-downloader`: High-resolution video and audio extraction utility.

**Triggers:** `"write an article with research"`, `"organize files"`, `"brainstorm domains"`, `"build an interactive artifact"`.

---

## 09. I Have ADHD (`ayghri/i-have-adhd`)

> **GitHub Stars:** ~49.1k | **Focus:** Neurodivergent-Friendly Pair Programming & High Momentum

Tailors the pairing dynamic for developers who struggle with executive dysfunction, task paralysis, cognitive overwhelm, or wandering attention.

### Workflow

1. **Micro-Slicing**: Breaks big, scary tasks into immediate 2-to-5-minute atomic steps.
2. **One Thing at a Time**: Blocks out background noise and refuses to overwhelm with 20-step checklists.
3. **Continuous Dopamine**: Celebrates small milestones and maintains rapid, rewarding momentum.
4. **Context Anchors**: Keeps track of "what we are doing right now" if you get pulled into a tangent or distraction.

**Triggers:** `"I have ADHD"`, `"I'm overwhelmed"`, `"break this into tiny pieces"`, `"help me focus"`.

---

## 10. Agentic Awesome Skills (`sickn33/agentic-awesome-skills`)

> **GitHub Stars:** ~46.6k | **Focus:** Meta-Skill Stack Composition & Autonomous Verification

An orchestration layer and plugin ecosystem for discovering, composing, and validating multi-agent stacks.

### Included Workflows

- `aas-discover`: Searches the global AAS index to find the exact skill matching an edge-case task.
- `aas-compose-stack`: Validates and links compatible skills into a unified execution pipeline.
- `aas-review-stack`: Previews execution plans and dependency requirements before running scripts.
- `acceptance-orchestrator`: Drives a task end-to-end from issue creation to deployment and acceptance verification with minimal intervention.
- `ab-testing` & `ab-test-setup`: Statistical sample sizing, variant testing, and experiment hypothesis declaration.
- `3d-web-experience`: Runbooks for debugging Three.js, React Three Fiber, and Spline 3D scenes.
- `360-feedback-system`: Structured peer reviews and organizational performance evaluation frameworks.

**Triggers:** `"compose a skill stack"`, `"acceptance test orchestrator"`, `"A/B test setup"`, `"3D web experience"`.

---

## Quick-Reference Trigger Cheat Sheet

| I want to...                                   | Recommended Skill               | Example Prompt                                                      |
| :--------------------------------------------- | :------------------------------ | :------------------------------------------------------------------ |
| **Design a clean, beautiful UI**               | `ui-ux-pro-max` / `design`      | _"Make this hero section look stunning and modern."_                |
| **Stop over-engineering / Write minimal code** | `ponytail`                      | _"Ponytail mode: what is the simplest way to add this filter?"_     |
| **Plan and execute a complex feature**         | `superpowers` (`writing-plans`) | _"Write a step-by-step implementation plan for authentication."_    |
| **Track down a mysterious bug**                | `systematic-debugging`          | _"Use systematic debugging to find why this API request fails."_    |
| **Understand a confusing repository**          | `understand` / `graphify`       | _"Map the architecture of this project and show me the data flow."_ |
| **Audit web performance or API contracts**     | `performance-optimization`      | _"Audit this page for Core Web Vitals and suggest fixes."_          |
| **Save token cost and avoid AI chattiness**    | `caveman`                       | _"Caveman mode: review this pull request diff."_                    |
| **Overcome task paralysis on a huge project**  | `i-have-adhd`                   | _"I'm overwhelmed by this refactor. Help me focus step by step."_   |
| **Extract competitor ads or research topics**  | `competitive-ads-extractor`     | _"Analyze competitors in the insurance advisory niche."_            |
| **Automate full-cycle acceptance testing**     | `acceptance-orchestrator`       | _"Take this issue from test to verification autonomously."_         |
