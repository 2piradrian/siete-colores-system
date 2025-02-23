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
        process.execPath, 
        [path.join(__dirname, "server", "app.js")], 
        { stdio: "ignore", detached: true }
      );
    } 
    else {
      serverProcess = spawn("node", [path.join(__dirname, "../server/src/app.ts")], {
        stdio: "ignore",
        detached: true
      });
    }

    serverProcess.unref();

    window = new BrowserWindow({
      width: 1280,
      height: 720,
      minWidth: 1280,
      minHeight: 720,
      title: "Siete Colores",
      icon: path.join(__dirname, "assets", "icon.svg"),
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true
      }
    });

    if (app.isPackaged) {
      const indexFilePath = path.join(__dirname, "client", "index.html");
      window.loadURL(`file://${indexFilePath}`);
    } 
    else {
      setTimeout(() => window.loadURL("http://localhost:5173"), 5000);
    }

    app.on('second-instance', () => {
      if (window) {
        if (window.isMinimized()) window.restore();
        window.focus();
      }
    });

    window.on("closed", () => {
      window = null;
      if (serverProcess) serverProcess.kill();
    });

  });

  app.on("window-all-closed", () => {
    if (serverProcess) serverProcess.kill();
    if (process.platform !== "darwin") app.quit();
  });
}