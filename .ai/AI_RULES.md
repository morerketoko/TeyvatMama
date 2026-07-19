# AI Rules

## AI 必须

1. 先阅读，再编码
   - 编码前必须阅读 .ai/PROJECT.md、.ai/CURRENT_TASK.md、docs/ARCHITECTURE.md、docs/STYLEGUIDE.md
2. 先设计，再编码
   - 功能开发前先创建 specs/<feature>/spec.md
3. 保持分层边界
   - UI 不得直接调用 Native
   - 所有跨层通信必须经过 IPC Bridge
4. 更新文档
   - 功能完成后更新 .ai/DEVLOG.md
   - 架构变化时更新 .ai/DECISIONS.md
   - 用户可见变更更新 docs/CHANGELOG.md
5. 小步提交
   - 每个 commit 只做一件事

## AI 禁止

1. 禁止直接重构整个项目
2. 禁止一次实现多个 Feature
3. 禁止未经说明修改已有逻辑
4. 禁止添加未经 Spec 的功能

## AI 进入项目时的阅读顺序

1. AGENTS.md (操作规则)
2. README.md (文档导航)
3. .ai/CURRENT_TASK.md (当前任务)
4. .ai/PROJECT.md (项目定位)
5. docs/ARCHITECTURE.md (架构)
6. docs/STYLEGUIDE.md (规范)