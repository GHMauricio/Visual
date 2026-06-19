import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesEditar } from './recomendaciones-editar';

describe('RecomendacionesEditar', () => {
  let component: RecomendacionesEditar;
  let fixture: ComponentFixture<RecomendacionesEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendacionesEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendacionesEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
