import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-pendingrequestcard',
  templateUrl: './pendingrequestcard.component.html',
  styleUrls: ['./pendingrequestcard.component.scss']
})
export class PendingrequestcardComponent implements OnInit {
  @Input() user: User;
  @Input() loadProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
