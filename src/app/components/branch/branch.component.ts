import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchModel } from 'src/app/model/BranchModel';
import { ColumnNames } from 'src/app/model/ColumnNames';
import { BranchService } from 'src/app/service/branch/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  model!: BranchModel;
  allBranches: BranchModel[] = [];
  mod: string = 'CREATE';
  selectedRow!: BranchModel;

  columnNames: ColumnNames[] = [
    { columHead: 'Branch Name', property: 'name' },
    { columHead: 'Branch Location', property: 'location' },
    { columHead: 'Branch Phone', property: 'phone' },
    { columHead: 'Branch Email', property: 'email' }
  ];

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.model = new BranchModel();
    this.branchService.getAll().subscribe(data => this.allBranches = data);
  }


  saveBranch(f: NgForm) {
    if (f.valid) {

      switch (this.mod) {
        case "UPDATE":
          this.branchService.update(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
            data;
          });
          break;
        case "CREATE":
        default:
          this.branchService.create(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
            data;
          });
          break;
      }
    }
  }

  getRow(row: BranchModel) {
    this.selectedRow = row;
    this.mod = 'UPDATE';
    this.model = { ...row }
    console.log(this.model)
  }



}
