# PROJECT MEMORY — 项目记忆

本文档记录所有重要的项目事实和设计决策背景。

## 为什么采用 Electron

在 Electron 和 WebView2 之间选择了 Electron。

理由：
- Electron 提供完整的窗口控制 API (BrowserWindow.setAlwaysOnTop)
- Electron 支持 C++ 原生模块 (node-gyp)
- 打包工具链成熟 (electron-builder)
- 社区生态丰富，文档完善

## 为什么存在 Native Module

JavaScript 在 Windows 上无法做到两件事：
1. 注册全局键盘钩子 (WH_KEYBOARD_LL) — 用于在游戏中拦截快捷键
2. 使用 UIAccess API (SetWinEventHook) — 用于在全屏 DirectX 游戏上保持窗口置顶

这两个能力必须通过 C++ 原生模块实现。

## 为什么需要管理员权限

全局键盘钩子在非管理员模式下，无法拦截全屏游戏的按键输入。
这是 Windows 系统的安全限制。QQ 截图等同级工具同样要求管理员权限。

## 为什么不用 SQLite

当前数据量极小（快捷键配置、窗口位置、收藏夹），electron-store (JSON) 完全够用。
未来如果需要收藏夹搜索、历史记录等功能，可以考虑 SQLite。

## 为什么采用双窗口设计

两个独立窗口：
- 主面板窗口（固定大小、非置顶）— 用于设置和配置
- 浏览器窗口（可调大小、支持置顶/透明度）— 用于浮层浏览

分离的原因是：置顶窗口会影响设置面板的操作体验。
用户应该能在不关闭浏览器窗口的情况下，切换设置。

## 为什么 GPU 加速默认关闭

初期为了兼容大量旧电脑和虚拟机环境，全局禁用了 GPU 加速。
这是一个"先确保能用"的决策。未来应该实现运行时切换。

## 为什么媒体控制硬编码 B 站

Alpha 阶段聚焦核心用户场景（原神玩家看 B 站攻略），优先保证 B 站体验。
未来应该抽象为 Site Adapter 模式，每个网站独立适配。

## 文档体系设计原则

- docs/ = 给人读的长期知识（架构、规范、路线图）
- .ai/ = 给 AI 读的工作上下文（当前任务、模块索引、项目状态）
- specs/ = 功能契约（一个 Feature 一个目录）
- AGENTS.md = AI 操作规则

三个目录之间不重叠，互相引用。