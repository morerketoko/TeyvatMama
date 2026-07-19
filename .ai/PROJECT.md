# TeyvatMama Project Context

## Identity

TeyvatMama 是一个基于 Electron 的游戏浮层浏览器。
原名 Teyvat Browser，现已迁移至 TeyvatMama 仓库。

## Core Concepts

- **Main process**: Electron 主进程，负责窗口管理、原生模块、IPC
- **Renderer**: 设置面板 UI，嵌入浏览器窗口
- **Native modules**: C++ addons (node-gyp) 提供系统级键盘钩子和 UIAccess 置顶
- **IPC Bridge**: preload.js 白名单通信

## Important Files

- src/main/main.js — 主进程逻辑（窗口、IPC、快捷键）
- src/main/preload.js — IPC 桥接
- src/renderer/ — 渲染进程（HTML/CSS/JS）
- src/native/ — C++ 原生模块
- package.json — 项目配置和依赖

## Current Version

0.2.0 — 已实现全屏游戏置顶、收藏夹、缩放功能

## Tech Stack

- Electron 27.x
- C++ (node-gyp, Windows API)
- electron-store (持久化)
- GitHub Actions CI
