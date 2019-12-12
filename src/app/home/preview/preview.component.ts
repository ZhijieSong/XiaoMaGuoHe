import { Component, OnInit } from '@angular/core';
import { EditorService } from '../services/editor.service';
import * as MarkdownIt from '../../../../node_modules/markdown-it/dist/markdown-it.min.js';
import { ViewEncapsulation } from '@angular/core';
import * as hljs from 'highlight.js'


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  content = null;
  constructor(private editorService: EditorService) {

    editorService.homeToPreviewAnnonced$.subscribe(content=>{
      if(typeof(content) != "string") {
        return;
      }
      let md = new MarkdownIt({
        html:         true,        // Enable HTML tags in source
        xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                                    // This is only for full CommonMark compatibility.
        breaks:       true,        // Convert '\n' in paragraphs into <br>
        langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                    // useful for external highlighters.
        linkify:      true,        // Autoconvert URL-like text to links
      
        // Enable some language-neutral replacement + quotes beautification
        typographer:  true,
      
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        //quotes: '“”‘’',
      
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externally.
        // If result starts with <pre... internal wrapper is skipped.
        highlight: function (str, lang) { 
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }
      
          return ''; // use external default escaping
      }
      });

      let result = md.render(content);
      this.content = result;
    })
   }

  ngOnInit() {
  }

}
