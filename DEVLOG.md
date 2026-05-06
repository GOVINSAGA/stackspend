## Day 1 — 2026-05-06

**Hours worked:** 5

**What I did:**
- Initialized the project using Next.js App Router with TypeScript and Tailwind CSS.
- Chose a unified Next.js architecture instead of a separate backend to reduce deployment and integration overhead during the 7-day timeline.
- Configured the initial folder structure for audit-engine logic, pricing data, validation schemas, and reusable UI components.
- Set up the repository, connected it to Vercel, and deployed the first live version early to avoid deployment surprises later in the week.
- Created all required markdown deliverables upfront so documentation can evolve incrementally instead of being rushed at the end.
- Started designing the pricing-data architecture so every recommendation in the audit engine can trace back to official pricing sources.

**What I learned:**
- The assignment is much more product-oriented than I initially expected. The evaluation criteria strongly reward execution discipline, reasoning quality, and realistic business thinking instead of pure technical complexity.
- I also realized the audit engine itself is the real product, not just the UI. The recommendation logic needs to feel financially defensible instead of sounding like generic AI-tool comparisons.

**Blockers / what I'm stuck on:**
- Still refining the first version of the audit heuristics, especially around identifying when a stack is genuinely overpaying versus already reasonably optimized.
- Need to avoid creating recommendations that feel arbitrary or forced just to manufacture savings.

**Plan for tomorrow:**
- Build the pricing data layer and validation schemas.
- Start implementing the spend-input form with localStorage persistence.
- Define the first deterministic audit rules for plan mismatch and seat inefficiency detection.



```md id="n6j5yl"
## Day 2 — 2026-05-07

**Hours worked:** 6

**What I did:**
- Designed the core TypeScript domain models for audit inputs, tool selections, and primary use cases to avoid inconsistent data structures later in the audit engine.
- Built the initial pricing-data architecture and separated pricing metadata from UI logic so plans and recommendations can be updated independently.
- Added configurable tool metadata for supported AI products including Cursor, Claude, ChatGPT, Copilot, Gemini, and Windsurf.
- Implemented Zod validation schemas for audit inputs to ensure invalid pricing or seat data is caught before audit calculations run.
- Started building the spend-input form and structured it around reusable form sections instead of hardcoded per-tool components.
- Added localStorage persistence so users do not lose audit progress after refreshing the page, which improves usability for longer multi-tool inputs.
- Started implementing the first deterministic audit rules, including plan mismatch detection and “already optimized” stack handling.
- Added the first audit-engine test cases to validate recommendation logic early instead of postponing testing until the end of the project.

**What I learned:**
- The audit logic requires much more precision than I originally expected. Small recommendation mistakes immediately make the product feel untrustworthy.
- Separating pricing configuration from business logic early makes the system easier to maintain and test.
- I also realized the project UX needs to feel lightweight and fast because founders will likely abandon the flow if the form feels too enterprise-heavy.

**Blockers / what I'm stuck on:**
- Some AI tool pricing structures are inconsistent across products, especially around API usage versus seat-based subscriptions, which makes normalization harder.
- Still refining how aggressive the recommendation engine should be when suggesting alternative tools without sounding unrealistic or biased.

**Plan for tomorrow:**
- Finish the spend-input UI and improve responsiveness.
- Expand audit-engine rules for redundant tooling and inefficient seat allocation.
- Improve test coverage for audit recommendations.
- Start designing the audit results page structure and savings summary cards.
```
