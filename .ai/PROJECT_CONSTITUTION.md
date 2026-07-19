# PROJECT CONSTITUTION — 项目宪法

本文档定义项目的最高规则。所有开发必须遵守，不可违反。

## 第一条：Design before Coding

先设计，再编码。

在写任何代码之前，必须先有设计方案。重大设计必须在 .ai/DECISIONS.md 中记录 ADR。

## 第二条：Spec before Feature

没有 Spec，不得开发 Feature。

功能规格定义在 specs/<feature>/spec.md 中。必须包含 Goal、Requirements、Architecture、Acceptance Criteria。

## 第三条：One Feature One Spec

一个 Feature 一个 Spec。

每个独立功能有独立的 specs/<feature>/ 目录。不得将多个功能合并到一个 Spec 中。

## 第四条：One Source of Truth

一个知识只有一个来源。

同样的知识不得出现在两个文档中。如果多个文档需要引用同一知识，用交叉引用（链接），而不是重复内容。

## 第五条：Architecture before Optimization

先保证架构正确，再考虑性能优化。

性能优化不能以破坏架构分层为代价。UI 层不得直接调用 Native 层，即使这样"更快"。

## 第六条：No Cross Module Modification

不得跨模块修改。

修改一个模块时，不得同时修改其他模块的非必要代码。一次只做一个 Feature。

## 第七条：AI Friendly First

项目必须对 AI 友好。

所有文档使用清晰的中文描述。AI 应在 5 分钟内理解项目。关键决策必须在仓库中记录，而非仅存在于聊天记录。

## 第八条：Every Merge Updates Knowledge

每次合并，知识层必须同步更新。

任何代码合并后，必须检查 .ai/、docs/、specs/ 是否需要同步更新。特别是 .ai/PROJECT_STATUS.md 和 .ai/DEVLOG.md。

## 第九条：Tech Debt Must Be Recorded

技术债必须被记录。

发现的技术债必须在 docs/TECH_DEBT.md 中记录（发现时间、模块、影响、优先级、计划解决版本）。不允许"以后再补"的心态。

## 第十条：Long-term Maintainability First

长期可维护性优先。

所有决策应优先考虑项目的长期健康，而非短期速度。文档、测试、架构完整性优先于快速交付。