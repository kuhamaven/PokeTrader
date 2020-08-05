import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from '../../models/card.model';


@Component({
  selector: 'app-popularcard',
  templateUrl: './popularcard.component.html',
  styleUrls: ['./popularcard.component.scss']
})
export class PopularcardComponent implements OnInit {
  @Input() card: Card;
  @HostBinding('attr.class') cssClass = 'col-md-3';
  constructor() { }

  ngOnInit(): void {
  }

}