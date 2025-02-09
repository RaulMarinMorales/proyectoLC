import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRaulComponent } from './formulario-raul.component';

describe('FormularioRaulComponent', () => {
  let component: FormularioRaulComponent;
  let fixture: ComponentFixture<FormularioRaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioRaulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



