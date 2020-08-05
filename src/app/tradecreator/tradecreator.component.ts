import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';
import { Cardarray } from '../models/cardarray.model';

@Component({
  selector: 'app-tradecreator',
  templateUrl: './tradecreator.component.html',
  styleUrls: ['./tradecreator.component.scss'],
  providers: [AuthService]
})
export class TradecreatorComponent implements OnInit {

  alert: boolean = false;
  public hostCollection: Card[] = [];
  public initialized: boolean = false;
  public collectionInitialized: boolean = false;
  public newTradeData: Card[] = [];
  public condition:string='';
  public conditionSelector: boolean = false;
  public wholeCardset: Cardarray = new Cardarray();
  public showCardset: boolean = false;
  public error: boolean = false;
  public confirm: boolean = false;
  public start: boolean = false;
  public firebaseEmail:string[]=[];
  public hostCardId:string='';
  userToken: string;

  constructor(private http: HttpClient, private authSvc: AuthService, private router: Router) {
    this.selectHostCard = this.selectHostCard.bind(this);

    this.authSvc.afAuth.currentUser.then(
      user => {
        user.getIdToken().then(
          result => {
            this.userToken = result;
            const firebasemail = user.email;
            this.firebaseEmail.push(firebasemail);

            this.initialized = true;
            this.loadCollection();
          }
        )

      }
    ).catch(x => console.log(x))
  }

  ngOnInit(): void { }

  loadCollection() {
    try {
      this.http.put('http://localhost:8080/collection?tokenId=' + this.userToken, JSON.stringify(this.firebaseEmail)).toPromise().then(
        data => {
          Object.assign(this.hostCollection, data)
          this.collectionInitialized = true;
        }
      )
    }
    catch (error) {
      console.log(error);
    }
  }


  createTrade() {
    this.alert = true;
    console.log(this.newTradeData)
    this.http.put('http://localhost:8080/createtrade?tokenId=' + this.userToken+"&condition="+this.condition+"&hostcardid="+this.hostCardId, JSON.stringify(this.newTradeData)).toPromise().then(data => {
      this.alert = true;
      this.router.navigate(['/mytrades']);
    }
    )
      .catch(x => console.log(x))

    return false;
  }

  closeAlert() {
    this.alert = false;
  }

  selectHostCard = (card:Card) => {
    this.hostCardId=card.id;
    this.collectionInitialized = false;
    this.conditionSelector = true;
  }

  setCondition(condition: string) {
    this.condition=condition;
    this.conditionSelector = false;
    this.loadCards();
    return false;
  }

  selectWTACard = (card: Card) => {
    if (this.newTradeData[0] == card) {
      this.error = true;
      return false;
    }
    if (this.newTradeData.indexOf(card) < 0) {
      this.newTradeData.push(card);
      this.confirm = true;
    }
  }

  loadCardset(name: string,type:string,subtype:string,supertype:string,rarity:string) {
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
       
        let url = 'https://api.pokemontcg.io/v1/cards'+'?name='+name+'&types='+type+'&subtype='+subtype+'&supertype'+supertype+'&rarity='+rarity+'&pageSize=300';
        this.http.get(url).toPromise().then(
          data => {
            this.wholeCardset.cards=[];
         Object.assign(this.wholeCardset,data);
         console.log(this.wholeCardset)
          this.start=true;
  
          }
        )
      }
      catch (error) {
        console.log(error);
      }
  
    

  }

  loadCards() {
    try {
     
      let url = 'https://api.pokemontcg.io/v1/cards';
      this.http.get(url).toPromise().then(
        data => {
       Object.assign(this.wholeCardset,data);
          console.log(this.wholeCardset);
        this.start=true;

        }
      )
    }
    catch (error) {
      console.log(error);
    }
    this.showCardset=true;

  }

  closeError() {
    this.error = false;
  }

  closeConfirm() {
    this.confirm = false;
  }
}
