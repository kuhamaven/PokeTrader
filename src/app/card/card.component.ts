import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  selected: boolean = false;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {  }

  ngOnInit(): void {
  }
  setSelected(){
	  this.selected = !this.selected;
	}
	isSelected(){
	  return this.selected;
    }

}
