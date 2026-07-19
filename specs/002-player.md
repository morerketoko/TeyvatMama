# Spec 002: Browser / Video Player Window

## Description

The floating browser window that sits on top of games.
Optimized for video playback, especially Bilibili.

## Current Implementation

- Created by createBrowserWindow() in main.js
- Always-on-top when toggled (via JS + C++ topmost module)
- Supports opacity adjustment
- Can be hidden/shown via Insert key
- Loads last URL from persistent store

## Media Controls

Supports play/pause (F1), rewind (F2), forward (F3).
Current implementation uses hardcoded DOM selectors for Bilibili.

## Key Features

- Floating overlay on fullscreen games
- Semi-transparent mode
- URL navigation (default: bilibili.com)
- Zoom level adjustment
- Bookmark navigation

## Future Improvements

- [ ] Multi-tab support
- [ ] Picture-in-picture mode
- [ ] Custom CSS injection per site
- [ ] Download manager integration
- [ ] Mouse gesture controls (volume, scroll)
- [ ] Site-specific media adapter system
