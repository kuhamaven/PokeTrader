import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() setSelected;
  selected: boolean = false;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {  }

  ngOnInit(): void {
  }
  

  
	isSelected(){
	  return this.selected;
  }

  getID(){
    return this.card.id;
  }

}
