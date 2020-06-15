import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth/services/auth.service';
import {Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { User } from '../models/user.model';


@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss']
})
export class SearchuserComponent implements OnInit {
public userData: string[]=[];
cards: Card[] = [];
public userEmail: string[] = [];
public databaseUser:User=new User();
public alertOn: boolean=false;
public profileOn:boolean=false;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loadProfile(){
    
    this.http.put('http://localhost:8080/profile',JSON.stringify(this.userEmail)).toPromise().then(
    data => {

      Object.assign(this.databaseUser,data); 
      if(this.databaseUser.email=='null field'){
        this.alertOn=true;
        this.profileOn=false;
      }
      else{
      this.loadCards();

      }
    
    }
  )
  .catch(x=> console.log(x))
  }
 
  loadCards(){
    this.alertOn=false;
    this.profileOn=true;
    try {
    this.http.put('http://localhost:8080/collection',JSON.stringify(this.userEmail)).toPromise().then(
    data => {
      Object.assign(this.cards,data)
    }
  )
  }
  catch(error) {
    console.log(error);
  }
}
    
  

  searchUser(email:string){
    this.cards=[];
    this.databaseUser=new User();
    this.setUserByEmail(email) ;
    return false;
  }

  setUserByEmail(email:string){
    this.userEmail=[];
    this.userEmail.push(email);
    this.loadProfile();

}

closeAlert(){
  this.alertOn=false;
}
}
