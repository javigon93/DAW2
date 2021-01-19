import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjMetodoComponent } from './ej-metodo.component';

describe('EjMetodoComponent', () => {
  let component: EjMetodoComponent;
  let fixture: ComponentFixture<EjMetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjMetodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjMetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
