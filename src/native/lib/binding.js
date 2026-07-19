const path = require('path');

let native = null;

function loadNativeModule(moduleName) {
  const unpackedPath = path.join(process.resourcesPath, 'app.asar.unpacked', 'src', 'native', 'build', 'Release', moduleName);
  const localPath = path.join(__dirname, '..', 'build', 'Release', moduleName);
  
  try {
    if (process.resourcesPath && require('fs').existsSync(unpackedPath)) {
      return require(unpackedPath);
    }
    return require(localPath);
  } catch (err) {
    console.error(`Failed to load ${moduleName}:`, err);
    return null;
  }
}

native = loadNativeModule('high_priority_shortcut.node');

if (!native) {
  native = {
    start: () => { console.warn('C++ module not available, shortcuts disabled'); },
    stop: () => { console.warn('C++ module not available'); }
  };
}

// 包装函数以提供更友好的API
const api = {
  installHook: function(callback) {
    if (!native || !native.start) {
      throw new Error('C++ module not available');
    }
    this.callback = callback;
  },
  
  registerShortcuts: function(shortcuts) {
    if (!native || !native.start) {
      console.warn('C++ module not available, shortcuts registration skipped');
      return;
    }
    
    if (!this.callback) {
      throw new Error('必须先调用installHook()设置回调函数');
    }
    
    // 停止之前的监听
    native.stop();
    
    // 启动新的快捷键监听
    native.start(shortcuts, this.callback);
  },
  
  uninstallHook: function() {
    if (native && native.stop) {
      native.stop();
    }
    this.callback = null;
  }
};

module.exports = api;