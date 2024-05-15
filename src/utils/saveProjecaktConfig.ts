
import { ElMessage } from "element-plus";
// name：test

const checkIsConfigFlie = (instance: Window) => {
  return new Promise<any>(async (resolve) => {
    const projectPath: string | any = localStorage.getItem("projectPath");
    if (projectPath == "" || !projectPath) {
      ElMessage.error("项目文件路径不存在，请重新选择项目路径");
      resolve(false);
    }
    console.log(555);
    
    const res = await instance.electronAPI.checkIsFlie(projectPath);
    resolve(res);
  });
};

const writeFun = async (name: any, data: any, instance: Window) => {
  return new Promise<boolean>(async (resolve) => {
    // 检查是否有配置文件路径

    // const res = await checkIsConfigFlie(instance);
    
    // if (!res) {
    //   ElMessage.error("配置文件不存在，选择项目创建配置文件");
    //   resolve(false);
    // }
    const isWrite = await instance.electronAPI.writeContant(name, data);

    resolve(isWrite ? true : false);
  });
};

export { writeFun };
