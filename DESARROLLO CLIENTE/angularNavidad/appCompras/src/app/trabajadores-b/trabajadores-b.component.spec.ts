import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresBComponent } from './trabajadores-b.component';

describe('TrabajadoresBComponent', () => {
  let component: TrabajadoresBComponent;
  let fixture: ComponentFixture<TrabajadoresBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadoresBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadoresBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
