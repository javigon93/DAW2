import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjDirectivaNgifComponent } from './ej-directiva-ngif.component';

describe('EjDirectivaNgifComponent', () => {
  let component: EjDirectivaNgifComponent;
  let fixture: ComponentFixture<EjDirectivaNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjDirectivaNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjDirectivaNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
