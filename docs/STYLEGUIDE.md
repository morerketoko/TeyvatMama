# Style Guide

## 命名规范

| 类别 | 规范 | 示例 |
|------|------|------|
| JS 变量/函数 | camelCase | toggleBrowser() |
| JS 类 | PascalCase | WindowManager |
| C++ 函数 | snake_case | install_hook() |
| C++ 类 | PascalCase | KeyboardHook |
| CSS 类 | kebab-case | .browser-window |
| 文件名 | kebab-case | high-priority-shortcut.cc |
| IPC 频道 | kebab-case | toggle-browser |

## 目录规范

`
src/
+-- main/          # 主进程 (Application Service)
+-- renderer/      # 渲染进程 (UI)
+-- native/        # C++ 原生模块 (Native)
`

## Commit 规范

格式：<type>: <中文描述>

类型：feat / fix / chore / docs / refactor / perf / style

## File Naming

- JS: kebab-case
- C++: snake_case
- 文档: UPPER_CASE (README.md, CHANGELOG.md)

## JSON 风格

- 键名双引号、camelCase
- 2 空格缩进
- 数组末尾无逗号

## Markdown 风格

- ATX 标题（#），前后空行
- 代码块标注语言
- 列表用 - 符号
- 表格前后空行
- 中文和英文间加空格
- 一个文件一个职责