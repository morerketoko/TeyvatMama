# AI Context Bundle

This file provides compressed context for AI agents to quickly understand the project.

## Project Tree (sources only)

`
teyvat-browser/
├── src/
│   ├── main/
│   │   ├── main.js         # Main process: windows, IPC, shortcuts
│   │   └── preload.js       # IPC bridge whitelist
│   ├── renderer/
│   │   ├── index.html        # Settings UI
│   │   ├── renderer.js       # UI logic
│   │   └── assets/
│   │       └── styles.css    # All styles
│   └── native/
│       ├── lib/
│       │   ├── binding.js    # Shortcut module wrapper
│       │   └── topmost.js    # Topmost module wrapper
│       └── src/
│           ├── high_priority_shortcut.cc   # Keyboard hook
│           └── high_priority_topmost.cc    # UIAccess topmost
├── docs/                     # Human docs
├── .ai/                      # AI context
└── specs/                    # Feature specs
`

## Key Configurations

- app.disableHardwareAcceleration() — global off
- store defaults in main.js lines ~55-70
- preload.js whitelists ~14 send channels, ~9 receive channels

## Known Technical Debt

- GPU acceleration globally disabled (P1)
- No tests (P0)
- Bilibili-specific media controls (P2)
- All CSS in one file (P2)
