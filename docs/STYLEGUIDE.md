# Style Guide

## JavaScript
- **Runtime**: CommonJS (Electron), ES modules in renderer via bundling
- **Naming**: camelCase for functions/variables, PascalCase for classes
- **Indentation**: 2 spaces
- **Quotes**: Single quotes preferred
- **Semicolons**: Required
- **Error handling**: Always wrap native module calls in try/catch with fallbacks

## C++ (Native Modules)
- **Naming**: snake_case for functions, PascalCase for classes
- **Error handling**: Return bool/NULL on failure, never throw across FFI boundary
- **Memory**: Manual management with RAII where practical
- **API**: Expose via N-API (napi.h)

## CSS
- **Naming**: kebab-case class names
- **Organization**: Component-first, then layout, then utilities
- **Colors**: Use CSS variables for theme support

## Git
- **Branch naming**: eature/<name>, ix/<name>, chore/<name>
- **Commit messages**: [type]: [description] in Chinese for main message
- **Commits**: Small, focused commits; one concern per commit

## Project Organization
- Keep renderer (UI), main (logic), and native (C++) concerns separated
- New features start with a spec in specs/
- Update .ai/ context when architectural changes occur
