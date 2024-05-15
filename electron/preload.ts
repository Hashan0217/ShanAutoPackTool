const { contextBridge, ipcRenderer, remote, shell } = require('electron');
//暴露给渲染进程的api
contextBridge.exposeInMainWorld('electronAPI', {
  // 选择文件夹
  pickFolder: async () => {
    const { filePaths } = await ipcRenderer.invoke('pick-folder');    
    return filePaths.length > 0 ? filePaths[0] : '读取为空值或者无法读取手动收入';
  },
  //检查是否有项目配置文件
  checkIsFlie: async (projectPath) => {
    
    return await ipcRenderer.invoke('checkIsFlie',projectPath);
  },
  writeContant: async (name,data) => {
    return await ipcRenderer.invoke('writeContant',name,data);
  },

});