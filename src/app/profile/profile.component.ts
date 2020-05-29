import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth/services/auth.service';
import {Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[ AuthService]
})
export class ProfileComponent implements OnInit {
public user$:Observable<any>=this.authService.afAuth.user;
public currentUser: any;
public photoURL: string;
public email: string;
cards: Card[] = [];
public userData: string[] = [];


constructor( private http: HttpClient, private authService: AuthService) { 
}


  ngOnInit() {
    this.authService.afAuth.currentUser.then(
      user => {
        this.email = user.email;
        console.log("El email es: "+this.email);
        this.userData.push(this.email)
        this.loadProfile();
      }
    ) .catch(x=> console.log(x))
  }
  

  loadProfile(){
    this.http.put('http://localhost:8080/profile',JSON.stringify(this.userData)).toPromise().then(
    data => {
      console.log(data);
      this.photoURL=data.toString();
      console.log(JSON.parse(this.photoURL));
    }
  )
  .catch(x=> console.log(x))
  try {
    this.http.put('http://localhost:8080/collection',JSON.stringify(this.userData)).toPromise().then(
    data => {
      Object.assign(this.cards,data)
    }
  )
  }
  catch(error) {
    console.log(error);
  }
   
  }
  

 
}
