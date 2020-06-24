import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-biddercard',
  templateUrl: './biddercard.component.html',
  styleUrls: ['./biddercard.component.scss']
})
export class BiddercardComponent implements OnInit {
  @Input() card: Card;
  @Input() setBidCard;
  clicked:boolean=false;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {  }

  ngOnInit(): void {
  }
  

  

}
