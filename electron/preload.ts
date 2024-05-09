const { contextBridge, ipcRenderer, remote, shell } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  pickFolder: async () => {
    const { filePaths } = await ipcRenderer.invoke('pick-folder');    
    return filePaths.length > 0 ? filePaths[0] : '无法读取手动收入';
  },
});