const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");
const fileClassItem = require("./files/fileClass.ts");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
const preloadPath = join(__dirname, "preload.ts");
const createWindow = () => {
  const win = new BrowserWindow({
    // 窗口图标
    icon: join(__dirname, "resource/shortcut.ico"),
    width: 800,
    height: 600,
    webPreferences: {
      // contextIsolation: false,
      // nodeIntegration: true,
      preload: preloadPath
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(join(__dirname, "dist/index.html"));
  }
};
app.whenReady().then(() => {
  createWindow();
  ipcMain.handle("pick-folder", () => {
    return fileClassItem.getFilesPath();
  });
  ipcMain.handle("check-config-file", (event, path) => {
    console.log("path", path);
    return fileClassItem.checkFile(path);
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    app.quit();
});
