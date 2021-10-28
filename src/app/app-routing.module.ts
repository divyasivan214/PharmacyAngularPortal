import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PharmacysupplyComponent } from './pharmacysupply/pharmacysupply.component';
import { RepScheduleComponent } from './rep-schedule/rep-schedule.component';
import { StockComponent } from './stock/stock.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'RepSchedule',component:RepScheduleComponent,canActivate: [AuthGuardGuard]},
  {path:'MedicineStockInformation',component:StockComponent},
  {path:'PharmacySupply',component:PharmacysupplyComponent,canActivate: [AuthGuardGuard]},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardGuard]
})
export class AppRoutingModule { }
