# Architectural Decisions

## ADR 模板

每次架构决策按以下格式记录：

`markdown
## ADR-NNN: 决策标题

### Decision

做了什么决策。

### Reason

为什么做这个决策。

### Impact

正面和负面影响清单。

### Date

YYYY-MM-DD
`

## ADR 记录

### ADR-001: Electron 作为运行时

**Decision**: 选用 Electron 作为桌面应用框架。

**Reason**: Electron 提供 WebView、原生窗口控制、IPC 通信、打包工具链，适合此类桌面工具场景。

**Impact**:
- 正面：开发效率高，Web 技术栈
- 负面：打包体积大（约150MB），内存占用较高

**Date**: 2025-01-01

### ADR-002: C++ Native Module 处理系统级操作

**Decision**: 使用 node-gyp 编译 C++ 插件处理全局键盘钩子和 UIAccess。

**Reason**: JavaScript 无法直接调用 Windows API（WH_KEYBOARD_LL、SetWinEventHook）。

**Impact**:
- 正面：获得系统级能力
- 负面：构建复杂度增加，需要 C++ 开发环境

**Date**: 2025-01-01

### ADR-003: 管理员权限要求

**Decision**: 应用需要管理员权限运行。

**Reason**: 全局键盘钩子在非管理员模式下无法拦截全屏游戏按键。

**Impact**:
- 正面：游戏内快捷键正常工作
- 负面：用户需手动以管理员身份运行

**Date**: 2025-01-01

### ADR-004: docs/.ai/specs 三层文档结构

**Decision**: 采用三层文档体系组织项目知识。

**Reason**: docs 给人看，.ai 给 AI 看，specs 管理功能设计。

**Impact**:
- 正面：降低项目接手成本，知识可沉淀
- 负面：开发流程增加文档环节

**Date**: 2026-07-19

### ADR-005: 四层分层架构

**Decision**: 采用 UI -> Application Service -> Repository -> IPC -> Native 五层架构。

**Reason**: 保持模块边界，防止跨层调用，确保可维护性。

**Impact**:
- 正面：架构清晰，易于扩展
- 负面：小型改动需要经过 IPC 层，略增复杂度

**Date**: 2026-07-20