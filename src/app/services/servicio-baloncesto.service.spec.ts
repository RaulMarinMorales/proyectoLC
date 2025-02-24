import { TestBed } from '@angular/core/testing';

import { ServicioBaloncestoService } from './servicio-baloncesto.service';

describe('ServicioBaloncestoService', () => {
  let service: ServicioBaloncestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioBaloncestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
