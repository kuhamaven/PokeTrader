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
  bidData: String[] = [];
  userId: string='';
  showTrades: boolean=false;
  showPostOffer: boolean=false;

  constructor(private http: HttpClient, private authSvc: AuthService,private router: Router) { 
    this.postOffer = this.postOffer.bind(this);
  }

  ngOnInit(): void {

    this.authSvc.afAuth.currentUser.then(
      user => {
        this.userEmail.push(user.email)
        this.userId=user.uid;
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
        }
      )
      }
      catch(error) {
        console.log(error);
      }

      this.showTrades=true;
    }

    postOffer(tradeId:number){
      this.showTrades=false;
      this.showPostOffer=true;
      
    }
}
