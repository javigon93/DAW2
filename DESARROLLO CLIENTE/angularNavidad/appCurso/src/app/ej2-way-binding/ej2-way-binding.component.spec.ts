import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2WayBindingComponent } from './ej2-way-binding.component';

describe('Ej2WayBindingComponent', () => {
  let component: Ej2WayBindingComponent;
  let fixture: ComponentFixture<Ej2WayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej2WayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej2WayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
