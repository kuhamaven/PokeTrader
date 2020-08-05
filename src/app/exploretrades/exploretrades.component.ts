import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  wishlistBoolean: boolean=false;


  constructor(private http: HttpClient, private authSvc: AuthService, private router: Router) {
    this.postOffer = this.postOffer.bind(this);
    this.setBidCard = this.setBidCard.bind(this);
    const wishlistControl= new FormControl();
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
    let jsonBody: string[]=[];
      jsonBody.push('%');
      jsonBody.push('%');
      jsonBody.push('%');
      jsonBody.push('%');
      jsonBody.push('%');
      jsonBody.push('false');
      jsonBody.push('false');
    try {
   
      this.http.put('http://localhost:8080/exploretrades?tokenId=' + this.userToken, JSON.stringify(jsonBody)).toPromise().then(
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
    this.showFilterTrade = false;
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

  filterTrade(name: string, supertype: string,type: string,subtype: string,rarity: string,wishlist: boolean,friendlist: boolean) {
    const filterData = [];
    filterData.push("%"+name+"%");
   
    if(supertype=="All supertype") filterData.push("%");
    else if(supertype.charAt(0)=='P'){
      filterData.push("Pokemon")
    }
    else{
      filterData.push("%"+supertype)
    }
    if(type=="All Types") filterData.push("%");
    else{
      filterData.push(type)
    }
    
    if(subtype=="All Subtypes") filterData.push("%");
    else{
      filterData.push("%"+subtype)
    }
    if(rarity=="All Rarities") filterData.push("%");
    else{
      filterData.push("%"+rarity)
    }
    if(wishlist) filterData.push("true");
    else{
      filterData.push("false");
    }
    if(friendlist) filterData.push("true");
    else{
      filterData.push("false");
    }    
    try {
      this.http.put('http://localhost:8080/exploretrades?tokenId=' + this.userToken, JSON.stringify(filterData)).toPromise().then(
        data => {
          this.trades = [];
          Object.assign(this.trades, data);
          this.showTrades = false;
          this.showFilterTrade = true;
          this.showPostOffer = false;
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

  onCheckboxChange(state: Boolean){
    if(!state) this.wishlistBoolean=true;
    if(state) this.wishlistBoolean=false;
  }

  notify(value){
    console.log(value)
  }

}
