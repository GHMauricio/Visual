import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recomendacionescomponent } from './recomendacionescomponent';

describe('Recomendacionescomponent', () => {
  let component: Recomendacionescomponent;
  let fixture: ComponentFixture<Recomendacionescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recomendacionescomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recomendacionescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
