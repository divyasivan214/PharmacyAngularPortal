import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicineDemandModel } from './Models/pharmacymedsuppli.model';
import { MedicineDemand } from './Models/medicinedemand.model';
import { PharmacysupplyComponent } from './pharmacysupply/pharmacysupply.component';


@Injectable({
  providedIn: 'root'
})
export class SupplyService {
readonly APIurl="https://localhost:44388/api/PharmaMedicineSupply";
  constructor(private http:HttpClient) { }
  GetSupplyList():Observable<any>{
    return this.http.get(this.APIurl,{headers: new HttpHeaders({
    }).set("Authorization", "Bearer " + localStorage.getItem("jwt"))
  });
  }

  AddDemand(Demand:MedicineDemand):Observable<MedicineDemandModel>{
    //console.log(Demand);
    //console.log("Servicelayer");
    return this.http.post<MedicineDemandModel>("https://localhost:44388/api/PharmaMedicineSupply/MedicineDemand/",Demand,{headers: new HttpHeaders({
    }).set("Authorization", "Bearer " + localStorage.getItem("jwt"))
  });

    /*Demand,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }*/
}

}
