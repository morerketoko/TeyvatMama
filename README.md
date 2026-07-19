# TeyvatMama

一个基于 Electron 的游戏浮层浏览器，让 PC 玩家在全屏游戏中浏览网页、观看视频。

## AI 阅读起点

新 AI 进入项目时的最佳阅读顺序：

1. AGENTS.md — AI 操作规则
2. README.md — 项目入口（本文档）
3. .ai/PROJECT_INDEX.md — 项目索引
4. .ai/PROJECT.md — 项目定位
5. .ai/PROJECT_STATUS.md — 项目当前状态
6. .ai/MODULE_INDEX.md — 模块索引
7. docs/ARCHITECTURE.md — 架构
8. .ai/CURRENT_TASK.md — 当前任务
9. .ai/PROJECT_CONSTITUTION.md — 项目宪法
10. specs/ — 按需阅读

## 文档体系

### .ai/ — AI 知识层

| 文件 | 说明 |
|------|------|
| PROJECT_INDEX.md | 项目入口和阅读顺序 |
| PROJECT_STATUS.md | 项目实时状态 |
| PROJECT_MEMORY.md | 项目记忆（关键设计决策背景） |
| MODULE_INDEX.md | 模块索引 |
| ARCHITECTURE_MAP.md | 架构地图（数据流/控制流/边界） |
| PROJECT_CONSTITUTION.md | 10 条最高规则 |
| PROJECT.md | 项目定位 |
| CURRENT_TASK.md | 当前任务 |
| NEXT_TASK.md | 未来任务队列 |
| CONTEXT.md | 长期背景 |
| AI_RULES.md | AI 行为规范 |
| DECISIONS.md | 架构决策 (ADR) |
| REVIEW.md | 代码审查 |
| DEVLOG.md | 开发日志 |
| PROMPTS.md | 预留 Prompt |

### docs/ — 给人读的长期文档

| 文件 | 说明 |
|------|------|
| VISION.md | 项目定位、目标用户、长期愿景 |
| ARCHITECTURE.md | 四层架构设计 |
| ROADMAP.md | Alpha / Beta / Release 规划 |
| FEATURE_LIST.md | 功能清单表 |
| STYLEGUIDE.md | 编码规范 |
| IPC.md | IPC 通信协议 |
| TECH_DEBT.md | 技术债务追踪 |
| CHANGELOG.md | 变更日志 |
| CONTRIBUTING.md | 贡献指南 |

### specs/ — Feature 规格

一个 Feature 一个目录，每个包含 spec.md / todo.md / review.md / notes.md。

| Feature | 目录 |
|---------|------|
| 收藏夹 | specs/favorites/ |
| 下载管理 | specs/download/ |
| 窗口管理 | specs/window/ |
| 自动更新 | specs/update/ |
| 快捷键系统 | specs/shortcuts/ |

### 其他

| 文件 | 说明 |
|------|------|
| AGENTS.md | AI 代理操作规则 |
| .github/ | GitHub Actions 工作流 |

## 快速开始

`
npm config set registry https://registry.npmmirror.com
npm install
cd src/native && npm install && npx node-gyp rebuild --release
cd ../..
npm start
`

> 需要管理员权限运行才能在游戏中使用快捷键。