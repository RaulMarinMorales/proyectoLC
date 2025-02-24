import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFutbolComponent } from './formulario-futbol.component';

describe('FormularioFutbolComponent', () => {
  let component: FormularioFutbolComponent;
  let fixture: ComponentFixture<FormularioFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioFutbolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
