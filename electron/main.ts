const { app, BrowserWindow,ipcMain, } = require('electron')
const { join } = require('path')
const getFilesPathFun = require('./filesFun/getFilesPath.ts');


// 屏蔽安全警告
// ectron Security Warning (Insecure Content-Security-Policy)
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
const preloadPath = join(__dirname, 'preload.ts');
const createWindow = () => {
    const win = new BrowserWindow({
        // 窗口图标
        icon: join(__dirname, 'resource/shortcut.ico'),
        width: 800,
        height: 600,
        webPreferences: {
            // contextIsolation: false,
            // nodeIntegration: true,
            preload:preloadPath
        }
    })
    // 加载vue url视本地环境而定，如http://localhost:5173
    // win.loadURL('http://localhost:3000')

    // development模式
    if(process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
        // 开启调试台
        win.webContents.openDevTools()
    }else {
        win.loadFile(join(__dirname, 'dist/index.html'))
    }
}   

app.whenReady().then(() => {
    createWindow()
    ipcMain.handle('pick-folder', ()=>{
        return getFilesPathFun()
    });
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
