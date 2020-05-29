import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';
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

  addNewCardToCollection = (id: string) => {
    if(this.cardsIDList.indexOf(id)<0){
      console.log(id);
    this.cardsIDList.push(id);
    }
  }

  setCards(email: string){
    this.authSvc.afAuth.currentUser.then(
        user => {
          user.getIdToken().then(
            result => {
              let userToken = result;
              console.log(userToken);
            }
          )
        }
      )
    const cardsIDListWithMail = [email].concat(this.cardsIDList);
    console.log(JSON.stringify(cardsIDListWithMail));
      this.http.put('http://localhost:8080/cardmaker',JSON.stringify(cardsIDListWithMail)).toPromise().then( data => {
      console.log(data);
  }
    )
    .catch(x => console.log(x))
  }


}
