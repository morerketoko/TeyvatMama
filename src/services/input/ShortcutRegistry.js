/**
 * ShortcutRegistry — 快捷键绑定注册表
 *
 * 职责:
 * - 维护 action → key 的映射
 * - 提供字符串键值到 Windows VK 的解析
 * - 冲突检测
 * - 批量查询
 *
 * 注意:
 * 实际的注册由 InputService 委托给 Native Module 完成。
 * Registry 只在 JS 层面维护 action ↔ key 的关系。
 */

/**
 * 默认快捷键配置
 * actionName → keyString
 */
const DEFAULT_SHORTCUTS = {
  toggleBrowser: 'Insert',
  playPause: 'F1',
  rewind: 'F2',
  forward: 'F3',
  increaseOpacity: 'Control+Up',
  decreaseOpacity: 'Control+Down'
};

/**
 * 当前生效的快捷键映射
 */
let currentBindings = { ...DEFAULT_SHORTCUTS };

/**
 * 获取当前所有绑定
 * @returns {Object}
 */
function getAll() {
  return { ...currentBindings };
}

/**
 * 根据 action 获取绑定的键
 * @param {string} action
 * @returns {string|null}
 */
function getKey(action) {
  return currentBindings[action] || null;
}

/**
 * 根据键值查找绑定的 action（用于冲突检测）
 * @param {string} keyString - 如 'F1', 'Control+Up'
 * @param {string} [ignoreAction] - 忽略的 action（检查其他 action 是否用了此键）
 * @returns {string|null} 冲突的 action 名称，无冲突返回 null
 */
function findConflict(keyString, ignoreAction) {
  for (const [action, key] of Object.entries(currentBindings)) {
    if (action !== ignoreAction && key === keyString) {
      return action;
    }
  }
  return null;
}

/**
 * 替换所有绑定
 * @param {Object} bindings - { actionName: keyString }
 */
function replaceAll(bindings) {
  currentBindings = { ...bindings };
}

/**
 * 重置为默认配置
 */
function resetToDefault() {
  currentBindings = { ...DEFAULT_SHORTCUTS };
}

/**
 * 恢复默认配置
 * @returns {Object}
 */
function getDefaults() {
  return { ...DEFAULT_SHORTCUTS };
}

module.exports = {
  DEFAULT_SHORTCUTS,
  getAll,
  getKey,
  findConflict,
  replaceAll,
  resetToDefault,
  getDefaults
};