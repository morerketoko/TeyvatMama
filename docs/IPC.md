# IPC Protocol

## Channel 命名格式

- 全部使用 kebab-case
- 动词开头
- Renderer → Main 通道用祈使句：	oggle-browser、set-opacity、dd-bookmark
- Main → Renderer 通道用过去时或状态：rowser-window-created、opacity-changed、settings-loaded

## 权限原则

- 所有 IPC 通道必须在 preload.js 中白名单
- Renderer 只能通过 preload 暴露的受控方法通信
- Renderer 不能直接访问 Node.js API 或 Electron API
- 敏感操作（文件系统、原生模块）仅在 Main Process 执行

## Renderer 与 Main 的通信规范

`
Renderer → ipcRenderer.send(channel, data)
                 ↓
          preload.js (白名单校验)
                 ↓
Main → ipcMain.on(channel, handler)
                 ↓
         处理逻辑（可调用原生模块）
                 ↓
Main → event.reply(channel, result) 或 webContents.send(channel, data)
                 ↓
Renderer → ipcRenderer.on(channel, callback)
`

## 错误处理

- Main Process 中所有 IPC handler 必须包裹 try/catch
- 异常时向 Renderer 返回 { error: true, message: String }
- Renderer 端必须检查返回结果中的 error 字段
- 调用原生模块时必须有降级方案

## 版本兼容

- 新增通道时保持旧通道兼容至少一个大版本
- 废弃通道时在 CHANGELOG 中标注废弃版本
- preload.js 白名单随版本更新
