# Architectural Decisions

## ADR-001: Electron 作为运行时

**状态**: Accepted
**理由**: Electron 提供 WebView、原生窗口控制、IPC、打包工具，适合此类桌面应用。
**后果**: 打包体积较大 (~150MB+), 需要管理 Node 和 Chrome 版本。

## ADR-002: C++ Native Module 处理系统级操作

**状态**: Accepted
**理由**: JavaScript/Node.js 无法直接注册全局键盘钩子或使用 UIAccess API。
Windows 标准 API（WH_KEYBOARD_LL, SetWinEventHook）需要 native 实现。
**后果**: 需要 node-gyp 编译，增加构建复杂度。需要在 CI 中配置 C++ 构建环境。

## ADR-003: 管理员权限要求

**状态**: Accepted
**理由**: 全局键盘钩子在非管理员模式下无法拦截全屏游戏的按键。
**后果**: 用户需要以管理员身份运行。这是 QQ 截图等同类工具的通用做法。

## ADR-004: 使用 docs/.ai/specs 三层文档结构

**状态**: New (this reorganization)
**理由**: docs 给人看，.ai 给 AI 看，specs 做功能设计沉淀。形成可持续的知识管理。
**后果**: 开发流程增加文档环节，但降低长期维护成本。
