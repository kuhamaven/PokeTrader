import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-cardset',
  templateUrl: './cardset.component.html',
  styleUrls: ['./cardset.component.scss']
})
export class CardsetComponent implements OnInit {
  cards: Card[];

  constructor() { 
    this.cards = [];
  }

  ngOnInit(): void {
  }

  addCard(nombre: string , url: string, type: string):boolean {
    this.cards.push(new Card(nombre,url,type));
    return false;
  }

}
