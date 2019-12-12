import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable()
export class EditorService {

  // Observable string sources
  private editorContentAnnoncedSource = new Subject<string>();
  private homeToPreviewAnnoncedSource = new Subject<string>();
  // private editorContentConfirmedSource = new Subject<string>();

  // Observable string streams
  editorAnnonced$ = this.editorContentAnnoncedSource.asObservable();
  // editorConfirmed$ = this.editorContentConfirmedSource.asObservable();
  homeToPreviewAnnonced$ = this.homeToPreviewAnnoncedSource.asObservable();

  // ServiceMessage commands
  annonceContentChangeInEditor(content: string) {
    this.editorContentAnnoncedSource.next(content);
  }

  // confirmContentChangeInEditor(content: string) {
  //   this.editorContentConfirmedSource.next(content);
  // }

  homeToPreviewAnnonceContentChanged(content: string) {
    this.homeToPreviewAnnoncedSource.next(content);
  }

}
