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
  userToken: string;
  userCollection: Card[] = [];
  public userEmail: string[] = [];
  bidData: string[] = [];
  showTrades: boolean = false;
  showPostOffer: boolean = false;
  showFilterTrade: boolean = false;
  tradeId: Number = 0;


  constructor(private http: HttpClient, private authSvc: AuthService, private router: Router) {
    this.postOffer = this.postOffer.bind(this);
    this.setBidCard = this.setBidCard.bind(this);
  }

  ngOnInit(): void {

    this.authSvc.afAuth.currentUser.then(
      user => {
        this.userEmail.push(user.email);
        this.bidData.push(user.email);
        user.getIdToken().then(
          result => {
            this.userToken = result;
            this.loadTradesAndCollection();
          }
        )
      }
    ).catch(x => console.log(x))
  }

  loadTradesAndCollection() {
    try {
      this.http.put('http://localhost:8080/exploretrades?tokenId=' + this.userToken, JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          Object.assign(this.trades, data);
        }
      )
    }
    catch (error) {
      console.log(error);
    }
    try {
      this.http.put('http://localhost:8080/collection?tokenId=' + this.userToken, JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          Object.assign(this.userCollection, data);
        }
      )
    }
    catch (error) {
      console.log(error);
    }

    this.showTrades = true;
  }

  postOffer(tradeId: Number) {
    this.showTrades = false;
    this.showPostOffer = true;
    this.tradeId = tradeId;

  }

  setBidCard(id: string) {
    this.bidData.push(id);
    this.bidData.push(this.tradeId.toString());
    this.postBid();

  }

  postBid() {
    try {
      this.http.put('http://localhost:8080/createbid?tokenId=' + this.userToken, JSON.stringify(this.bidData)).toPromise().then(() =>
        this.router.navigate(['/mybids'])
      )
    }
    catch (error) {
      console.log(error);
    }

    this.showTrades = true;
    this.showPostOffer = false;
    this.bidData = [];
    this.bidData.push(this.userEmail[0])
  }

  navigateToMyBids() {
    this.router.navigate[("/mybids")];
  }

  filterTrade(filter: string, filterKind: string) {
    const filterData = [];
    filterData.push(this.userEmail[0]);
    filterData.push(filter);
    filterData.push(filterKind);
    try {
      this.http.put('http://localhost:8080/exploretrades?tokenId=' + this.userToken, JSON.stringify(filterData)).toPromise().then(
        data => {
          this.trades = [];
          Object.assign(this.trades, data);
          this.showTrades = false;
          this.showFilterTrade = true;
        }
      )
    }
    catch (error) {
      console.log(error);
    }

    return false;
  }

  turnOffFilters() {
    try {
      this.http.put('http://localhost:8080/exploretrades?tokenId=' + this.userToken, JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          this.trades = [];
          Object.assign(this.trades, data);
          this.showFilterTrade = false;
          this.showTrades = true;
        }
      )
    }
    catch (error) {
      console.log(error);
    }
    return false;
  }

}
