import { Component, OnInit } from '@angular/core';
import { ItemSelectService } from '../item-select.service';

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.css']
})
export class ItemViewerComponent implements OnInit {

  public itemSelected: string;

  constructor(private itemSelectService: ItemSelectService) { }

  ngOnInit() {
    this.itemSelectService.subscribe((item) => this.itemSelected = item);
  }

}
