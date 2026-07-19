# Code Review Notes

## Review History

### 2025-01-08: v0.2.0 发布 Review

**结构改进**
- 将快捷键和置顶功能分离为独立 C++ 模块，模块化设计更清晰
- 每个模块有 JS wrapper，提供 fallback 降级

**问题发现**
- GPU 硬解全局禁用，无运行时切换能力
- CSS 全部集中在 styles.css 中，不易维护
- 媒体控制脚本硬编码 B 站 DOM 选择器

**建议**
- 引入 CSS Modules 或按组件拆分样式文件
- 建立 site-adapter 机制解耦媒体控制
