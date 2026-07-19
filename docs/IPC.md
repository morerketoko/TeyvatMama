# IPC Protocol

## Overview

Communication between Main Process and Renderer uses Electron's IPC (ipcMain/ipcRenderer) via the preload bridge.

## Preload Bridge (src/main/preload.js)

All IPC is whitelisted. The preload exposes:

### Send Channels (Renderer -> Main)
| Channel              | Data                | Description                    |
|----------------------|---------------------|--------------------------------|
| 	oggle-browser     | none                | Show/hide browser window       |
| 
avigate-browser   | string (URL)      | Navigate browser to URL        |
| djust-opacity     | 
umber (0-1)      | Set browser window opacity     |
| update-shortcuts   | object            | Update shortcut key mappings   |
| set-gpu-acceleration | oolean        | Toggle GPU acceleration        |
| 	oggle-advanced-topmost | oolean    | Toggle advanced topmost mode   |
| get-topmost-status | none                | Query topmost status           |
| dd-bookmark       | {title,url,icon}  | Add a bookmark                 |
| emove-bookmark    | 
umber (id)       | Remove bookmark by ID          |
| get-bookmarks      | none                | Fetch all bookmarks            |
| 
avigate-to-bookmark | string (URL)   | Navigate to a bookmarked URL   |
| djust-zoom        | 
umber (delta)    | Adjust zoom (+-0.1)            |
| get-zoom-level     | none                | Get current zoom level         |
| open-external-link | string (URL)      | Open URL in default browser    |
| get-initial-settings | none              | Get all persisted settings     |

### Receive Channels (Main -> Renderer)
| Channel                  | Data              | Description                    |
|--------------------------|-------------------|--------------------------------|
| rowser-window-created | none              | Browser window was created     |
| rowser-window-closed  | none              | Browser window was closed      |
| rowser-opacity-changed| 
umber          | Opacity was updated            |
| shortcut-triggered     | string          | A shortcut was pressed         |
| initial-settings       | object          | Initial settings load          |
| dvanced-topmost-result| object          | Topmost toggle result          |
| 	opmost-status         | object          | Current topmost status         |
| ookmarks-updated      | rray           | Bookmarks list update          |
| zoom-level-changed     | 
umber          | Zoom level changed             |

## Native Module IPC

C++ native modules communicate via N-API (napi.h), exporting JS-callable functions directly (not through Electron IPC). The main process wraps them and exposes results via standard IPC.
