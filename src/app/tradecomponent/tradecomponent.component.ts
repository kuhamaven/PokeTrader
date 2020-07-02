import { Component, OnInit } from '@angular/core';
import { Trade } from '../models/trade.model';
import { Input, HostBinding } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-tradecomponent',
  templateUrl: './tradecomponent.component.html',
  styleUrls: ['./tradecomponent.component.scss']
})
export class TradecomponentComponent implements OnInit {
  @Input() trade: Trade;
  @Input() loadBids: any;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  clicked: boolean = false;
  tradeId: Number = 0;
  userToken: string;



  constructor(private http: HttpClient, private router: Router, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.afAuth.currentUser.then(
      user => {
        user.getIdToken().then(
          result => {
            this.userToken = result;
          }
        )
      }
    )
  }

  hostVerification(tradeId: number) {
    const tradeData = [];
    tradeData.push(tradeId);

    try {
      this.http.put('http://localhost:8080/hostverification?tokenId=' + this.userToken, JSON.stringify(tradeData)).toPromise().then(
        data => {
          this.router.navigate(['/profile']);
        }
      )
    }
    catch (error) {
      console.log(error);
    }
  }

}
