import { Component, OnInit } from '@angular/core';
import { _LIST_ITEMS } from '../list-data';
import { ItemSelectService } from '../item-select.service';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.css']
})
export class ListViewerComponent implements OnInit {

  readonly items = _LIST_ITEMS;

  constructor(private itemSelectService: ItemSelectService) { }

  ngOnInit() {
  }

  onImageClicked(item: string): void {
    console.log(`clicked ${item}`);
    this.itemSelectService.next(item);
  }

}
