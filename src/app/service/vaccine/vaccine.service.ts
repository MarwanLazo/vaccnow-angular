import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { VaccineModel } from 'src/app/model/VaccineModel';



@Injectable({
  providedIn: 'root'
})
export class VaccineService {


  private url: string = '/api/vaccine';


  constructor(private http: HttpClient) { }

  getAll(): Observable<VaccineModel[]> {
    return this.http.get<VaccineModel[]>(this.url,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  create(model: VaccineModel): Observable<VaccineModel> {
    return this.http.post<VaccineModel>(this.url, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }



  update(model: VaccineModel): Observable<VaccineModel> {
    return this.http.put<VaccineModel>(this.url, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
