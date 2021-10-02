import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ScheduleVaccinationModel } from 'src/app/model/ScheduleVaccinationModel';

@Injectable({
  providedIn: 'root'
})
export class ScheduleVaccinationService {



  private url: string = '/api/scheduleVaccination';


  constructor(private http: HttpClient) { }

  getAll(): Observable<ScheduleVaccinationModel[]> {
    return this.http.get<ScheduleVaccinationModel[]>(this.url,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  create(model: ScheduleVaccinationModel): Observable<ScheduleVaccinationModel> {
    return this.http.post<ScheduleVaccinationModel>(this.url, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }



  update(model: ScheduleVaccinationModel): Observable<ScheduleVaccinationModel> {
    return this.http.put<ScheduleVaccinationModel>(this.url, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


}
