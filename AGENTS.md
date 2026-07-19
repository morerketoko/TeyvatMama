# AGENTS.md

## 推送规则

每次改动（包括文档、代码、配置等任何修改）完成后，必须执行以下命令推送到远程仓库：

`powershell
git add -A
git commit -m "类型: 简短说明"
git push origin master
`

- 远程仓库：https://github.com/morerketoko/TeyvatMama
- 默认分支：master
- 推送前确保工作区干净（git status 无未跟踪文件）
- 如果有临时文件（_\write*、临时日志等），推送前先删除

## 其他规则

- 遵循 .ai/AI_RULES.md 中的 AI 行为规范
- 新功能开发前先阅读 specs/template.md 创建 Spec
- 架构决策记录在 .ai/DECISIONS.md 中