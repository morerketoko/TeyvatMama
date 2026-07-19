# Spec 001: Home / Main Settings Panel

## Description

The main control panel (electron window) that the user interacts with.
Contains settings for shortcuts, opacity, browser management, bookmarks, zoom, and GPU acceleration.

## Current Implementation

- Window created by createMainWindow() in main.js
- Loads src/renderer/index.html
- Contains iframe for browser preview + settings panel
- Communicates via IPC through preload.js bridge

## Key Features

- Shortcut key remapping (per-action key binding)
- Opacity slider for browser window
- Bookmark management (add/remove/navigate)
- Zoom level control (0.5x - 2.0x)
- GPU acceleration toggle
- Advanced topmost mode toggle
- Browser navigation controls

## Future Improvements

- [ ] Dark mode / theme support
- [ ] Per-game shortcut profiles
- [ ] Real-time preview of browser window
- [ ] Export/import settings
- [ ] Plugin management UI
