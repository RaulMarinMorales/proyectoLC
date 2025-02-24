import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquiposBaloncestoComponent } from './listar-equipos-baloncesto.component';

describe('ListarEquiposBaloncestoComponent', () => {
  let component: ListarEquiposBaloncestoComponent;
  let fixture: ComponentFixture<ListarEquiposBaloncestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarEquiposBaloncestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEquiposBaloncestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
