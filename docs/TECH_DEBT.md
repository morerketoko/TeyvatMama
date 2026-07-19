# Technical Debt

## Known Issues

1. **GPU hardware acceleration disabled globally**
   - pp.disableHardwareAcceleration() is called unconditionally
   - This hurts performance for normal desktop use
   - Should be a runtime toggle rather than app-level switch

2. **No test coverage**
   - Zero tests exist for main process, renderer, or native modules
   - Manual testing is the only QA process

3. **Hardcoded Bilibili optimization**
   - Media control scripts are tightly coupled to Bilibili's DOM structure
   - Should use a plugin/selector-based approach for site-specific controls

4. **Global shortcut scope**
   - globalShortcut registers system-wide hotkeys
   - No per-profile or per-game shortcut configurations possible

5. **CSS in single file**
   - All styles in src/renderer/assets/styles.css (~13KB)
   - Difficult to maintain as the app grows

6. **Native module error handling**
   - C++ modules may crash the main process if they throw unhandled exceptions
   - Need better isolation (separate process?)

7. **No update mechanism**
   - publish: null in electron-builder config
   - Users must manually download new versions

## Improvement Priorities
- P0: Add test infrastructure
- P1: Make GPU toggle per-window instead of global
- P1: Add auto-updater
- P2: Refactor CSS into modular components
- P2: Abstract media controls into site-specific plugins
