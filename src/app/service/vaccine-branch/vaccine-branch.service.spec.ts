import { TestBed } from '@angular/core/testing';

import { VaccineBranchService } from './vaccine-branch.service';

describe('VaccineBranchService', () => {
  let service: VaccineBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
