# AGENTS.md

本文件定义 AI 代理在此项目中的所有操作规则和约定。

## 1. 开发规则（六条铁律）

### Rule 1 — 没有 Spec 不得开发 Feature

所有新功能必须先有 spec。在 specs/<feature>/spec.md 中定义 Goal、Architecture、Acceptance Criteria。

### Rule 2 — 没有 Review 不得关闭 Feature

实现完成后必须在 specs/<feature>/review.md 中进行 Code Review，确认架构、命名、性能、可维护性、安全性。

### Rule 3 — 所有重大设计必须记录 Decision

架构变化必须在 .ai/DECISIONS.md 中记录 ADR。字段：Decision、Reason、Impact、Date。

### Rule 4 — 所有技术债必须记录

发现的技术债在 docs/TECH_DEBT.md 中记录。字段：发现时间、模块、影响、优先级、计划解决版本。

### Rule 5 — 聊天结束以后，知识必须进入仓库

所有重要知识不得只留在聊天记录中。须同步到 docs/、.ai/、specs/ 的对应文件中。

### Rule 6 — AI 修改代码前必须阅读

.ai/PROJECT.md
.ai/CURRENT_TASK.md
docs/ARCHITECTURE.md
docs/STYLEGUIDE.md

## 2. 分层架构原则

UI -> Application Service -> Repository -> IPC -> Native

- 上层依赖下层，下层不依赖上层
- UI 不得直接调用 Native
- 所有跨层通信必须经过 IPC Bridge
- 异常必须逐层处理，不可跨层抛掷

## 3. Feature Workflow

Idea -> Issue -> Spec -> Architecture Review -> Implementation -> Code Review -> Merge -> Update Docs -> Release

任何步骤不得跳过。

## 4. 推送规则

每次改动完成后，必须推送到远程仓库：

`powershell
# 清理临时文件（_write*、temp* 等）
Remove-Item _write* -Force -ErrorAction Ignore

# 暂存并提交
git add -A
git commit -m "类型: 简短中文描述"
git push origin master
`

远程仓库：https://github.com/morerketoko/TeyvatMama
默认分支：master

## 5. 写文件注意事项

### PowerShell 写 UTF-8 文件

在 PowerShell 中写入多行中文内容时，不要用 Add-Content（不保证编码），要用 .NET 方法：

`powershell
[System.IO.File]::WriteAllText("路径\文件.md", , [System.Text.UTF8Encoding]::new(False))
`

### 避免的 PowerShell 陷阱

- @""@ heredoc 中不能包含 )、| 等字符
- && 在 PowerShell 中不可用，用 ; 替代
- 路径中包含中文字符时，必须用绝对路径或明确声明变量
- 删除文件用 Remove-Item 路径 -Force -ErrorAction Ignore
- 重命名文件用 Rename-Item 旧路径 新路径 -Force

## 6. 修改范围限制

- 业务代码在 src/ 中，不允许随意修改
- 文档在 docs/、.ai/、specs/、README.md、AGENTS.md 中
- 配置在 package.json、binding.gyp 中
- 修改 src/ 前必须经过 Spec + Review 流程

## 7. 文档职责

- docs/ = Human Knowledge（给人读，长期文档）
- .ai/ = AI Memory（给 AI 读，工作上下文）
- specs/ = Feature Contract（功能契约，一个 Feature 一个目录）
- AGENTS.md = AI 操作规则（本文件）

## 8. AI 进入项目时的阅读顺序

1. AGENTS.md（本文件，操作规则）
2. README.md（文档导航）
3. .ai/CURRENT_TASK.md（当前任务）
4. .ai/PROJECT.md（项目定位）
5. docs/ARCHITECTURE.md（架构）
6. docs/STYLEGUIDE.md（规范）