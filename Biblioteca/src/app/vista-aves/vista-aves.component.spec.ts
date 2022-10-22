import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAvesComponent } from './vista-aves.component';

describe('VistaAvesComponent', () => {
  let component: VistaAvesComponent;
  let fixture: ComponentFixture<VistaAvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
