
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../models/card.model';


@Component({
  selector: 'app-searchuser-card',
  templateUrl: './searchuser-card.component.html',
  styleUrls: ['./searchuser-card.component.scss']
})
export class SearchuserCardComponent implements OnInit {
  @Input() card: Card;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
