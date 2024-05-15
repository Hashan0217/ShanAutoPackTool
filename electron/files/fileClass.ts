const fs = require("fs");
const { dialog } = require("electron");

class file {
  // path: string;
  constructor() {
    this.path = "";
  }

  /**
   * @description 检查是否存在配置文件
   * @param {String} path 选择的文件夹路径
   * @returns {Boolean} 返回是否存在配置文件
   */
  checkIsFlie(path) {
    console.log('ttttttttttttttttttt');
    
    return new Promise(async (resolve, reject) => {
      const filePath = `${path}\\shanAutoconfig.json`;
      
      console.log("filePatj", filePath);
      const isExist = await fs.existsSync(filePath);
      console.log("isExist", isExist);
      resolve(isExist);
    });
  }

  /**
   * @description 获取文件夹路径
   * @returns {String}  文件夹路径
   */
  async getFilesPath() {
    const res = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    this.path =res.length > 0 ? res[0] : 'D:\\TEST2'
    return res;
  }

  async writeFile(name,data){
   return new Promise(async (resolve, reject) => {
    const saveData ={
      [name]:data
    }

    const saveDataStr = JSON.stringify(saveData);
    console.log("filePath", this.path);
    const filePath = `${this.path}\\shanAutoconfig.json`;
    const res = await fs.writeFileSync(filePath, saveDataStr, "utf-8");
    console.log('写入文件返回的内容',res);
    
    resolve(true);
   })
  }
}

const fileItem = new file();

module.exports = fileItem;
