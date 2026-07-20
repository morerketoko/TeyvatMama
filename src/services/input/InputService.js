/**
 * InputService - 统一输入服务层
 *
 * 职责:
 * - 统一管理键盘/鼠标/游戏输入
 * - 作为 Native Hook 和业务逻辑之间的唯一桥梁
 * - 提供快捷键注册/注销/启用/禁用/挂起/恢复
 * - 维护输入状态（焦点、权限、冲突检测）
 */

let nativeShortcut = null;

const FALLBACK_SHORTCUT = {
  installHook: () => {
    console.warn('[InputService] C++ shortcut module not available, using fallback');
  },
  registerShortcuts: () => {
    console.warn('[InputService] C++ shortcut module not available, registration skipped');
  },
  uninstallHook: () => {
    console.warn('[InputService] C++ shortcut module not available, cleanup skipped');
  }
};

const actionHandlers = new Map();
let suspended = false;
let registeredShortcuts = {};

function setNativeModule(shortcutModule) {
  if (shortcutModule && typeof shortcutModule.installHook === 'function') {
    nativeShortcut = shortcutModule;
    console.log('[InputService] Native shortcut module set');
  } else {
    nativeShortcut = Object.assign({}, FALLBACK_SHORTCUT);
    console.warn('[InputService] Invalid native module, using fallback');
  }
}

function getNativeModule() {
  if (!nativeShortcut) {
    nativeShortcut = Object.assign({}, FALLBACK_SHORTCUT);
  }
  return nativeShortcut;
}

function registerAction(action, handler) {
  if (!action || typeof handler !== 'function') {
    console.error('[InputService] registerAction: invalid arguments');
    return false;
  }
  if (actionHandlers.has(action)) {
    console.warn('[InputService] Action "' + action + '" already registered, overwriting');
  }
  actionHandlers.set(action, handler);
  console.log('[InputService] Action registered: ' + action);
  return true;
}

function unregisterAction(action) {
  return actionHandlers.delete(action);
}

function dispatch(action) {
  if (suspended) return;
  var handler = actionHandlers.get(action);
  if (handler) {
    try { handler(action); } catch (err) {
      console.error('[InputService] Handler error for "' + action + '":', err);
    }
  }
}

function getRegisteredActions() {
  return Array.from(actionHandlers.keys());
}

function loadShortcuts(shortcutMap) {
  registeredShortcuts = Object.assign({}, shortcutMap);
  var native = getNativeModule();
  try {
    native.installHook(function(action) { dispatch(action); });
    native.registerShortcuts(shortcutMap);
    console.log('[InputService] Shortcuts loaded: ' + Object.keys(shortcutMap).length + ' bindings');
    return true;
  } catch (err) {
    console.error('[InputService] Failed to load shortcuts:', err);
    return false;
  }
}

function updateShortcuts(shortcutMap) {
  registeredShortcuts = Object.assign({}, shortcutMap);
  if (!nativeShortcut) return false;
  try {
    nativeShortcut.registerShortcuts(shortcutMap);
    console.log('[InputService] Shortcuts updated');
    return true;
  } catch (err) {
    console.error('[InputService] Failed to update shortcuts:', err);
    return false;
  }
}

function suspendAll() { suspended = true; console.log('[InputService] All shortcuts suspended'); }
function resumeAll() { suspended = false; console.log('[InputService] All shortcuts resumed'); }

function getState() {
  return {
    suspended: suspended,
    registeredActions: getRegisteredActions(),
    shortcutCount: Object.keys(registeredShortcuts).length,
    nativeAvailable: !!(nativeShortcut && nativeShortcut.installHook &&
      nativeShortcut.installHook.toString() !== FALLBACK_SHORTCUT.installHook.toString())
  };
}

function destroy() {
  suspended = false;
  actionHandlers.clear();
  registeredShortcuts = {};
  if (nativeShortcut && nativeShortcut.uninstallHook) {
    try { nativeShortcut.uninstallHook(); } catch (err) { console.error(err); }
  }
  nativeShortcut = null;
  console.log('[InputService] Destroyed');
}

module.exports = {
  setNativeModule: setNativeModule,
  registerAction: registerAction,
  unregisterAction: unregisterAction,
  dispatch: dispatch,
  getRegisteredActions: getRegisteredActions,
  loadShortcuts: loadShortcuts,
  updateShortcuts: updateShortcuts,
  suspendAll: suspendAll,
  resumeAll: resumeAll,
  getState: getState,
  destroy: destroy
};