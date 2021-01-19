import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModeloComponent } from './view-modelo.component';

describe('ViewModeloComponent', () => {
  let component: ViewModeloComponent;
  let fixture: ComponentFixture<ViewModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
