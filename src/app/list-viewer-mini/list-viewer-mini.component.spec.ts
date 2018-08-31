import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewerMiniComponent } from './list-viewer-mini.component';

describe('ListViewerMiniComponent', () => {
  let component: ListViewerMiniComponent;
  let fixture: ComponentFixture<ListViewerMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewerMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewerMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
