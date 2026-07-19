# Architecture

## 整体架构

TeyvatMama 采用四层架构：

`
+----------------------+
|         UI           |  Renderer (主面板 + 浏览器窗口)
+----------------------+
|  Application Service |  Main Process (窗口管理、快捷键、IPC 路由)
+----------------------+
|     Repository       |  Storage (electron-store 持久化)
+----------------------+
|   IPC Bridge         |  preload.js (白名单通信层)
+----------------------+
|      Native          |  C++ 模块 (键盘钩子、UIAccess 置顶)
+----------------------+
`

## 层职责

### UI (Renderer)

用户界面层。

包含两个窗口：
- **主面板窗口**：设置面板、快捷键配置、收藏夹、缩放控制
- **浏览器窗口**：嵌入网页、支持透明度、置顶浮动

UI 层只能通过 IPC 调用 Application Service 层。
UI 层禁止直接调用 Native 层。

### Application Service (Main Process)

应用服务层。

职责：
- 窗口生命周期管理
- IPC 消息路由与处理
- 快捷键注册与分发
- Native 模块的加载与协调

### Repository (Storage)

数据持久化层。

基于 electron-store，将配置以 JSON 文件存储于用户目录。
管理：窗口位置、快捷键映射、透明度、收藏夹、缩放级别。

### IPC Bridge (preload.js)

通信层。

Renderer 与 Main Process 之间的受控桥梁。
所有通道必须在白名单中声明。
详见 docs/IPC.md。

### Native

系统级能力层。

两个 C++ 模块（node-gyp 编译）：
- **Keyboard Hook**：注册 WH_KEYBOARD_LL 全局钩子，在全屏游戏中截获快捷键
- **UIAccess Topmost**：通过 UIAccess + SetWinEventHook 确保窗口置顶

## 分层原则

- 上层依赖下层，下层不依赖上层
- UI 不得直接调用 Native
- 所有跨层通信必须经过 IPC Bridge
- 异常必须逐层处理，不可跨层抛掷

## 技术栈

- **运行时**: Electron 27+
- **原生**: C++ (node-gyp, Windows API)
- **持久化**: electron-store
- **CI**: GitHub Actions

---

> 架构决策记录见 .ai/DECISIONS.md