import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Trade } from '../models/trade.model';
import { Bid } from '../models/bid.model';



@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.scss'],
  providers: [AuthService]
})

export class MybidsComponent implements OnInit {
  public alert: boolean=false;
  bids: Bid[] = [];
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public userEmail: string[] = [];

  constructor(private http: HttpClient, private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {

    this.authSvc.afAuth.currentUser.then(
      user => {
        this.userEmail.push(user.email)
        console.log(this.userEmail)
        this.loadBids();
      }
    ) .catch(x=> console.log(x))
    }
    
    loadBids(){
      try {
        this.http.put('http://localhost:8080/mybids',JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          console.log(data);
          Object.assign(this.bids,data);
        }
      )
      }
      catch(error) {
        console.log(error);
      }
    }

}
