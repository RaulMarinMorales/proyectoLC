import { TestBed } from '@angular/core/testing';

import { ServicioEquipoService } from './servicio-equipo.service';

describe('ServicioEquipoService', () => {
  let service: ServicioEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
