/**
 * @description: 检查项目配置文件是否存在
 * @param {Window} instance -Window实例对象
 */

const checkConfigFile = async (instance:Window):Promise<Boolean> => {
    
    const projectPath:string|null = localStorage.getItem('projectPath') 
    if (!projectPath) {
        localStorage.setItem('projectPath', 'false')
        return false   
    }
    // 通过electronAPI调用main进程的方法
    const isOK = await instance.electronAPI.checkConfigFile(projectPath)
    localStorage.setItem('projectPath', isOK ? 'true' : 'false')
    return isOK
    
}


export{
    checkConfigFile
}