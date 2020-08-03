import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import {Cardarray} from '../models/cardarray.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cardset',
  templateUrl: './cardset.component.html',
  styleUrls: ['./cardset.component.scss'],
  providers: [AuthService]

})
export class CardsetComponent implements OnInit {
  public alert: boolean = false;
  public alertWishlist: boolean = false;
  cards: Cardarray= new Cardarray;
  userToken: string;
  cardsToAdd: Card[] = [];
  wishlistCards: Card[] = [];
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public start:boolean=false;


  constructor(private http: HttpClient, private authSvc: AuthService, private router: Router) {
    this.addNewCardToCollection = this.addNewCardToCollection.bind(this);

  }

  ngOnInit(): void {
    this.authSvc.afAuth.currentUser.then(
      user => {
        user.getIdToken().then(
          result => {
            this.userToken = result;
            this.loadCards();
          }
        )
      }
    )
  }

  loadCards() {
    try {
     
      let url = 'https://api.pokemontcg.io/v1/cards';
      this.http.get(url).toPromise().then(
        data => {
       Object.assign(this.cards,data);
 
      let holi: string[]=['a','b','c','d','e','f','g'];
        console.log(this.cards)
      
        console.log(this.cards)
        console.log(holi)
        this.start=true;

        }
      )
    }
    catch (error) {
      console.log(error);
    }

  }


  loadCardsWithFilter(name: string,type:string,subtype:string,supertype:string,rarity:string) {
    this.start=false
    if(type=='All Types'){
      type='';
    }
    if(subtype=='All Subtypes'){
      subtype='';
    }
    if(supertype=='All Supertypes'){
      supertype='';
    }
    if(rarity=='All Rarities'){
      rarity='';
    }
    try {
     
      let url = 'https://api.pokemontcg.io/v1/cards'+'?name='+name+'&types='+type+'&subtype='+subtype+'&supertype'+supertype+'&rarity='+rarity;
      this.http.get(url).toPromise().then(
        data => {
       Object.assign(this.cards,data);
        this.start=true;

        }
      )
    }
    catch (error) {
      console.log(error);
    }

  }

  addNewCardToCollection = (card: Card) => {
    if (this.cardsToAdd.indexOf(card) < 0) {
      this.cardsToAdd.push(card);
      this.alert = true;
    }
  }
  addNewCardToWishlist = (card: Card) => {
    if (this.wishlistCards.indexOf(card) < 0) {
      this.wishlistCards.push(card);
      this.alertWishlist = true;
    }
  }



  setCards(email: string) {


      let url2 = 'http://localhost:8080/wishlistmaker?tokenId=' + this.userToken;
    this.http.put(url2, JSON.stringify(this.wishlistCards)).toPromise().then(data => {
     
      let url = 'http://localhost:8080/cardmaker?tokenId=' + this.userToken;
      this.http.put(url, JSON.stringify(this.cardsToAdd)).toPromise().then(data => {
        this.router.navigate(['/profile']);  
      })
        .catch(x => console.log(x))
    })
      .catch(x => console.log(x))  
  }

  closeAlert() {
    this.alert = false;
  }
  closeAlertWishlist() {
    this.alertWishlist = false;
  }


}
