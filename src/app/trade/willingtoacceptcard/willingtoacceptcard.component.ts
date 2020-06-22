import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-willingtoacceptcard',
  templateUrl: './willingtoacceptcard.component.html',
  styleUrls: ['./willingtoacceptcard.component.scss']
})
export class WillingtoacceptcardComponent implements OnInit {
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
