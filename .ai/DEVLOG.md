# Dev Log

## 模板

### YYYY-MM-DD

做了什么、为什么、结果如何、学到了什么。

---

## 记录

### 2025-01-08

v0.2.0 发布。

解决了全屏游戏置顶问题。通过 UIAccess + SetWinEventHook + 定时置顶策略解决。
技术方案参考 Windows Magnifier 实现方式。

### 2026-07-19

项目重组：建立 docs/.ai/specs 三层文档体系。

从零散代码仓库升级为 AI First 软件工程。
以后所有功能开发走 Spec -> Implementation -> Review 标准流程。