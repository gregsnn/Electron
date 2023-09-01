const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    send(message) {
      ipcRenderer.send('notify', message)
    }
  }
});
