import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVaccineByBranchComponent } from './all-vaccine-by-branch.component';

describe('AllVaccineByBranchComponent', () => {
  let component: AllVaccineByBranchComponent;
  let fixture: ComponentFixture<AllVaccineByBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVaccineByBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVaccineByBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
