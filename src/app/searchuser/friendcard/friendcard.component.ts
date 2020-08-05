import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-friendcard',
  templateUrl: './friendcard.component.html',
  styleUrls: ['./friendcard.component.scss']
})
export class FriendcardComponent implements OnInit {
@Input() user: User;
@Input() loadProfile;
@HostBinding('attr.class') cssClass = 'col-md-12';

  constructor() { }

  ngOnInit(): void {
  }

}
