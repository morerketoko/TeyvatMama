# Next Task

## v0.3.0 Sprint

完成后需要推进的主要任务：

1. **Code formatting & linting**
   - 引入 ESLint + Prettier
   - 配置统一的代码风格
   - CI 中增加 lint 检查

2. **测试框架**
   - 引入测试框架（Jest 或 Mocha）
   - 为主进程逻辑编写单元测试
   - 为 IPC 通信编写集成测试

3. **TypeScript 迁移评估**
   - 评估将 main.js 迁移到 TypeScript 的价值和成本

4. **CI 改进**
   - 增加 lint/test 工作流
   - 配置 release-please 自动发版
