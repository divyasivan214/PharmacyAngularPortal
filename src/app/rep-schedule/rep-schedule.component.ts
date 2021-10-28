import { Component, OnInit } from '@angular/core';
import { RepresentativeScheduleService } from '../representative-schedule.service';
import { FormGroup, FormBuilder, Form, NgForm } from '@angular/forms';
import { InputDateModel } from '../Models/InputDate';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepScheduleModel } from '../Models/RepScheduleModel';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-rep-schedule',
  templateUrl: './rep-schedule.component.html',
  styleUrls: ['./rep-schedule.component.css']
})
export class RepScheduleComponent implements OnInit {
  StartDate:string;
  response!:any;//Array<RepScheduleModel>;
  todayDate = new Date();
  ErrorMessage!: string;
  
  constructor(private httpClient:HttpClient, private datePipe:DatePipe) {
    this.StartDate="";
    this.datePipe.transform(this.todayDate,"yyyy-MM-dd");
    this.ErrorMessage="";
    // this.todayDate = this.datepipe.transform(this.todayDate, 'yyyy-MM-dd');
   }

  ngOnInit(): void {
  }

  sendResponse(MedicineDemandForm:NgForm){
    console.log(this.StartDate);
    if(this.StartDate=="")
    {
      this.ErrorMessage="Please Provide Start Date";
    }
    this.httpClient.get<any>("https://localhost:44378/api/MedicalRepresentativeSchedule/"+this.StartDate,{headers: new HttpHeaders({
    }).set("Authorization", "Bearer " + localStorage.getItem("jwt"))
  }).subscribe(data=>{
      this.response=data;
      console.log(this.response);
      MedicineDemandForm.resetForm();
      
    });
  }
}
