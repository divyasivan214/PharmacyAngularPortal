import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44349/api";
  UserName!:string|null;

  constructor(private http:HttpClient,private jwtHelper: JwtHelperService, private router: Router) { }

  Login(val:any){
    return this.http.post(this.APIUrl+"/Auth/login",val);
  }

  isUserAuthenticated() {
    const token : string | null = localStorage.getItem("jwt");
    console.log(token);
    if (token && !this.jwtHelper.isTokenExpired(token) && token != null) {
      // console.log("wokrk");
      this.UserName = localStorage.getItem("logInUserName");
      return true;
    }
    else {
      // console.log("not wokrk");
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(['/login']);
  }

}
