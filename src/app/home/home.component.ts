import { Component, OnInit } from '@angular/core';

import { EditorService } from './services/editor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [EditorService]
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  // editorContent = "";

  constructor(private editorService: EditorService) {
    editorService.editorAnnonced$.subscribe(content=> {
      // this.editorContent = content;
      editorService.homeToPreviewAnnonceContentChanged(content);
    })
   }

  ngOnInit() {
  }

}
