import { Component, OnInit } from '@angular/core';
import { BranchModel } from 'src/app/model/BranchModel';
import { ColumnNames } from 'src/app/model/ColumnNames';
import { BranchService } from 'src/app/service/branch/branch.service';

@Component({
  selector: 'app-all-branches',
  templateUrl: './all-branches.component.html',
  styleUrls: ['./all-branches.component.scss']
})
export class AllBranchesComponent implements OnInit {


  allBranches: BranchModel[] = [];

  columnNames: ColumnNames[] = [
    { columHead: 'Branch Name', property: 'name' },
    { columHead: 'Branch Location', property: 'location' },
    { columHead: 'Branch Phone', property: 'phone' },
    { columHead: 'Branch Email', property: 'email' }
  ];

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.branchService.getAll().subscribe(data => this.allBranches = data);
  }

}
