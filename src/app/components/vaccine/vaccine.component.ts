import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColumnNames } from 'src/app/model/ColumnNames';
import { VaccineModel } from 'src/app/model/VaccineModel';
import { VaccineService } from 'src/app/service/vaccine/vaccine.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss']
})
export class VaccineComponent implements OnInit {


  model!: VaccineModel;
  allVaccinees: VaccineModel[] = [];
  mod: string = 'CREATE';
  selectedRow!: VaccineModel;

  columnNames: ColumnNames[] = [
    { columHead: 'Vaccine Name', property: 'name' },
    { columHead: 'Vaccine manufacture', property: 'manufacture' },
    { columHead: 'Vaccine country', property: 'country' },
    { columHead: 'Vaccine notes', property: 'notes' }
  ];

  constructor(private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.model = new VaccineModel();
    this.vaccineService.getAll().subscribe(data => this.allVaccinees = data);
  }


  saveVaccine(f: NgForm) {
    if (f.valid) {

      switch (this.mod) {
        case "UPDATE":
          this.vaccineService.update(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
            data;
          });
          break;
        case "CREATE":
        default:
          this.vaccineService.create(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
            data;
          });
          break;
      }
    }
  }

  getRow(row: VaccineModel) {
    this.selectedRow = row;
    this.mod = 'UPDATE';
    this.model = { ...row }
    console.log(this.model)
  }



}
