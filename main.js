const { app, BrowserWindow } = require('electron')
const pkg = require('./package.json')
const path = require('path')
const url = require("url");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, './build/index.html'), protocol: 'file:', slashes: true }))
    //判断是否是开发模式
    if(pkg.DEV) {
        mainWindow.loadURL("http://localhost:3000/")
    } else {
        mainWindow.loadURL(url.format({
            pathname:path.join(__dirname, './build/index.html'),
            protocol:'file:',
            slashes:true
        }))
    }
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})