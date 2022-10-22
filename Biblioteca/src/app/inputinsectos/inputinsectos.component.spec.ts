import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputinsectosComponent } from './inputinsectos.component';

describe('InputinsectosComponent', () => {
  let component: InputinsectosComponent;
  let fixture: ComponentFixture<InputinsectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputinsectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputinsectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
