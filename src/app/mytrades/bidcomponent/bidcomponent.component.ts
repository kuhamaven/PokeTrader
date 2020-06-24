import { Component, OnInit, Input } from '@angular/core';
import { Bid } from 'src/app/models/bid.model';

@Component({
  selector: 'app-bidcomponent',
  templateUrl: './bidcomponent.component.html',
  styleUrls: ['./bidcomponent.component.scss']
})
export class BidcomponentComponent implements OnInit {
@Input() bid:Bid;
@Input() onAccept: any;
@Input() onDecline: any;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
