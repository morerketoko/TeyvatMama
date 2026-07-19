# Contributing

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies:
   `ash
   npm config set registry https://registry.npmmirror.com
   npm install
   cd src/native && npm install && npx node-gyp rebuild --release
   cd ../..
   `
4. Run in admin mode: 
pm start

## Development Workflow

1. Check specs/ for the latest feature specs
2. Read .ai/CURRENT_TASK.md to see what's being worked on
3. Read .ai/CODING_RULES.md for AI-specific rules
4. Create a feature branch: git checkout -b feature/<name>
5. Implement following docs/STYLEGUIDE.md
6. Submit a PR

## PR Guidelines

- Keep PRs focused on one feature/fix
- Update relevant .ai/ context files if behavior changes
- Update docs/CHANGELOG.md with changes
- Add a spec to specs/ for new features

## Reporting Issues

Use GitHub Issues. Include:
- TeyvatMama version
- Windows version
- Game being played (if relevant)
- Steps to reproduce
- Screenshots (if applicable)
