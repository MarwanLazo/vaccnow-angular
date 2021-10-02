import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchModel } from 'src/app/model/BranchModel';
import { ColumnNames } from 'src/app/model/ColumnNames';
import { VaccineBranchModel } from 'src/app/model/VaccineBranchModel';
import { VaccineModel } from 'src/app/model/VaccineModel';
import { BranchService } from 'src/app/service/branch/branch.service';
import { VaccineBranchService } from 'src/app/service/vaccine-branch/vaccine-branch.service';
import { VaccineService } from 'src/app/service/vaccine/vaccine.service';

@Component({
  selector: 'app-vaccine-branch',
  templateUrl: './vaccine-branch.component.html',
  styleUrls: ['./vaccine-branch.component.scss']
})
export class VaccineBranchComponent implements OnInit {

  allBranches: BranchModel[] = [];
  allVaccines: VaccineModel[] = [];
  allVaccineBranch: VaccineBranchModel[] = [];

  branchId!: number;
  vaccineId!: number;
  selectedRow!: VaccineBranchModel;

  columnNames: ColumnNames[] = [
    { columHead: 'Branch Name', property: 'id' },
    { columHead: 'Vaccine Name', property: 'id' },
  ];

  constructor(private branchService: BranchService, private vaccineService: VaccineService
    , private vaccineBranchService: VaccineBranchService) { }

  ngOnInit(): void {
    this.branchService.getAll().subscribe(data => this.allBranches = data);
    this.vaccineService.getAll().subscribe(data => this.allVaccines = data);
    this.vaccineBranchService.getAll().subscribe(data => this.allVaccineBranch = data);
  }

  compareFn = (a: any, b: any) => a && b && a.id == b.id;

  saveVaccinnBranch(f: NgForm) {
    if (f.valid) {
      this.vaccineBranchService.create(this.branchId, this.vaccineId)
        .subscribe(data1 => this.vaccineBranchService.getAll().subscribe(data => this.allVaccineBranch = data));

    }
  }

  getRow(row: VaccineBranchModel) {
    this.selectedRow = row;
    this.branchId = row.id.branchId.id
    this.vaccineId = row.id.vaccine.id
  }
}