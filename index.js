//import electron from 'electron';
const electron = require( 'electron' );
const ffmpeg = require('fluent-ffmpeg');
const { app, BrowserWindow, ipcMain } = electron;
let mainWindow;
app.on('ready', () => {
mainWindow = new BrowserWindow({});
mainWindow.loadURL(`file://${__dirname}/index.html`);
    console.log('App is now ready');

});

ipcMain.on('dupa123', (event, path)=>{
    ffmpeg.ffprobe(path, (err, metadata)=>{
        //console.log(`BlahBlah${metadata.format.duration}`);
        mainWindow.webContents.send('dupa321', metadata.format.duration);
    });
});

