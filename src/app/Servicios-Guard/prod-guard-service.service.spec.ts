import { TestBed } from '@angular/core/testing';

import { ProdGuardServiceService } from './prod-guard-service.service';

describe('ProdGuardServiceService', () => {
  let service: ProdGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
