import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin!: boolean;
  UserName!: string;
  
  constructor(private router: Router, private http: HttpClient, private service:SharedService) { }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    this.http.post("https://localhost:44349/api/Auth/login", credentials, {
      headers: new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      this.UserName = form.value.UserName;
      localStorage.setItem("jwt", token);
      localStorage.setItem("logInUserName", this.UserName);
      this.invalidLogin = false;
      this.router.navigate(["/home"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

}
