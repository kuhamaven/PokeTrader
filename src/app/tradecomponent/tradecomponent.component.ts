import { Component, OnInit } from '@angular/core';
import { Trade } from '../models/trade.model';
import { Input, HostBinding } from '@angular/core';
import {Card} from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tradecomponent',
  templateUrl: './tradecomponent.component.html',
  styleUrls: ['./tradecomponent.component.scss']
})
export class TradecomponentComponent implements OnInit {
  @Input() trade: Trade;
  @Input() loadBids: any;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  clicked:boolean=false;
  tradeId:Number=0;
  


  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  hostVerification(tradeId:number){
     const tradeData = [];
     tradeData.push(tradeId);
  
       try {
         this.http.put('http://localhost:8080/hostverification',JSON.stringify(tradeData)).toPromise().then(
         data => {

          this.router.navigate(['/profile']);
         }
       )
       }
       catch(error) {
         console.log(error);
       }

       
  }

 

}
