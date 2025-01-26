import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponenteComponent } from './footer-componente.component';

describe('FooterComponenteComponent', () => {
  let component: FooterComponenteComponent;
  let fixture: ComponentFixture<FooterComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
