import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBaloncestoComponent } from './formulario-baloncesto.component';

describe('FormularioBaloncestoComponent', () => {
  let component: FormularioBaloncestoComponent;
  let fixture: ComponentFixture<FormularioBaloncestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioBaloncestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBaloncestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
