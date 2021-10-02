import { TestBed } from '@angular/core/testing';

import { ScheduleVaccinationService } from './schedule-vaccination.service';

describe('ScheduleVaccinationService', () => {
  let service: ScheduleVaccinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleVaccinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
