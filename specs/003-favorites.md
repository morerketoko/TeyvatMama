# Spec 003: Bookmarks / Favorites

## Description

Persistent bookmark management for saving and quickly accessing favorite URLs.

## Current Implementation

- Stored in electron-store under 'bookmarks' key
- Each bookmark: { id, title, url, icon, createdAt }
- IPC channels: add-bookmark, remove-bookmark, get-bookmarks, navigate-to-bookmark
- Renderer UI displays bookmarks in a list

## Data Model

`json
{
  "id": 1704729600000,
  "title": "Bilibili Home",
  "url": "https://www.bilibili.com",
  "icon": "",
  "createdAt": "2025-01-08T00:00:00.000Z"
}
`

## Future Improvements

- [ ] Bookmark folders/categories
- [ ] Drag-and-drop reordering
- [ ] Import/export (Chrome bookmarks HTML format)
- [ ] Search/filter bookmarks
- [ ] Favicon fetching
- [ ] Bookmark sync across devices
- [ ] Quick-add from browser context menu
