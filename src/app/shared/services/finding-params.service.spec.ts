import { TestBed } from '@angular/core/testing';

import { FindingParamsService } from './finding-params.service';

describe('FindingParamsService', () => {
  let service: FindingParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindingParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
