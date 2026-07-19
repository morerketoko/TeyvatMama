# MODULE INDEX — 模块索引

| 模块 | 职责 | 目录 | 依赖 | 状态 | 负责人 |
|------|------|------|------|------|--------|
| Window | 窗口生命周期管理（创建、销毁、显示/隐藏、置顶） | src/main/ | IPC, Native | 稳定 | CTO |
| IPC | Renderer 与 Main 之间的受控通信 | src/main/ | preload.js | 稳定 | CTO |
| Shortcut | 键盘快捷键注册与分发 | src/main/ + src/native/ | Native | 稳定 | CTO |
| Player | 浏览器窗口中的网页内容控制（导航、媒体控制） | src/main/ + src/renderer/ | IPC, Window | 稳定 | CTO |
| Settings | 用户设置管理（快捷键映射、透明度、缩放等） | src/renderer/ | IPC, Storage | 稳定 | CTO |
| Storage | 数据持久化（electron-store JSON） | src/main/ | electron-store | 稳定 | CTO |
| Native | C++ 原生模块（键盘钩子 + UIAccess 置顶） | src/native/ | node-gyp | 稳定 | Builder |
| Favorite | 收藏夹管理 | src/main/ + src/renderer/ | IPC, Storage | 稳定 | Builder |
| Download | 下载管理 | - | - | 计划中 | TBD |
| AI | AI 集成层（视频摘要、攻略推荐等） | - | - | 未来 | TBD |
| Update | 自动更新 | - | - | 计划中 | TBD |
| UI | 用户界面（设置面板 + 浏览器窗口界面） | src/renderer/ | IPC | 稳定 | CTO |

## 模块分类

### 核心模块（已完成，稳定）
Window, IPC, Shortcut, Player, Settings, Storage, Native, Favorite, UI

### 计划中模块
Download, Update

### 未来模块
AI

## 未来扩展

- Download: 拦截 BrowserWindow will-download 事件
- Update: 接入 electron-updater 或 electron-auto-update
- AI: 通过 IPC 调用外部 LLM API，不影响主进程稳定性