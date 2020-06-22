import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-hostcard',
  templateUrl: './hostcard.component.html',
  styleUrls: ['./hostcard.component.scss']
})
export class HostcardComponent implements OnInit {
  @Input() card: Card;
  @Input() setSelected;
  selected: boolean = false;
  clicked:boolean=false;
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
