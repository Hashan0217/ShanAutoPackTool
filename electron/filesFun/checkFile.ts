const fs = require("fs");

/**
 * @description - 检查文件是否存在
 * @param {string} path - 文件路径
 * @returns Boolean - 返回文件是否存在
 */
function checkFile(path) {
  return new Promise(async (resolve, reject) => {
    console.log("start");
    console.log("path", path);
    
    const filePath = path + "/shanAutoconfig.json";
    console.log("filePatj", filePath);
    const isExist = await fs.existsSync(filePath);
    console.log("isExist", isExist);
    resolve(isExist);
  });
}

module.exports = checkFile;
