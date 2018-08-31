import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewerComponent } from './list-viewer/list-viewer.component';
import { ListViewerMiniComponent } from './list-viewer-mini/list-viewer-mini.component';
import { ItemViewerComponent } from './item-viewer/item-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewerComponent,
    ListViewerMiniComponent,
    ItemViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
