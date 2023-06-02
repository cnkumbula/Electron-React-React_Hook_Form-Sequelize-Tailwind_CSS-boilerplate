
const { 
  app, 
  BrowserWindow,
  ipcMain,
  screen,
  Notification,

} = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");

const trabalhadorDAO               = require('./src/DAO/TrabalhadorDAO');

/************************************* Inicio - Cadastros *********************************************** */
// Form trabalhador data handling
ipcMain.on('cadastrar-trabalhador', (e, sampleData) => {
    //console.log(sampleData);
  
    trabalhadorDAO.trabalhadorDAO.create(sampleData).then((data) => {
      //console.log(data);
        new Notification({ 
            title: 'Sucesso!',
            body: 'O trabalhador foi cadastrado com sucesso!',
            icon: path.join(__dirname, './src/assets/check-circle.png'),
            silent: true,
            timeoutType: 'never',
        }).show();
  })
  .catch((error) => {
      console.log(error);
        new Notification({ 
            title: 'Erro!',
            body: `Não foi possível finalizar a operação!!! ${error}`,
            icon: path.join(__dirname, './src/assets/x-circle.png'),
            silent: true,
            timeoutType: 'never',
        }).show();
  });
  
  });



function createWindow() {
  // Create the browser window.

  let primaryDisplay = screen.getPrimaryDisplay();

  const win = new BrowserWindow({
    icon: path.join(__dirname, './assets/logo.ico'),
    width: primaryDisplay.workArea.width, 
    height: primaryDisplay.workArea.height,
    minwidth: 1024,
    minheight: 768,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });


  const filePath = `file://${path.join(__dirname, "build", "index.html")}`;
  win.loadURL(isDev? "http://localhost:3000" : filePath);

 // win.loadURL("http://localhost:3000");
}

// This method will be called when Electron has finished initialization and is ready to create
// browser windows. Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common for applications and their
// menu bar to stay active until the user quits explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the dock icon is clicked and there
  // are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process code. You can also put
// them in separate files and require them here.