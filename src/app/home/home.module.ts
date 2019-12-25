import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { EditorComponent } from './editor/editor.component';
import { EditorToolsComponent } from './editor/editor-tools/editor-tools.component';
import { PreviewComponent } from './preview/preview.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_I18N, zh_CN, NzDropDownModule } from 'ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule} from 'ng-zorro-antd/icon';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HtmlPipe } from './preview/html.pipe';
registerLocaleData(zh);


@NgModule({
  declarations: [HomeComponent, 
    EditorComponent, 
    PreviewComponent, 
    EditorToolsComponent,
    SidebarComponent,
    HtmlPipe],
  imports: [CommonModule, 
    SharedModule, 
    HomeRoutingModule,
    NgZorroAntdModule,
    NzLayoutModule,
    NzIconModule,
    NzDropDownModule,
    FormsModule],
    bootstrap:    [ HomeComponent ],
  providers   : [
      { provide: NZ_I18N, useValue: zh_CN }
    ]
}
)
export class HomeModule {}
