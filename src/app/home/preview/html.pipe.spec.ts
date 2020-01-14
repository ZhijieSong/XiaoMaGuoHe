/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HtmlPipe } from './html.pipe';
import { DomSanitizer } from '@angular/platform-browser';

const mockSanitizer = <DomSanitizer> {}
describe('Pipe: Htmle', () => {
  it('create an instance', () => {
    
    let pipe = new HtmlPipe(mockSanitizer);
    expect(pipe).toBeTruthy();
  });
});
