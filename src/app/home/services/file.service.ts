import { Injectable } from '@angular/core';
import { IpcRenderService } from '../../services/ipcRender.service';
import { Observable } from 'rxjs';

@Injectable()
export class FileService {
constructor(private ipcRenderService: IpcRenderService) { }

  openForlder(path: string): Promise<any> {
    return this.ipcRenderService.api('openForlder', path); // TODO 需要转成Observable对象
  }
}
