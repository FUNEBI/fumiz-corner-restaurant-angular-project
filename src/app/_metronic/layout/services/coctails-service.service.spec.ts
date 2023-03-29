import { TestBed } from '@angular/core/testing';

import { CoctailsServiceService } from './coctails-service.service';

describe('CoctailsServiceService', () => {
  let service: CoctailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
