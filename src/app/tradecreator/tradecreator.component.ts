import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';
import AdminIds from './../../assets/AdminIds.json';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tradecreator',
  templateUrl: './tradecreator.component.html',
  styleUrls: ['./tradecreator.component.scss'],
  providers: [AuthService]
})
export class TradecreatorComponent implements OnInit {
public user$: Observable<any> = this.authSvc.afAuth.user;
public currentUser: any;
alert: boolean=false;
public tradeData: string[]=[];


registerTradeForm= new FormGroup({
  cardId: new FormControl(''),
  condition: new FormControl(''),
  wta:new FormControl(''),
});
  constructor(private http: HttpClient, private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {
    
  }


  createTrade(useremail: string){
    const { cardId,condition,wta} = this.registerTradeForm.value;
  this.tradeData=[];
  this.tradeData.push(useremail)
   this.tradeData.push(cardId);
   this.tradeData.push(condition);
   this.tradeData.push(wta);

   
      this.http.put('http://localhost:8080/createtrade',JSON.stringify(this.tradeData)).toPromise().then( data => {
      
  }
    )
    .catch(x => console.log(x))
    this.registerTradeForm.reset();
    this.alert=true;
    this.router.navigate(['/mytrades']);
    return false;

  }

  closeAlert(){
    this.alert=false;
  }

}
