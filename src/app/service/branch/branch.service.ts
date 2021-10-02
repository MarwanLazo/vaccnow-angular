import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BranchModel } from 'src/app/model/BranchModel';


@Injectable({
  providedIn: 'root'
})
export class BranchService {


  private url: string = '/api/branch';


  constructor(private http: HttpClient) { }

  getAll(): Observable<BranchModel[]> {
    return this.http.get<BranchModel[]>(this.url,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  branchVaccineAvailablityByVaccineId(vaccineId: number): Observable<BranchModel[]> {
    return this.http.get<BranchModel[]>(this.url + '/' + vaccineId + '/forBranch',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });

  }
  create(model: BranchModel): Observable<BranchModel> {
    return this.http.post<BranchModel>(this.url, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }



  update(model: BranchModel): Observable<BranchModel> {
    return this.http.put<BranchModel>(this.url, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


}
