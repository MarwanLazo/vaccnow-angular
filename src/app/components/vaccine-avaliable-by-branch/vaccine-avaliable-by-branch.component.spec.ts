import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineAvaliableByBranchComponent } from './vaccine-avaliable-by-branch.component';

describe('VaccineAvaliableByBranchComponent', () => {
  let component: VaccineAvaliableByBranchComponent;
  let fixture: ComponentFixture<VaccineAvaliableByBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineAvaliableByBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineAvaliableByBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
