# Contributing

## 开发流程

1. 确认 .ai/CURRENT_TASK.md 了解当前任务
2. 确认 specs/ 中对应的 Feature Spec
3. 基于 spec 实现功能
4. 遵循 STYLEGUIDE.md 编码规范
5. 更新 .ai/DEVLOG.md 记录进度
6. 更新 docs/CHANGELOG.md 记录变更

## PR 流程

1. 从 master 创建 Feature 分支：git checkout -b feat/<name>
2. 提交小粒度、聚焦的 commit
3. 提交 PR 时关联对应 Spec 编号
4. 确保 CI 通过
5. 至少一人 Code Review 后合并

## Code Review

Review 时关注：

- 架构合理性：是否遵循现有架构分层
- 命名规范：是否符合 STYLEGUIDE
- 性能影响：是否有不必要的开销
- 可维护性：代码是否清晰、可测试
- 安全性：IPC 通道是否在白名单内
- 异常处理：原生模块调用是否有降级

## Feature Workflow

1. 创建 Spec：在 specs/ 中编写功能规格
2. 规划：在 .ai/NEXT_TASK.md 中记录计划
3. 实现：按 Spec 编码
4. Review：提交 Code Review
5. 归档：更新 .ai/ 相关文件
