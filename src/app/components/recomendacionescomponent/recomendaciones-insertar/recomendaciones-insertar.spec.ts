import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesInsertar } from './recomendaciones-insertar';

describe('RecomendacionesInsertar', () => {
  let component: RecomendacionesInsertar;
  let fixture: ComponentFixture<RecomendacionesInsertar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendacionesInsertar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendacionesInsertar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
