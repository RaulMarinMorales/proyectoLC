import { TestBed } from '@angular/core/testing';

import { NatacionService } from '../services/natacion.service';

describe('NatacionService', () => {
  let service: NatacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
