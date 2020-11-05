import { TestBed } from '@angular/core/testing';

import { UXProductsService } from './ux-products.service';

describe('UXProductsService', () => {
  let service: UXProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UXProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
