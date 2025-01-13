import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteJuanComponent } from './componente-juan.component';

describe('ComponenteJuanComponent', () => {
  let component: ComponenteJuanComponent;
  let fixture: ComponentFixture<ComponenteJuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteJuanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteJuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
