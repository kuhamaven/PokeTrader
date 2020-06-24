import { Component, OnInit } from '@angular/core';
import { Trade } from '../../models/trade.model';
import { Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tradecomponent',
  templateUrl: './tradecomponent.component.html',
  styleUrls: ['./tradecomponent.component.scss']
})
export class TradecomponentComponent implements OnInit {
  @Input() trade: Trade;
  @Input() postOffer: any;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
