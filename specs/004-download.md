# Spec 004: Download Manager

## Description

Built-in download manager for handling file downloads from the browser window.

## Status

Not yet implemented — this spec defines the target behavior.

## Requirements

- Intercept download events from BrowserWindow
- Show download progress in the main settings panel
- Pause/resume/cancel downloads
- Choose download location
- Open file after download
- Download history

## Implementation Plan

1. Listen to BrowserWindow 'will-download' event
2. Send progress updates to renderer via IPC
3. Create download UI component in settings panel
4. Store download history in electron-store
5. Support concurrent downloads with queue management

## Future Improvements

- [ ] Download speed limit
- [ ] Video/audio extraction (Bilibili downloads)
- [ ] Batch download support
- [ ] Download scheduler
