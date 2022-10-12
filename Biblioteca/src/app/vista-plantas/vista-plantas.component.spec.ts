import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPlantasComponent } from './vista-plantas.component';

describe('VistaPlantasComponent', () => {
  let component: VistaPlantasComponent;
  let fixture: ComponentFixture<VistaPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
