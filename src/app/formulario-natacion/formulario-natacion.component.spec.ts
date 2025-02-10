import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNatacionComponent } from './formulario-natacion.component';

describe('FormularioNatacionComponent', () => {
  let component: FormularioNatacionComponent;
  let fixture: ComponentFixture<FormularioNatacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioNatacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNatacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
