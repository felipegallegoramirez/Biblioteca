import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInsectosComponent } from './vista-insectos.component';

describe('VistaInsectosComponent', () => {
  let component: VistaInsectosComponent;
  let fixture: ComponentFixture<VistaInsectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaInsectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaInsectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
