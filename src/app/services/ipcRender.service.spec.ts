/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IpcRenderService } from './ipcRender.service';

describe('Service: IpcRender', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpcRenderService]
    });
  });

  it('should ...', inject([IpcRenderService], (service: IpcRenderService) => {
    expect(service).toBeTruthy();
  }));
});
