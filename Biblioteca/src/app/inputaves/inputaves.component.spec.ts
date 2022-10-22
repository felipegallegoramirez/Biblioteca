import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputavesComponent } from './inputaves.component';

describe('InputavesComponent', () => {
  let component: InputavesComponent;
  let fixture: ComponentFixture<InputavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
