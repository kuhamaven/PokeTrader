import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cardset',
  templateUrl: './cardset.component.html',
  styleUrls: ['./cardset.component.scss']
})
export class CardsetComponent implements OnInit {
  cards: Card[] = [];

  constructor( 
    private http: HttpClient
  ) { 
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

}
