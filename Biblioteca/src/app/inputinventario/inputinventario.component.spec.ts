import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputinventarioComponent } from './inputinventario.component';

describe('InputinventarioComponent', () => {
  let component: InputinventarioComponent;
  let fixture: ComponentFixture<InputinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputinventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
