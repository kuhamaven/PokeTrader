import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';
import AdminIds from './../../assets/AdminIds.json';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';




@Component({
  selector: 'app-cardset',
  templateUrl: './cardset.component.html',
  styleUrls: ['./cardset.component.scss'],
  providers: [AuthService]

})
export class CardsetComponent implements OnInit {
  cards: Card[] = [];
  cardsIDList: string[] = [];
  adminIDList: string[] = AdminIds;
  public user$: Observable<any> = this.authSvc.afAuth.user;


  constructor( 
    private http: HttpClient, private authSvc: AuthService
  ) { 
    this.addNewCardToCollection = this.addNewCardToCollection.bind(this);
    //this.cards = cardsList;
    try {
      this.http.get('http://localhost:8080/card').toPromise().then(
      data => {
        Object.assign(this.cards,data)
      }
    )
    }
    catch(error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

  addCard(nombre: string , url: string, id: number, type: string, variant: string):boolean {
    this.cards.push(new Card(nombre,url,id,type,variant));
    return false;
  }

  isAdmin(uid: string): boolean {
    if(this.adminIDList.indexOf(uid)>-1) {return true};
    return false;
  }

  addNewCardToCollection = (id: string) => {
    if(this.cardsIDList.indexOf(id)<0){
    this.cardsIDList.push(id);
    }
  }

  setCards(){
    console.log(this.cardsIDList); 
    console.log(JSON.stringify(this.cardsIDList));
    this.http.post('http://localhost:8080/cardmaker',JSON.stringify(this.cardsIDList)).toPromise().then( data => {
      console.log(data);
      }
    )
  }

}
