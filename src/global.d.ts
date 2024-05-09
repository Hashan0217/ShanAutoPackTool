
// 声明扩展 window 对象
interface ElectronAPI {
    pickFolder: () => Promise<string>;
  }
  
  declare global {
    interface Window {
      electronAPI: ElectronAPI;
    }
  }
  
  // 确保 TypeScript 将这个文件视为全局声明的一部分
  export {};
  