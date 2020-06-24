import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Trade } from '../models/trade.model';
import { Bid } from '../models/bid.model';
import { emit } from 'process';



@Component({
  selector: 'app-mytrades',
  templateUrl: './mytrades.component.html',
  styleUrls: ['./mytrades.component.scss'],
  providers: [AuthService]
})
export class MytradesComponent implements OnInit {
  public alert: boolean=false;
  trades: Trade[] = [];
  bids: Bid[]=[];
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public userEmail: string[] = [];
  showTrade:boolean=false;
  showBids:boolean=false;
  accept:boolean=false;
  decline:boolean=false;
  bidderMailRejected:string='';
  bidderMailAccepted:string='';

  constructor(private http: HttpClient, private authSvc: AuthService,private router: Router) { 
    this.loadBids=this.loadBids.bind(this);
    this.onDecline=this.onDecline.bind(this);
    this.onAccept=this.onAccept.bind(this);
  }

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
          this.showTrade=true;
        }
      )
      }
      catch(error) {
        console.log(error);
      }
    }

    navigateToCreateTrade(){
      this.router.navigate(['/tradecreator']);
    }

    loadBids(tid:Number){
      const tidArray=[];
      tidArray.push(tid);
      try {
        this.http.put('http://localhost:8080/tradebids',JSON.stringify(tidArray)).toPromise().then(
        data => {
          console.log(data);
          Object.assign(this.bids,data);
          this.showBids=true;
          this.showTrade=false;
        }
      )
      }
      catch(error) {
        console.log(error);
      }
    }

    onAccept(id:number,bidderEmail:string){
      this.bidderMailAccepted=bidderEmail;
      this.accept=true;
      const acceptData = [];
      acceptData.push(this.userEmail[0]);
      acceptData.push(id);
        try {
          this.http.put('http://localhost:8080/onaccept',JSON.stringify(acceptData)).toPromise().then(
          data => {
            this.showBids=false;
            this.showTrade=true;
          }
        )
        }
        catch(error) {
          console.log(error);
        }
    }

   onDecline(id:number,bidderEmail:string){
     this.bidderMailRejected=bidderEmail;
     this.decline=true;
      const declineData = [];
      declineData.push(this.userEmail[0]);
      declineData.push(id);
        try {
          this.http.put('http://localhost:8080/ondecline',JSON.stringify(declineData)).toPromise().then(
          data => {
            for(let bid of this.bids){
              if(bid.id==id){
                this.bids.splice(this.bids.indexOf(bid),1);
              }
            }
          }
        )
        }
        catch(error) {
          console.log(error);
        }
    }

    navigateToMyTrades(){
      this.showTrade=true;
      this.showBids=false;
      this.bids=[];
    }

    closeAccept(){
      this.accept=false;
    }

    closeDecline(){
      this.decline=false;
    }
}
