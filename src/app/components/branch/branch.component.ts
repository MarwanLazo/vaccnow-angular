import { Component, OnInit } from '@angular/core';
import { BranchModel } from 'src/app/model/BranchModel';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  model!: BranchModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.model)
    this.model = new BranchModel();
    console.log(this.model)
    this.model.id = 12;
    console.log(this.model)

  }

}
