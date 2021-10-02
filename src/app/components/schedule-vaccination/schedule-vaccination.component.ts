import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchModel } from 'src/app/model/BranchModel';
import { ColumnNames } from 'src/app/model/ColumnNames';


import { ScheduleVaccinationModel } from 'src/app/model/ScheduleVaccinationModel';
import { BranchService } from 'src/app/service/branch/branch.service';
import { ScheduleVaccinationService } from 'src/app/service/schedule-vaccination/schedule-vaccination.service';

@Component({
  selector: 'app-schedule-vaccination',
  templateUrl: './schedule-vaccination.component.html',
  styleUrls: ['./schedule-vaccination.component.scss']
})
export class ScheduleVaccinationComponent implements OnInit {


  model!: ScheduleVaccinationModel;
  allScheduleVaccinationes: ScheduleVaccinationModel[] = [];
  allBranches: BranchModel[] = [];
  allPayment: any;

  mod: string = 'CREATE';
  selectedRow!: ScheduleVaccinationModel;

  columnNames: ColumnNames[] = [
    { columHead: 'Schedule Vacc. branch', property: 'branch' },
    { columHead: 'Schedule Vacc. Date', property: 'vacTime' },
    { columHead: 'Schedule Vacc. Payment', property: 'paymentMethod' },
    { columHead: 'Schedule Vacc. Email', property: 'email' },
    { columHead: 'Schedule Vacc. Desc', property: 'vacDesc' },

  ];

  constructor(private scheduleVaccinationService: ScheduleVaccinationService, private branchService: BranchService) { }

  ngOnInit(): void {
    this.model = new ScheduleVaccinationModel();
    this.scheduleVaccinationService.getAll().subscribe(data => this.allScheduleVaccinationes = data);
    this.branchService.getAll().subscribe(data => this.allBranches = data);

  }


  saveScheduleVaccination(f: NgForm) {
    if (f.valid) {

      switch (this.mod) {
        case "UPDATE":
          this.scheduleVaccinationService.update(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
            data;
          });
          break;
        case "CREATE":
        default:
          this.scheduleVaccinationService.create(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
            data;
          });
          break;
      }
    }
  }

  getRow(row: ScheduleVaccinationModel) {
    this.selectedRow = row;
    this.mod = 'UPDATE';
    this.model = { ...row }
    console.log(this.model)
  }
  compareFn = (a: any, b: any) => a && b && a.id == b.id;





}
