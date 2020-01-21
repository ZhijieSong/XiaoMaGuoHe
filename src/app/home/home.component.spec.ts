import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditorComponent } from './editor/editor.component';
import { PreviewComponent } from './preview/preview.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { EditorToolsComponent } from './editor/editor-tools/editor-tools.component';
import { HtmlPipe } from './preview/html.pipe';
import { FileService } from './services/file.service';
import { IpcRenderService } from '../services/ipcRender.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, 
        SidebarComponent, 
        EditorComponent, 
        PreviewComponent, 
        EditorToolsComponent, 
        HtmlPipe],
      imports: [TranslateModule.forRoot(), NgZorroAntdModule,BrowserAnimationsModule],
      providers: [ FileService, IpcRenderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title in a h1 tag', async(() => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'PAGES.HOME.TITLE'
  //   );
  // }));
});
