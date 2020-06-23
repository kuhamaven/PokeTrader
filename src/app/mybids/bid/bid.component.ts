 import { Component, OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Trade } from 'src/app/models/trade.model';
import { Bid } from 'src/app/models/bid.model';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {
  @Input()  bid:Bid;
  trade:Trade;
  tradeId: number[]=[];
  hostEmail: string;
  initialized:boolean=false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const pepito=this.bid.trade
    this.tradeId.push(pepito);
    console.log(this.tradeId);
    this.loadBid();

  }

  
  loadBid(){
    try {
      this.http.put('http://localhost:8080/tradebyid',JSON.stringify(this.tradeId)).toPromise().then(
      data => {
        console.log(data);
        Object.assign(this.trade,data);
        this.getUserEmail();
      }
    )
    }
    catch(error) {
      console.log(error);
    }
  }
  
  getUserEmail(){
    try {
      this.http.put('http://localhost:8080/userbyid',JSON.stringify(this.trade.userId)).toPromise().then(
      data => {
        console.log(data);
        Object.assign(this.hostEmail,data);
        this.initialized=true;
      }
    )
    }
    catch(error) {
      console.log(error);
    }

  }


} 
