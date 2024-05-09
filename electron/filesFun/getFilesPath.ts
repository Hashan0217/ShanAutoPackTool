const { dialog } = require('electron')


 async function getFilesPath()  {
    const res = await dialog.showOpenDialog({
      properties: ['openDirectory'],
    });
    return res
};

module.exports =  getFilesPath

