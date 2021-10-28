import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service'; 


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private service: StockService) { }

  StockAvailable:any=[];

  ngOnInit(): void {
    this.refreshStock();
  }

  refreshStock() {
    this.service.getStock().subscribe(data => {
      this.StockAvailable=data;
    });
  }

}
