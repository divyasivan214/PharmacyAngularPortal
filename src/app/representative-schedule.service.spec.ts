import { TestBed } from '@angular/core/testing';

import { RepresentativeScheduleService } from './representative-schedule.service';

describe('RepresentativeScheduleService', () => {
  let service: RepresentativeScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentativeScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
