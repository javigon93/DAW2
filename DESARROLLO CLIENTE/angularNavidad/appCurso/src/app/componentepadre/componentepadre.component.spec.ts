import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentepadreComponent } from './componentepadre.component';

describe('ComponentepadreComponent', () => {
  let component: ComponentepadreComponent;
  let fixture: ComponentFixture<ComponentepadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentepadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentepadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
