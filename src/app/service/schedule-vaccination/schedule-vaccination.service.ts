import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PaymentMethodEnum } from 'src/app/model/PaymentMethodEnum';
import { ScheduleVaccinationModel } from 'src/app/model/ScheduleVaccinationModel';

@Injectable({
  providedIn: 'root'
})
export class ScheduleVaccinationService {



  private url: string = '/api/scheduleVaccination';
  private url_vaccination_payment_email: string = '/api/scheduleVaccination/';

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

  scheduleVaccConfirmationByPaymentEmail(payment: PaymentMethodEnum, email: string): Observable<ScheduleVaccinationModel> {
    return this.http.get<ScheduleVaccinationModel>(this.url_vaccination_payment_email + payment + '/' + email,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }



}
