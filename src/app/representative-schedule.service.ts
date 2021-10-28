import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InputDateModel } from './Models/InputDate';
@Injectable({
  providedIn: 'root'
})
export class RepresentativeScheduleService {
  readonly APIUrl="https://localhost:44378/api/MedicalRepresentativeSchedule";
  //readonly StartDateUrl="https://localhost:44384/api/MedicalRepresentativeSchedule/2021-10-09";
  constructor(private httpClient:HttpClient) { }
  GetAllRepSchedule(StartDate:string):Observable<any>
  {
       return this.httpClient.get<any>("https://localhost:44378/api/MedicalRepresentativeSchedule/"+StartDate);
  }
}
