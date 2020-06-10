import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth/services/auth.service';
import {Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[ AuthService]
})
export class ProfileComponent implements OnInit {
public user$:Observable<any>=this.authService.afAuth.user;
public currentUser: any;
public userData: string[]=[];
cards: Card[] = [];
public userEmail: string[] = [];
public databaseUser:User=new User();


constructor( private http: HttpClient, private authService: AuthService) { 
}


  ngOnInit() {
    this.authService.afAuth.currentUser.then(
      user => {
        this.userEmail.push(user.email)
        this.loadProfile();
      }
    ) .catch(x=> console.log(x))
  }
  

  loadProfile(){
    this.http.put('http://localhost:8080/profile',JSON.stringify(this.userEmail)).toPromise().then(
    data => {
  
      Object.assign(this.databaseUser,data);
    
    }
  )
  .catch(x=> console.log(x))
    
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

  closeAlert():void{
    this.databaseUser.recentlyModified=false;
  }
  

 
}
