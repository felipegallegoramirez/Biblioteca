import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaInsectosComponent } from './galeria-insectos.component';

describe('GaleriaInsectosComponent', () => {
  let component: GaleriaInsectosComponent;
  let fixture: ComponentFixture<GaleriaInsectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaInsectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaInsectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
