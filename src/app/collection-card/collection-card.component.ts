import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../models/card.model';


@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss']
})
export class CollectionCardComponent implements OnInit {
  @Input() card: Card;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {  }
  ngOnInit(): void {  }
}
