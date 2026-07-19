# Dev Log

## 模板

### YYYY-MM-DD

做了什么、为什么、结果如何、学到了什么。

---


## 记录

### 2025-01-08

v0.2.0 发布。解决全屏游戏置顶问题。通过 UIAccess + SetWinEventHook + 定时置顶策略解决。

### 2026-07-19

项目重组：建立 docs/.ai/specs 三层文档体系。

### 2026-07-20

Issue-001: 统一文档体系。修复 .ai/ 文件编码问题。去除 docs/.ai 之间的职责重叠。specs 改为 per-feature 目录结构。README.md 作为文档入口。

### 2026-07-20 (Session 2)

Issue-002: 建立 AI Project Intelligence Layer。
新增 6 个文件：
- PROJECT_INDEX.md — AI 阅读起点和完整目录导航
- PROJECT_STATUS.md — 项目实时状态（版本/完成/风险/技术债）
- PROJECT_MEMORY.md — 所有关键设计决策的背景记录
- MODULE_INDEX.md — 全部模块索引（职责/目录/依赖/负责人）
- ARCHITECTURE_MAP.md — 分层结构、数据流、控制流、模块边界
- PROJECT_CONSTITUTION.md — 10 条项目最高规则

这层知识使任何新 AI 无需阅读聊天记录，仅通过文件即可理解项目。