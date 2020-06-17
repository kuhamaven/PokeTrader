import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Trade } from '../models/trade.model';



@Component({
  selector: 'app-mytrades',
  templateUrl: './mytrades.component.html',
  styleUrls: ['./mytrades.component.scss'],
  providers: [AuthService]
})
export class MytradesComponent implements OnInit {
  public alert: boolean=false;
  trades: Trade[] = [];
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public userEmail: string[] = [];

  constructor(private http: HttpClient, private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {

    this.authSvc.afAuth.currentUser.then(
      user => {
        this.userEmail.push(user.email)
        console.log(this.userEmail)
        this.loadTrades();
      }
    ) .catch(x=> console.log(x))
    }
    
    loadTrades(){
      try {
        this.http.put('http://localhost:8080/mytrades',JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          console.log(data);
          Object.assign(this.trades,data);
        }
      )
      }
      catch(error) {
        console.log(error);
      }
    }
    
}
