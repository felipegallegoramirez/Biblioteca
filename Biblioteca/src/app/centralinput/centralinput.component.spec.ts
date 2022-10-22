import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinputComponent } from './centralinput.component';

describe('CentralinputComponent', () => {
  let component: CentralinputComponent;
  let fixture: ComponentFixture<CentralinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
