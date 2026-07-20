/**
 * ShortcutState — 输入状态管理
 *
 * 职责:
 * - 当前输入焦点状态
 * - 输入来源（键盘/鼠标/预留）
 * - 权限检查
 * - 调试日志开关
 */

/**
 * 当前焦点状态
 */
let focusState = {
  mainWindowFocused: false,
  browserWindowVisible: false,
  browserWindowFocused: false,
  gameMode: false
};

/**
 * 调试模式开关
 */
let debugMode = false;

/**
 * 更新焦点状态
 * @param {Object} state - 部分状态对象
 */
function updateFocus(state) {
  focusState = { ...focusState, ...state };
}

/**
 * 获取完整焦点状态
 * @returns {Object}
 */
function getFocusState() {
  return { ...focusState };
}

/**
 * 启用调试模式
 */
function enableDebug() {
  debugMode = true;
}

/**
 * 禁用调试模式
 */
function disableDebug() {
  debugMode = false;
}

/**
 * 获取调试状态
 * @returns {boolean}
 */
function isDebugEnabled() {
  return debugMode;
}

/**
 * 重置状态
 */
function reset() {
  focusState = {
    mainWindowFocused: false,
    browserWindowVisible: false,
    browserWindowFocused: false,
    gameMode: false
  };
  debugMode = false;
}

module.exports = {
  updateFocus,
  getFocusState,
  enableDebug,
  disableDebug,
  isDebugEnabled,
  reset
};