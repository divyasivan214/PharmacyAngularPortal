import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedService } from './shared.service';
import {DatePipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepScheduleComponent } from './rep-schedule/rep-schedule.component';
import { StockComponent } from './stock/stock.component';
import { PharmacysupplyComponent } from './pharmacysupply/pharmacysupply.component';
import { GetPostComponent } from './pharmacysupply/get-post/get-post.component';
import { HomeComponent } from './home/home.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepScheduleComponent,
    StockComponent,
    PharmacysupplyComponent,
    GetPostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [SharedService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
