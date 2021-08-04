import { TestBed } from '@angular/core/testing';

import { ServiciosInterceptorService } from './servicios-interceptor.service';

describe('ServiciosInterceptorService', () => {
  let service: ServiciosInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
