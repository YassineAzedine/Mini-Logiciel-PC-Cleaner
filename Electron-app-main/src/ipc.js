const { ipcRenderer } = require('electron')


export default function ipc(){
    const ipc = ipcRenderer()
    return ipc
}

