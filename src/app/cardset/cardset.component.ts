import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
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
  cards: Card[] = [];
  userToken: string;
  cardsIDList: string[] = [];
  public user$: Observable<any> = this.authSvc.afAuth.user;


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
      let url = 'http://localhost:8080/card?tokenId=' + this.userToken;
      this.http.get(url).toPromise().then(
        data => {
          Object.assign(this.cards, data)
        }
      )
    }
    catch (error) {
      console.log(error);
    }

  }

  addNewCardToCollection = (id: string) => {
    if (this.cardsIDList.indexOf(id) < 0) {
      this.cardsIDList.push(id);
      this.alert = true;
    }
  }

  setCards(email: string) {
    let url = 'http://localhost:8080/cardmaker?tokenId=' + this.userToken;
    const cardsIDListWithMail = [email].concat(this.cardsIDList);
    this.http.put(url, JSON.stringify(cardsIDListWithMail)).toPromise().then(data => {
      this.router.navigate(['/profile']);
    })
      .catch(x => console.log(x))
  }

  closeAlert() {
    this.alert = false;
  }


}
