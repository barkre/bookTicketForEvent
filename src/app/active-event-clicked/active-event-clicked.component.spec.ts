import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEventClickedComponent } from './active-event-clicked.component';

describe('ActiveEventClickedComponent', () => {
  let component: ActiveEventClickedComponent;
  let fixture: ComponentFixture<ActiveEventClickedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveEventClickedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveEventClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
