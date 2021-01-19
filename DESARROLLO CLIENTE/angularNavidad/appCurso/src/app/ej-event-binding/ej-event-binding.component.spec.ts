import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjEventBindingComponent } from './ej-event-binding.component';

describe('EjEventBindingComponent', () => {
  let component: EjEventBindingComponent;
  let fixture: ComponentFixture<EjEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
