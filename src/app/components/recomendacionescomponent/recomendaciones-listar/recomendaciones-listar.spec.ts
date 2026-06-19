import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesListar } from './recomendaciones-listar';

describe('RecomendacionesListar', () => {
  let component: RecomendacionesListar;
  let fixture: ComponentFixture<RecomendacionesListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendacionesListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendacionesListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
