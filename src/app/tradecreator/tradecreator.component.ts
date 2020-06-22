import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-tradecreator',
  templateUrl: './tradecreator.component.html',
  styleUrls: ['./tradecreator.component.scss'],
  providers: [AuthService]
})
export class TradecreatorComponent implements OnInit {

alert: boolean=false;
public hostCollection: Card[]=[];
public initialized: boolean=false;
public collectionInitialized: boolean=false;
public newTradeData: string[] = [];
public conditionSelector: boolean=false;
public wholeCardset: Card[]=[];
public showCardset: boolean=false;
public error:boolean=false;
public confirm:boolean=false;

  constructor(private http: HttpClient, private authSvc: AuthService,private router: Router) {
    this.selectHostCard = this.selectHostCard.bind(this);
    this.authSvc.afAuth.currentUser.then(
      user => {
        const firebasemail = user.email;
        this.newTradeData.push(firebasemail);
        this.initialized=true;
        this.loadCollection();
      }
    ) .catch(x=> console.log(x))
  }

  ngOnInit(): void {}

  loadCollection(){
    try {
      this.http.put('http://localhost:8080/collection',JSON.stringify(this.newTradeData)).toPromise().then(
      data => {
        Object.assign(this.hostCollection,data)
        this.collectionInitialized=true;
      }
    )
    }
    catch(error) {
      console.log(error);
    }
  }


  createTrade(){
    this.alert=true;
      this.http.put('http://localhost:8080/createtrade',JSON.stringify(this.newTradeData)).toPromise().then( data => { 
        this.alert=true;
    this.router.navigate(['/mytrades']);
      }
    )
    .catch(x => console.log(x))
    
    return false;
  }

  closeAlert(){
    this.alert=false;
  }

  selectHostCard = (id: string) => {
    this.newTradeData.push(id);
    this.collectionInitialized=false;
    this.conditionSelector=true;
  }

  setCondition(condition: string){
    this.newTradeData.push(condition);
    this.conditionSelector=false;
    this.loadCardset();
    return false;
  }

  selectWTACard = (id: string) => {
    if(this.newTradeData[1]==id){
      this.error=true;
      return false;
    }
    if(this.newTradeData.indexOf(id)<0){
    this.newTradeData.push(id);
    console.log(this.newTradeData);
    this.confirm=true;
    }
  }

  loadCardset(){
    try {
      this.http.get('http://localhost:8080/card').toPromise().then(
      data => {
        Object.assign(this.wholeCardset,data)
      }
    )
    }
    catch(error) {
      console.log(error);
    }
    this.showCardset=true;

  }

  closeError(){
    this.error=false;
  }

  closeConfirm(){
    this.confirm=false;
  }
}
