# ARCHITECTURE MAP — 架构地图

本文档描述项目的逻辑流、模块边界和数据流。

## 层级结构

`
+--------------------+
|       UI           |  Renderer 进程
|  主面板 · 浏览器   |
+--------+-----------+
         | IPC (preload.js 白名单)
+--------v-----------+
| Application Service |  Main 进程
|  窗口管理 · 快捷键  |
|  IPC 路由          |
+--------+-----------+
         |
+--------v-----------+
|    Repository      |  Storage 层
|  electron-store    |  JSON 持久化
+--------+-----------+
         |
+--------v-----------+
|   IPC Bridge       |  通信层
|  preload.js        |
+--------+-----------+
         |
+--------v-----------+
|      Native        |  C++ 层
|  键盘钩子 · 置顶   |
+--------------------+
`

## 数据流

`
用户按键
    |
    v
Native (WH_KEYBOARD_LL 钩子)
    |
    v
Main Process (handleShortcut)
    |
    v
IPC (event.reply / webContents.send)
    |
    v
Renderer (UI 更新)
`

## 控制流

`
Renderer 请求 (ipcRenderer.send)
    |
    v
preload.js (白名单校验)
    |
    v
Main Process (ipcMain.on handler)
    |
    v
需要 Native？ --是--> C++ 模块
    |                    |
    否                  v
    |              返回结果
    v                   |
Storage 读/写           |
    |                   |
    v                   v
Renderer (结果响应)
`

## 模块边界

- UI 层不能直接调用 Native 层
- 所有跨层通信必须经过 IPC Bridge
- Main Process 是唯一可以调用 Native 的层
- Renderer 只能通过 preload.js 暴露的受控通道通信
- Storage 只通过 Main Process 访问，Renderer 不直接操作文件

## 未来 AI Layer 位置

`
                    +--------------------+
                    |      AI Layer      |
                    |  LLM Client ·      |
                    |  Context Engine    |
                    +--------+-----------+
                             | (IPC, 与 Main 同级)
+--------------------+      |
| Application Service| <----+
+--------------------+
`

AI Layer 作为独立服务层，与 Application Service 平级。
通过 IPC 与 Main Process 通信，不直接影响 UI 和 Native。