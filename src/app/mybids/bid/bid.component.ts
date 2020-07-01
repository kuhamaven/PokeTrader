 import { Component, OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Trade } from 'src/app/models/trade.model';
import { Bid } from 'src/app/models/bid.model';
import { HostBinding} from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {
  @Input()  bid:Bid;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  trade:Trade=new Trade()
  showSeeTrade: boolean;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  seeTrade(id:number){
    console.log(this.bid.tradeId);
    const tradeId=[];
    tradeId.push(id)
    try {
      this.http.put('http://localhost:8080/tradebyid',JSON.stringify(tradeId)).toPromise().then(
      data => {
        console.log(data);
        Object.assign(this.trade,data);
        this.showSeeTrade=true;
      }
    )
    }
    catch(error) {
      console.log(error);
    }
  }
  goBack(){
  this.showSeeTrade=false;
  }

  bidderVerification(tradeId:number){
    const tradeData = [];
    tradeData.push(tradeId);
 
      try {
        this.http.put('http://localhost:8080/bidderverification',JSON.stringify(tradeData)).toPromise().then(
        data => {  this.router.navigate(['/profile']); }
      )
      }
      catch(error) {
        console.log(error);
      }
 }




} 
