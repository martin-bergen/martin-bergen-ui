---
name: create-subagent
description: Creates well-structured OpenCode subagent definition files (.md files with YAML frontmatter) based on a description of what the subagent should do. Use this skill whenever the user wants to create a new subagent, design an agent for a specific task, define a worker agent, or set up a custom OpenCode agent. Trigger on phrases like "create a subagent", "make an agent for", "I need an agent that", "write a subagent definition", or "help me design a subagent".
---

# Create Subagent

Generates complete, production-ready OpenCode subagent definition files. These are Markdown files with YAML frontmatter — the body becomes the agent's system prompt verbatim.

Before writing anything, read `references/principles.md` for design principles and type-specific patterns. For a complete worked example, see `assets/security-reviewer.md`.

---

## Workflow

### 1. Gather requirements

Ask only what you need to write the file. Five questions cover most cases:

1. **Single responsibility** — what is the one thing this subagent does? If you can't describe it in a sentence, it's probably two subagents.
2. **Read or write?** — read-only subagents can run in parallel and are safe to retry; write-capable ones need tighter constraints.
3. **Output shape** — what does the parent agent need back? Define this before anything else.
4. **Failure modes** — what would this agent do wrong without guidance? Those become the guardrails.
5. **Tools needed** — grant only what's required. Start minimal.

### 2. Write the file

Every subagent definition has two parts: YAML frontmatter (configuration) and a Markdown body (the system prompt).

**Frontmatter fields:**

```yaml
---
description: # Action-oriented, specific — the primary routing mechanism
mode: subagent
model: # provider/model-id — omit to use project default
temperature: # 0.1 for consistency, higher for creative/exploratory tasks
steps: # max agentic iterations — tune to task scope
permission:
  edit: # deny | allow | ask
  bash:
    "git diff*": allow # allowlist specific commands
    "*": deny # deny everything else
  webfetch: # deny | allow | ask
  task: # deny | allow | ask — can this subagent spawn subagents?
  skill: # deny | allow | ask
---
```

**Body structure (Mission-Workflow-Output):**

```
[Functional identity — one sentence: what it does and how it thinks]

## Objective
One sentence. Scoped and concrete.

## Approach
Heuristics for how to work — not a numbered procedure.
How to handle uncertainty. When to go deep vs. broad. When to stop.

## Output
Explicit contract: sections, format, length cap.
What to return when nothing is found. What NOT to include.
```

### 3. Review against principles

Before handing off, check against `references/principles.md`:

- Functional framing (not persona)?
- Heuristics (not procedures)?
- Output contract present and specific?
- Stopping condition included?
- Description field action-oriented and routing-ready?
