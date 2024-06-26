
// 声明扩展 window 对象
interface ElectronAPI {
    pickFolder: () => Promise<string>;
    checkIsFlie: (projectPath:string) => Boolean;
    writeContant: (name:string,data:Object) => Boolean;
  }
  
  declare global {
    interface Window {
      electronAPI: ElectronAPI;
    }
    interface saveConfigFile{
      name?:'projectPaht'|'bran'|'replaceOlde'|'replaceNew';
      data?:Object
    }
  }
  


  // 确保 TypeScript 将这个文件视为全局声明的一部分
  export {};
  