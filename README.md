# TeyvatMama

一个基于 Electron 的游戏浮层浏览器，让 PC 玩家在全屏游戏中浏览网页、观看视频。

## 文档导航

### docs/ — 给人读的长期文档

| 文件 | 说明 |
|------|------|
| VISION.md | 项目定位、目标用户、长期愿景、设计原则 |
| ARCHITECTURE.md | 四层架构设计、各模块职责 |
| ROADMAP.md | Alpha / Beta / Release 三阶段规划 |
| FEATURE_LIST.md | 功能清单总表 |
| STYLEGUIDE.md | 编码规范、命名、目录、提交规范 |
| IPC.md | IPC 通信协议规范 |
| TECH_DEBT.md | 技术债务追踪 |
| CHANGELOG.md | 变更日志 |
| CONTRIBUTING.md | 贡献指南 |

### .ai/ — 给 AI 读的上下文

| 文件 | 说明 |
|------|------|
| PROJECT.md | 项目定位、技术栈、原则、禁止事项 |
| CURRENT_TASK.md | 当前任务 |
| NEXT_TASK.md | 未来任务队列 |
| CONTEXT.md | 长期背景、产品定位、未来方向 |
| AI_RULES.md | AI 行为规范 |
| DECISIONS.md | 架构决策记录 (ADR) |
| REVIEW.md | 代码审查记录 |
| DEVLOG.md | 开发日志 |
| PROMPTS.md | 预留 Prompt 模板 |

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