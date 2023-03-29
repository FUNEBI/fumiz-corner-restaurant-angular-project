import { TestBed } from '@angular/core/testing';

import { NigerianRecipesService } from './nigerian-recipes.service';

describe('NigerianRecipesService', () => {
  let service: NigerianRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NigerianRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
