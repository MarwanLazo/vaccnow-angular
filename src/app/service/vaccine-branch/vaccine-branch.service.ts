import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { VaccineBranchModel } from 'src/app/model/VaccineBranchModel';



@Injectable({
  providedIn: 'root'
})
export class VaccineBranchService {

  private url: string = '/api/vaccineBranch';


  constructor(private http: HttpClient) { }

  getAll(): Observable<VaccineBranchModel[]> {
    return this.http.get<VaccineBranchModel[]>(this.url,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  create(branchId: number, vaccineId: number): Observable<VaccineBranchModel> {
    return this.http.post<VaccineBranchModel>(this.url + '/' + branchId + '/' + vaccineId,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


}
