import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNodeOptions, NzTreeNode } from 'ng-zorro-antd/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [ FileService ]
})
export class SidebarComponent implements OnInit {
  activedNode: NzTreeNode;
  nodes = [
    {
      title: 'parent 0',
      key: '100',
      author: 'NG ZORRO',
      expanded: true,
      children: [
        { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true },
        { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true },
        {
          title: 'parent 1',
          key: '102',
          author: 'NG ZORRO',
          children: [
            { title: 'leaf 1-0', key: '1020', author: 'NG ZORRO', isLeaf: true },
            { title: 'leaf 1-1', key: '1021', author: 'NG ZORRO', isLeaf: true }
          ]
        }
      ]
    },
    {
      title: 'parent 1',
      key: '101',
      author: 'NG ZORRO',
      children: [
        { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
        { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
      ]
    }
  ];

  openFolder(data: NzTreeNode | Required<NzFormatEmitEvent>): void {
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    this.activedNode = data.node!;
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
    // TODO 
  }

  selectDropdown(): void {
    console.log('select drop down disaposed')
  }

  constructor(private nzContextMenuService: NzContextMenuService, 
    private fileService: FileService) {  }


  ngOnInit() {
  }

  /// 打开文件夹
  openFileFolder () : void{
    this.fileService.openForlder('/');
  }
}
