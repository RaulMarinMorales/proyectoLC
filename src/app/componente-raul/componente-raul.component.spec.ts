import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRaulComponent } from './componente-raul.component';

describe('ComponenteRaulComponent', () => {
  let component: ComponenteRaulComponent;
  let fixture: ComponentFixture<ComponenteRaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteRaulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteRaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
