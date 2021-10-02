import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineBranchComponent } from './vaccine-branch.component';

describe('VaccineBranchComponent', () => {
  let component: VaccineBranchComponent;
  let fixture: ComponentFixture<VaccineBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
