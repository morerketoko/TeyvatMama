# AI Coding Rules

## General Rules

1. **Always read specs first** before implementing any feature
2. **Update .ai/ context** when making architectural changes
3. **Create a feature spec** in specs/ for new features before coding
4. **Keep changes minimal** and focused on the specific task
5. **Respect existing code style** (see docs/STYLEGUIDE.md)

## For AI Agents

1. Check .ai/CONTEXT.md for project background
2. Check .ai/CURRENT_TASK.md for what's being worked on
3. Read relevant specs from specs/ numbered files
4. After completing work, update CURRENT_TASK.md and DEVLOG.md
5. Create/update REVIEW.md with code review findings

## File Organization

- Place new renderer files in src/renderer/
- Place new main process files in src/main/
- Place new native C++ modules in src/native/
- Place feature documentation in specs/
- Update docs/ for user-facing documentation changes
