import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';
import AdminIds from './../../assets/AdminIds.json';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';




@Component({
  selector: 'app-cardset',
  templateUrl: './cardmaker.component.html',
  styleUrls: ['./cardmaker.component.scss'],
  providers: [AuthService]

})
export class CardmakerComponent implements OnInit {
  adminIDList: string[] = AdminIds;
  cardData: string[]=[];
  public user$: Observable<any> = this.authSvc.afAuth.user;


  constructor(  private http: HttpClient, private authSvc: AuthService) {
    
  }

  ngOnInit(): void {
  }

  addCard(uid: string,nombre: string , url: string, id: string, type: string, variant: string):boolean {
    if(!this.isAdmin(uid)){ alert ("Unauthorized User")}
   this.cardData=[];
   this.cardData.push(nombre);
   this.cardData.push(url);
   this.cardData.push(id);
   this.cardData.push(type);
   this.cardData.push(variant);
   
      this.http.put('http://localhost:8080/registercard',JSON.stringify(this.cardData)).toPromise().then( data => {
      
  }
    )
    .catch(x => console.log(x))
  
    return false;
  }

  isAdmin(uid: string): boolean {
    if(this.adminIDList.indexOf(uid)>-1) {return true};
    return false;
  }

}
