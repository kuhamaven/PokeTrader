import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-requestcard',
  templateUrl: './requestcard.component.html',
  styleUrls: ['./requestcard.component.scss']
})
export class RequestcardComponent implements OnInit {
  @Input() user: User;
  @Input() respondRequest;
  @Input() loadProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
