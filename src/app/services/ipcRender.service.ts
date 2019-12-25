import { Injectable } from '@angular/core';
import * as  electron from 'electron';
// declare let electron:any;
@Injectable()
export class IpcRenderService {

constructor() { }

private ipcRenderer = electron.ipcRenderer

on(message: string, done: any) {
  return this.ipcRenderer.on(message, done);
}
send(message: string, ...args: any[]) {
  this.ipcRenderer.send(message, args);
}
api(action: string, ...args: any[]) {
  this.ipcRenderer.send('api',  action,  ...args);

  return new Promise((resolve, reject) => {
    this.ipcRenderer.once(`${action}-reply`,  (event: any, reply: unknown, status: any) => {
      if(!reply) {
        return reject(status);
      }
      console.log(`-----------------${status}------------------`);
      console.log(reply);
      return resolve(reply);
    })
  })
}

dialog(action: string, ...args: any[]) {
  this.ipcRenderer.send('dialog', action, ...args);
}

sendSync(message: string, ...args: any[]) {
  this.ipcRenderer.sendSync(message, args);
}

}
