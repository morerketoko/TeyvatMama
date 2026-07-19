# AI Rules

## AI 必须

1. 先设计，再编码
   - 功能开发前先阅读或创建 specs/ 中的 Feature Spec
   - 确认架构方案后再写代码

2. 保持代码风格一致
   - 遵循 docs/STYLEGUIDE.md 中的规范
   - 与现有代码模式保持一致

3. 更新文档
   - 功能完成后更新 .ai/DEVLOG.md
   - 架构变化时更新 .ai/DECISIONS.md
   - 用户可见变更更新 docs/CHANGELOG.md

4. 小步提交
   - 每个 commit 只做一件事
   - commit 信息清晰描述变更

## AI 禁止

1. 禁止直接重构整个项目
   - 需要重构必须先在 specs/ 创建 Spec，通过 Review 后再执行

2. 禁止一次实现多个 Feature
   - 一个任务只做一个功能
   - 多个功能需拆分为独立 Issue

3. 禁止未经说明修改已有逻辑
   - 修改现有行为前必须记录在 .ai/DECISIONS.md
   - 说明为什么修改、影响什么

4. 禁止添加未经 Spec 的功能
   - 所有新功能必须先有 Spec 文档