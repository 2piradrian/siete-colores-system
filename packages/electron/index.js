const { app, BrowserWindow, Menu } = require("electron");
const { spawn } = require("child_process");
const path = require("path");

let window;
let serverProcess;

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} 
else {
  app.whenReady().then(() => {
    Menu.setApplicationMenu(null);

    if (app.isPackaged) {
      serverProcess = spawn(
        "node",
        [path.join(process.resourcesPath, "server", "app.js")],
        { 
          stdio: "inherit", 
          detached: false, 
          shell: true,
          windowsHide: true, // windows only
          env: {
            ...process.env,
            RESOURCES_PATH: process.resourcesPath,
          }, 
        }
      );
    }
    else {
      serverProcess = spawn(
        "node", 
        [path.join(__dirname, "../server/src/app.ts")], 
        { stdio: "ignore", detached: false }
      );
    }

    serverProcess.unref();

    window = new BrowserWindow({
      width: 1280,
      height: 720,
      minWidth: 1280,
      minHeight: 720,
      title: "Siete Colores",
      icon: path.join(__dirname, "assets", "icon.ico"),
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      }
    });

    setTimeout(() => {
      if(app.isPackaged) {
        window.loadFile(path.join(process.resourcesPath, "client", "index.html"));
      }
      else {
        window.loadURL("http://localhost:5173");
      }
    }, 5000);

    app.on('second-instance', () => {
      if (window) {
        if (window.isMinimized()) window.restore();
        window.focus();
      }
    });

    window.on("closed", () => {
      if (serverProcess) serverProcess.kill();
      window = null;
    });

  });

  app.on("window-all-closed", () => {
    if (serverProcess) serverProcess.kill();
    if (process.platform !== "darwin") app.quit();
  });


}