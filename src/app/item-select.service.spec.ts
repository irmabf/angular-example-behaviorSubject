import { TestBed, inject } from '@angular/core/testing';

import { ItemSelectService } from './item-select.service';

describe('ItemSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemSelectService]
    });
  });

  it('should be created', inject([ItemSelectService], (service: ItemSelectService) => {
    expect(service).toBeTruthy();
  }));
});
