const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let window;
let serverProcess;

app.whenReady().then(() => {

  serverProcess = spawn("node", [path.join(__dirname, "../server/index.js")], {
    stdio: "ignore",
    detached: true
  });
  serverProcess.unref();

  Menu.setApplicationMenu(null);

  window = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    title: "Siete Colores",
    icon: "/assets/favicon.ico",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  setTimeout(() => window.loadURL("http://localhost:5173"), 5000);

  window.on("closed", () => {
    window = null;
    if (serverProcess) serverProcess.kill();
  });

});

app.on("window-all-closed", () => {
  if (serverProcess) serverProcess.kill();
  if (process.platform !== "darwin") app.quit();
});