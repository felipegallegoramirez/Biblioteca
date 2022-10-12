import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaPlantaComponent } from './galeria-planta.component';

describe('GaleriaPlantaComponent', () => {
  let component: GaleriaPlantaComponent;
  let fixture: ComponentFixture<GaleriaPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
