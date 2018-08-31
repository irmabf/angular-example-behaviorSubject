import { Component, OnInit } from '@angular/core';
import { ItemSelectService } from '../item-select.service';
import { _LIST_ITEMS } from '../list-data';

@Component({
  selector: 'app-list-viewer-mini',
  templateUrl: './list-viewer-mini.component.html',
  styleUrls: ['./list-viewer-mini.component.css']
})
export class ListViewerMiniComponent implements OnInit {

  public srcLeft: string;
  public srcMiddle: string;
  public srcRight: string;

  constructor(private itemSelectService: ItemSelectService) { }

  // Subscribe to behavior service at component initialize
  ngOnInit() {
    this.itemSelectService.subscribe((src: string) => { this.onItemSelected(src); });
  }

  // Callback function to maintain behavior changes
  onItemSelected(src: string): void {
    console.log(`on Item selected ${src}`);
    // Find wich index fits the string
    const index = _LIST_ITEMS.findIndex((element: string) => element === src);
    const len = _LIST_ITEMS.length;
    this.srcMiddle = src;
    this.srcLeft = _LIST_ITEMS[index <= 0 ? len - 1 : index - 1];
    this.srcRight = _LIST_ITEMS[index >= len - 1 ? 0 : index + 1];
  }

  // When an image is clicked, call the behavior service next
  onImageClicked(src: string): void {
    this.itemSelectService.next(src);
  }

}
