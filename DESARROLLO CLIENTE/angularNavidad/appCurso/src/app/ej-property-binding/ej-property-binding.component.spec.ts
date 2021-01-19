import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjPropertyBindingComponent } from './ej-property-binding.component';

describe('EjPropertyBindingComponent', () => {
  let component: EjPropertyBindingComponent;
  let fixture: ComponentFixture<EjPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
