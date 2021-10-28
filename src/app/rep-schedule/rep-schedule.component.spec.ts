import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepScheduleComponent } from './rep-schedule.component';

describe('RepScheduleComponent', () => {
  let component: RepScheduleComponent;
  let fixture: ComponentFixture<RepScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
