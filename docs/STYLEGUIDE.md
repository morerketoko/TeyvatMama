# Style Guide

## 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| JavaScript 变量/函数 | camelCase | 	oggleBrowser(), rowserWindow |
| JavaScript 类 | PascalCase | WindowManager, ShortcutHandler |
| C++ 函数 | snake_case | install_hook(), set_topmost() |
| C++ 类 | PascalCase | KeyboardHook, TopmostManager |
| CSS 类名 | kebab-case | .browser-window, .settings-panel |
| 文件名 | kebab-case | high-priority-shortcut.cc |
| IPC 通道 | kebab-case | 	oggle-browser, get-zoom-level |

## 目录规范

`
src/
├── main/          # 主进程代码
├── renderer/      # 渲染进程代码
└── native/        # C++ 原生模块
`

## Commit 规范

格式：

`
<type>: <简短中文描述>

<可选英文详细说明>
`

类型：

- feat: 新功能
- fix: 修复
- chore: 工程化
- docs: 文档
- refactor: 重构
- perf: 性能

## 文件命名

- JS 文件: kebab-case（例如 window-manager.js）
- C++ 文件: snake_case（例如 high_priority_shortcut.cc）
- HTML/CSS: kebab-case
- 文档: UPPER_CASE（例如 README.md）

## JSON 风格

- 键名使用双引号
- 使用 2 空格缩进
- 键名采用 camelCase
- 数组末尾不加逗号

## Markdown 风格

- 标题使用 ATX 风格（#）
- 标题前后空行
- 代码块标注语言
- 列表使用 - 符号
- 表格前后空行
- 中文和英文之间加空格
