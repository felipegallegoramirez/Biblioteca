import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputaboutComponent } from './inputabout.component';

describe('InputaboutComponent', () => {
  let component: InputaboutComponent;
  let fixture: ComponentFixture<InputaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
