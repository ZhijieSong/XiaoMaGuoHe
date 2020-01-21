/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileService } from './file.service';
import { IpcRenderService } from '../../services/ipcRender.service';

describe('Service: File', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileService, IpcRenderService]
    });
  });

  it('should ...', inject([FileService], (service: FileService) => {
    expect(service).toBeTruthy();
  }));
});
