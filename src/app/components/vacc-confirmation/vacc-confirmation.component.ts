import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchModel } from 'src/app/model/BranchModel';
import { ColumnNames } from 'src/app/model/ColumnNames';
import { ScheduleVaccinationModel } from 'src/app/model/ScheduleVaccinationModel';
import { BranchService } from 'src/app/service/branch/branch.service';
import { ScheduleVaccinationService } from 'src/app/service/schedule-vaccination/schedule-vaccination.service';

@Component({
  selector: 'app-vacc-confirmation',
  templateUrl: './vacc-confirmation.component.html',
  styleUrls: ['./vacc-confirmation.component.scss']
})
export class VaccConfirmationComponent implements OnInit {

  model!: ScheduleVaccinationModel;
  selectedRow!: ScheduleVaccinationModel;

  allScheduleVaccinationes: ScheduleVaccinationModel[] = [];
  allScheduleVaccConfirmed: ScheduleVaccinationModel[] = [];
  allScheduleVaccUnConfirmed: ScheduleVaccinationModel[] = [];
  allUnConfirmedEmails: string[] = [];
  allBranches: BranchModel[] = [];


  columnNames: ColumnNames[] = [
    { columHead: 'Schedule Vacc. branch', property: 'branch' },
    { columHead: 'Schedule Vacc. Date', property: 'vacTime' },
    { columHead: 'Schedule Vacc. Request', property: 'request' },
    { columHead: 'Schedule Vacc. Payment', property: 'paymentMethod' },
    { columHead: 'Schedule Vacc. Email', property: 'email' },
    { columHead: 'Schedule Vacc. Desc', property: 'vacDesc' },

  ];



  constructor(private scheduleVaccinationService: ScheduleVaccinationService, private branchService: BranchService) { }


  ngOnInit(): void {
    this.model = new ScheduleVaccinationModel();
    this.scheduleVaccinationService.getAll().subscribe(data => {
      this.allScheduleVaccinationes = data;
      this.allScheduleVaccConfirmed = data.filter(fi => fi.confirmed);
      this.allScheduleVaccUnConfirmed = data.filter(fi => !fi.confirmed);
      this.allUnConfirmedEmails = this.allScheduleVaccUnConfirmed.map(mp => mp.email);
    });
    this.branchService.getAll().subscribe(data => this.allBranches = data);

  }




  getRow(row: ScheduleVaccinationModel) {
    this.selectedRow = row;
    this.model = { ...row }
  }

  scheduleMailVaccination(f: NgForm) {
    if (f.valid) {
      this.scheduleVaccinationService
        .scheduleVaccConfirmationByPaymentEmail(this.model.paymentMethod, this.model.email).subscribe(data => {
          this.ngOnInit();
          f.resetForm();
          data;
        });
    }
  }

  compareFn = (a: any, b: any) => a && b && a.id == b.id;


}
