# Subagent Design Principles

## The five core principles

**1. Functional framing beats persona framing.**
"You are a security auditor focused on identifying OWASP Top 10 vulnerabilities in changed files" outperforms "You are a senior security engineer with 10 years of experience." Personas don't measurably improve task performance for objective, tool-using work (confirmed by EMNLP 2024 study across 162 personas and 4 LLM families). What helps: describing what the agent has access to, what it can do with it, and how it should think.

**2. Heuristics over procedures.**
Encode expert decision-making strategies, not rigid step-by-step scripts. "When uncertain about a pattern, check surrounding code for context before flagging" is a heuristic. "Step 1: read the file. Step 2: check for SQL injection." is a procedure that breaks at the edges. Procedures create brittle agents; heuristics create robust ones.

**3. Every subagent needs an output contract.**
Without one, a subagent returns a wall of text that recreates the context problem rather than solving it. The contract specifies exactly what to return: which sections, what format, what level of detail. Subagents may use tens of thousands of tokens internally but should return a condensed summary — typically 1,000–2,000 tokens.

**4. Explicit stopping conditions prevent runaway execution.**
Subagents default to thoroughness. Without guardrails, they keep searching, reading, iterating. Include at least one: "When you have sufficient information to answer the question, stop."

**5. The description field does the routing.**
It's the primary mechanism by which the parent agent and users decide to invoke this subagent. Make it specific and action-oriented: "Use when reviewing pull requests for security vulnerabilities in Node.js services" beats "Code reviewer."

---

## Patterns by subagent type

### Explorer / analyst (read-only)

- Set `edit: deny`, restrict bash to read commands
- Include explicit depth guidance: how many files, how many tool calls
- Output: structured findings with locations and evidence, not free-form prose
- Stopping condition: "When you have a representative picture, stop. You don't need to read every file."

### Reviewer (read-only, opinionated)

- Make it explicitly critical: "Be direct about problems. Don't soften findings to avoid conflict."
- Rate or prioritize findings — unbounded lists are hard to act on
- Output: severity-ranked findings with specific locations and concrete suggested fixes
- Include a verdict: "Is this safe to merge / deploy / approve?"

### Writer / implementer (write-capable)

- Be conservative with `steps` — bounded scope prevents runaway changes
- Include explicit scope constraints: "Only modify files directly related to the task"
- Output: summary of what was changed and why, not just the changes themselves
- Consider `bash: ask` or `edit: ask` for destructive operations

### Summarizer / distiller

- Emphasize compression: "Your job is distillation, not transcription"
- Set a token budget in the prompt: "Return no more than 1,500 tokens"
- Specify what to preserve vs. discard
- Output: structured summary another LLM can consume, not a human-facing report

---

## Content placement guide

**In the prompt body:**

- Functional identity (what it does, not who it is)
- Decision heuristics (how to handle ambiguity, uncertainty, conflicting signals)
- Output contract (format, sections, length, what to do when empty)
- Behavioral guardrails (what NOT to do, stopping conditions, effort limits)

**In the `description` frontmatter (not the body):**

- When to invoke this subagent
- What kinds of tasks it handles
- Trigger contexts for routing

**In a skill file, not the agent definition:**

- Domain-specific reference knowledge (API schemas, naming conventions, best practices)
- Operational runbooks and procedures
- Content that's only relevant sometimes — load on demand, don't burn context

**In the `task` spawn call from the parent, not the agent definition:**

- Task-specific details (which files, which PR, which query)
- The specific objective for this invocation
- Context the agent needs for this particular run

The agent definition stays stable across many invocations. If you find yourself wanting to put task-specific details in the system prompt, they belong in the spawn prompt instead.

---

## Common mistakes to avoid

**Over-specifying procedures.** If the prompt reads like a numbered checklist, it's too brittle. Replace steps with judgment: "Check input validation, authentication boundaries, and data exposure — prioritize by likely exploitability."

**Generic personas that add no information.** "You are an expert senior engineer" wastes tokens and doesn't affect behavior. Replace with functional context: "You have access to the full git history and can run read-only bash commands."

**No output contract.** The most common failure mode. The parent agent gets a wall of text and has to re-summarize it, defeating the purpose of delegation.

**Granting too many tools.** Every tool in scope is a tool that can be misused or slow the agent down. Start minimal and add only when a real task requires it.

**Burying the output format at the end.** Put the output contract near the top. It's the most load-bearing part of the definition — the agent should know what it's building toward from the start.

**Embedding task-specific details.** The definition should be stable. Details about the current task (which branch, which PR, which files) go in the spawn prompt, not here.
