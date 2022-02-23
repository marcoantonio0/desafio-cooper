import { TestBed } from '@angular/core/testing';

import { InvestimentService } from './investiment.service';

describe('InvestimentService', () => {
  let service: InvestimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
