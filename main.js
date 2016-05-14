const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const path = require('path')
const { script } = require('./electron-app/nightmare-script.js')

let mainWindow  // prevent garbage collection

function createWindow () {

  const displaySize = electron.screen.getPrimaryDisplay().workAreaSize

  mainWindow = new BrowserWindow({
    width: displaySize.width * 0.9,
    height: displaySize.height * 0.9,
    title: 'Flexbot',
    // autoHideMenuBar: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'electron-app/electronRequire.js')
    }
  })

  let url = 'file://' + __dirname + '/mbc/index.html'

  if (process.argv[2]) {   // if in development
    url = 'http://localhost:3000'
    mainWindow.setMenu(null)
  }

  mainWindow.loadURL(url)

  script()

  mainWindow.webContents.openDevTools()

  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
  mainWindow.on('closed', () => mainWindow = null )
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => app.quit() )
