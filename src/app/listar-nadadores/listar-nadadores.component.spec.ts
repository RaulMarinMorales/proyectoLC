import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNadadoresComponent } from './listar-nadadores.component';

describe('ListarNadadoresComponent', () => {
  let component: ListarNadadoresComponent;
  let fixture: ComponentFixture<ListarNadadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarNadadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNadadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
