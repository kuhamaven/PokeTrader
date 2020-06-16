import { Component, OnInit } from '@angular/core';
import { Trade } from '../models/trade.model';
import { Input, HostBinding } from '@angular/core';
import {Card} from '../models/card.model';

@Component({
  selector: 'app-tradecomponent',
  templateUrl: './tradecomponent.component.html',
  styleUrls: ['./tradecomponent.component.scss']
})
export class TradecomponentComponent implements OnInit {
  @Input() trade: Trade;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() { }

  ngOnInit(): void {
  }

}
