import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchModel } from 'src/app/model/BranchModel';
import { ColumnNames } from 'src/app/model/ColumnNames';
import { VaccineModel } from 'src/app/model/VaccineModel';
import { BranchService } from 'src/app/service/branch/branch.service';
import { VaccineService } from 'src/app/service/vaccine/vaccine.service';

@Component({
  selector: 'app-vaccine-avaliable-by-branch',
  templateUrl: './vaccine-avaliable-by-branch.component.html',
  styleUrls: ['./vaccine-avaliable-by-branch.component.scss']
})
export class VaccineAvaliableByBranchComponent implements OnInit {


  allBranches: BranchModel[] = [];
  allVaccines: VaccineModel[] = [];
  vaccineId!: number;

  columnNames: ColumnNames[] = [
    { columHead: 'Branch Name', property: 'name' },
    { columHead: 'Branch Location', property: 'location' },
    { columHead: 'Branch Phone', property: 'phone' },
    { columHead: 'Branch Email', property: 'email' },
    { columHead: 'Vaccine Exist', property: 'vaccineId' }
  ];

  constructor(private branchService: BranchService, private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.vaccineService.getAll().subscribe(data => this.allVaccines = data);
  }

  compareFn = (a: any, b: any) => a && b && a.id == b.id;

  CheckVaccineByBranchId(f: NgForm) {
    if (f.valid) {
      this.branchService.branchVaccineAvailablityByVaccineId(this.vaccineId)
        .subscribe(data => this.allBranches = data);
    }
  }

}
