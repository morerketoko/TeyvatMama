# Dev Log

## 2025-01-08 — v0.2.0 发布

解决了困扰很久的全屏游戏置顶问题。之前的 BrowserWindow.setAlwaysOnTop(true)
在全屏 DirectX 游戏中会被覆盖。通过 UIAccess + SetWinEventHook + 定时置顶策略解决。

技术方案参考了 Windows 系统 Magnifier 工具的实现方式。

## 2026-07-19 — 仓库重组：升级为 AI 工程

决定将项目从零散状态升级为真正的软件工程。建立 docs/.ai/specs 三层文档结构。
以后所有功能开发都走 spec -> implementation -> review 的流程。
