import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-friendcard',
  templateUrl: './friendcard.component.html',
  styleUrls: ['./friendcard.component.scss']
})
export class FriendcardComponent implements OnInit {
@Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
