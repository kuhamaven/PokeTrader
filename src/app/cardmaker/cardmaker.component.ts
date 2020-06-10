import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
//import cardsList from './../../assets/a.json';
import { HttpClient } from '@angular/common/http';
import AdminIds from './../../assets/AdminIds.json';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-cardset',
  templateUrl: './cardmaker.component.html',
  styleUrls: ['./cardmaker.component.scss'],
  providers: [AuthService]

})
export class CardmakerComponent implements OnInit {
  registerCardForm= new FormGroup({
    name: new FormControl(''),
    imageUrl: new FormControl(''),
    id:new FormControl(''),
    type:new FormControl(''),
    variant: new FormControl(''),

  });
  adminIDList: string[] = AdminIds;
  cardData: string[]=[];
  public user$: Observable<any> = this.authSvc.afAuth.user;
  alert: boolean=false;


  constructor(  private http: HttpClient, private authSvc: AuthService) {
    
  }

  ngOnInit(): void {
  }

  addCard():boolean {
  const { name,imageUrl,id,type,variant} = this.registerCardForm.value;
  this.cardData=[];
   this.cardData.push(name);
   this.cardData.push(imageUrl);
   this.cardData.push(id);
   this.cardData.push(type);
   this.cardData.push(variant);
   
   
      this.http.put('http://localhost:8080/registercard',JSON.stringify(this.cardData)).toPromise().then( data => {
      
  }
    )
    .catch(x => console.log(x))
    this.alert=true;
    this.registerCardForm.reset(false);
    this.alert=true;
    return false;
    
  }

  isAdmin(uid: string): boolean {
    if(this.adminIDList.indexOf(uid)>-1) {return true};
    return false;
  }

  closeAlert(){
    this.alert=false;
  }

}
