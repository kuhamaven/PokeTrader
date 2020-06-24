import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Trade } from '../models/trade.model';

@Component({
  selector: 'app-exploretrades',
  templateUrl: './exploretrades.component.html',
  styleUrls: ['./exploretrades.component.scss'],
  providers: [AuthService]

})
export class ExploretradesComponent implements OnInit {
  trades: Trade[] = [];
  userCollection: Card[]=[];
  public userEmail: string[] = [];
  bidData: string[] = [];
  showTrades: boolean=false;
  showPostOffer: boolean=false;
  tradeId:Number=0;


  constructor(private http: HttpClient, private authSvc: AuthService,private router: Router) { 
    this.postOffer = this.postOffer.bind(this);
    this.setBidCard=this.setBidCard.bind(this);
  }

  ngOnInit(): void {

    this.authSvc.afAuth.currentUser.then(
      user => {
        this.userEmail.push(user.email);
        this.bidData.push(user.email);
        this.loadTradesAndCollection();
      }
    ) .catch(x=> console.log(x))
    }
    
    loadTradesAndCollection(){
      try {
        this.http.put('http://localhost:8080/exploretrades',JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          Object.assign(this.trades,data);
        }
      )
      }
      catch(error) {
        console.log(error);
      }
      try {
        this.http.put('http://localhost:8080/collection',JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          Object.assign(this.userCollection,data);
          console.log(this.userCollection);
        }
      )
      }
      catch(error) {
        console.log(error);
      }

      this.showTrades=true;
    }

    postOffer(tradeId:Number){
      console.log(tradeId);
      this.showTrades=false;
      this.showPostOffer=true;
      this.tradeId=tradeId;
      
    }

    setBidCard(id:string){
      this.bidData.push(id);
      this.bidData.push(this.tradeId.toString());
      this.postBid();
      
    }

    postBid(){
      try {
        this.http.put('http://localhost:8080/createbid',JSON.stringify(this.bidData)).toPromise().then(()=>
          this.router.navigate(['/mybids'])
      )
      }
      catch(error) {
        console.log(error);
      }

      this.showTrades=true;
      this.showPostOffer=false;
      this.bidData=[];
      this.bidData.push(this.userEmail[0])


    }

}
