import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchModel } from 'src/app/model/BranchModel';
import { ColumnNames } from 'src/app/model/ColumnNames';
import { VaccineModel } from 'src/app/model/VaccineModel';
import { BranchService } from 'src/app/service/branch/branch.service';
import { VaccineService } from 'src/app/service/vaccine/vaccine.service';

@Component({
  selector: 'app-all-vaccine-by-branch',
  templateUrl: './all-vaccine-by-branch.component.html',
  styleUrls: ['./all-vaccine-by-branch.component.scss']
})
export class AllVaccineByBranchComponent implements OnInit {

  allBranches: BranchModel[] = [];
  allVaccines: VaccineModel[] = [];
  branchId!: number;
  selectedRow!: VaccineModel;

  columnNames: ColumnNames[] = [
    { columHead: 'Vaccine Name', property: 'name' },
    { columHead: 'Vaccine manufacture', property: 'manufacture' },
    { columHead: 'Vaccine country', property: 'country' },
    { columHead: 'Vaccine notes', property: 'notes' }
  ];


  constructor(private branchService: BranchService, private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.branchService.getAll().subscribe(data => this.allBranches = data);
  }

  compareFn = (a: any, b: any) => a && b && a.id == b.id;


  getRow(row: VaccineModel) {
    this.selectedRow = row;
  }

  getVaccineByBranchId(f: NgForm) {
    if (f.valid) {
      this.vaccineService.getVaccineByBranchId(this.branchId).subscribe(data => this.allVaccines = data)
    }
  }
}
