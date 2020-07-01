import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Bid } from 'src/app/models/bid.model';

@Component({
  selector: 'app-bidcomponent',
  templateUrl: './bidcomponent.component.html',
  styleUrls: ['./bidcomponent.component.scss']
})
export class BidcomponentComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-4';
@Input() bid:Bid;
@Input() onAccept: any;
@Input() onDecline: any;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
