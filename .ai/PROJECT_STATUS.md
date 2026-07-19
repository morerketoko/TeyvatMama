# PROJECT STATUS — 项目状态

## 版本

- 当前版本: v0.2.0 (Alpha)
- 下一版本: v0.3.0 (Alpha)
- 起始日期: 2025-01-01

## 完成 Feature

- [x] 浮层浏览器窗口
- [x] 快捷键系统（全局钩子 + C++ 原生模块）
- [x] 媒体控制（B 站视频播放/暂停/快进/快退）
- [x] 窗口透明度调节
- [x] 收藏夹管理（新增/删除/跳转）
- [x] 页面缩放（0.5x - 2.0x）
- [x] 高级置顶（UIAccess + SetWinEventHook）
- [x] 设置面板
- [x] 文档体系 (docs/.ai/specs)

## 进行中 Feature

- Issue-002: Establish AI Project Intelligence Layer（当前任务）

## 下一阶段目标 (v0.3.0 Alpha)

1. 测试框架引入（Jest / Mocha）
2. ESLint + Prettier 统一代码风格
3. GPU 加速运行时切换（替代全局禁用）
4. 自动更新机制
5. 下载管理器

## 已知风险

- GPU 硬件加速全局禁用，无法运行时切换
- 无测试覆盖，质量无法保障
- 媒体控制硬编码 B 站 DOM 选择器
- C++ 原生模块无隔离机制，异常可导致主进程崩溃
- 无自动更新机制，用户需手动下载新版

## 技术债数量

当前 6 项（详见 docs/TECH_DEBT.md）

## 长期 Roadmap

详见 docs/ROADMAP.md (Alpha -> Beta -> Release)