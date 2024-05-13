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
  checkFile(path) {
    this.path = path;
    return new Promise(async (resolve, reject) => {
      const filePath = path + "/shanAutoconfig.json";
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
    return res;
  }
}

const fileItem = new file();

module.exports = fileItem;
