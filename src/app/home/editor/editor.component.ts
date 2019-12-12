import { Component, OnInit } from '@angular/core';

import {EditorService} from '../../home/services/editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  ContentEditable = true;
  FontSize  = "15px"
  LineHeight = "30px"
  editorDiv = null;

  constructor(private editorService: EditorService) { }

  ngOnInit() {
    this.editorDiv = document.getElementById("editor");
    this.editorDiv.contentEditable = true;
  }

  onInput() {
    this.editorService.annonceContentChangeInEditor(this.editorDiv.innerText);
    console.log(this.editorDiv.innerText);
  }
}
