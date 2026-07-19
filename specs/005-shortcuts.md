# Spec 005: Shortcut System

## Description

System-wide keyboard shortcut handling through global hooks and native C++ modules.

## Current Implementation

Two layers:

1. **Electron globalShortcut** — registered in egisterShortcuts()
2. **C++ high_priority_shortcut** — WH_KEYBOARD_LL hook for game compatibility

Shortcuts configurable via settings UI, stored in electron-store.

## Key Bindings (Default)

| Key       | Action              | Description                |
|-----------|---------------------|----------------------------|
| Insert    | toggle-browser      | Show/hide browser window   |
| F1        | play-pause          | Play/pause video           |
| F2        | rewind              | Rewind 5 seconds           |
| F3        | forward             | Forward 5 seconds          |
| Ctrl+Up   | increase-opacity    | Increase window opacity    |
| Ctrl+Down | decrease-opacity    | Decrease window opacity    |

## Future Improvements

- [ ] Per-game shortcut profiles
- [ ] Macro recording
- [ ] Multi-key chord support
- [ ] Mouse button bindings
- [ ] On-screen shortcut display (OSD)
- [ ] Shortcut conflict detection
