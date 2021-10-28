import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { MedicineDemandModel } from 'src/app/Models/pharmacymedsuppli.model';
import { MedicineDemand } from 'src/app/Models/medicinedemand.model';
import { FormGroup, FormBuilder, Form, NgForm } from '@angular/forms';
import { SupplyService } from 'src/app/supply.service';
@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']
})
export class GetPostComponent implements OnInit {

  Demand:MedicineDemand[]=[];
  // Demand : MedicineDemand;
  medicineDemand:MedicineDemand={
    medicine : "",
    demandCount : 0
  }
  MedicineDemandForm:Form | undefined;
  errorMessage=[]="";
  constructor(private service:SupplyService) {
   }
  
  // Demand : MedicineDemand | undefined;

DemandList1:MedicineDemandModel[]=[];

DemandList:MedicineDemandModel={
  id:0,
  pharmacyName:"",
  medicineName:"",
  supplyCount:0
};
  ngOnInit() : void {
    //this.refreshSupplyList();
    this.DemandList;
    this.refreshSupplyList();
  }
  
 refreshSupplyList(){
    this.service.GetSupplyList().subscribe((data)=>
      this.DemandList1=data);
      //console.log(this.DemandList);
}
AddMessage:string="";
ErrorMessage:boolean=false;

  Adddemand(Demand : MedicineDemand,MedicineDemandForm:NgForm):void{
    this.service.AddDemand(Demand).subscribe(data=>{
      this.DemandList=data;
      this.refreshSupplyList();
      console.log(this.DemandList);
      this.AddMessage="Demand is successfully added";
      this.ErrorMessage =false;
      MedicineDemandForm.resetForm();
      
    },
    err => {
      this.ErrorMessage =true;

    })
    }

  
}

