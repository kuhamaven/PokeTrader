import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import {MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';



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


  constructor( private http: HttpClient, private authSvc: AuthService,private _snackBar: MatSnackBar,private router: Router) { 
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
    this.cardsIDList.push(id);
    this.openSnackBar('Card Selected!','OK')
    }
  }

  setCards(email: string){
    this.authSvc.afAuth.currentUser.then(
        user => {
          user.getIdToken().then(
            result => {
              let userToken = result;
            }
          )
        }
      )
    const cardsIDListWithMail = [email].concat(this.cardsIDList);
      this.http.put('http://localhost:8080/cardmaker',JSON.stringify(cardsIDListWithMail)).toPromise().then( data => {
     
  }
    )
    .catch(x => console.log(x))
    this.openSnackBar('Card(s) Added Succesfully!','OK')
    this.router.navigate(['/profile']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
