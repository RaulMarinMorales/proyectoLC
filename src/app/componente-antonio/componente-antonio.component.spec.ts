import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAntonioComponent } from './componente-antonio.component';

describe('ComponenteAntonioComponent', () => {
  let component: ComponenteAntonioComponent;
  let fixture: ComponentFixture<ComponenteAntonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteAntonioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteAntonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
