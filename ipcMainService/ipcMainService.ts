import {  ipcMain } from 'electron';
import api from '../api/api';

export default class ipcMainService {
  public static regist() {
    console.log('IpcMain Regist Start.')

      ipcMain.on('asynchronous-message', (event, arg)  => {
        console.log(arg);
        event.reply('asyncronous-reply', 'pong');
      });
  
    ipcMain.on('synchronous-message', (event, arg) => {
        console.log(arg) // prints "ping"
        event.returnValue = 'pong'
      })
  
    ipcMain.on('api', (event, actionName, ...args) =>{
        console.log(`ActionName: ${actionName}`);
        const reply = (replyObj: any, status='success') => {
            console.log(`${actionName}-reply`);
            event.sender.send(`${actionName}-reply`, replyObj, status);
        }

        if(api[actionName]) {
            api[actionName](reply, ...args);
        }
    })

  console.log('IpcMain Regist End.')
  }
}
