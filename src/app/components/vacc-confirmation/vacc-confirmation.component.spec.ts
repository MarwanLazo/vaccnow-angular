import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccConfirmationComponent } from './vacc-confirmation.component';

describe('VaccConfirmationComponent', () => {
  let component: VaccConfirmationComponent;
  let fixture: ComponentFixture<VaccConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
