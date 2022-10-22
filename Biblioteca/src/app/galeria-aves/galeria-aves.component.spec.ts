import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaAvesComponent } from './galeria-aves.component';

describe('GaleriaAvesComponent', () => {
  let component: GaleriaAvesComponent;
  let fixture: ComponentFixture<GaleriaAvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaAvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
