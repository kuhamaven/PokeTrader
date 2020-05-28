import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth/services/auth.service';
import {Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';

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


constructor( private http: HttpClient, private authService: AuthService) { 
  
}


  ngOnInit() {
    this.authService.afAuth.currentUser.then(
      user => {
        this.email = user.email;
        console.log(this.email);
      }
    ) .catch(x=> console.log(x))
  
    this.http.put('http://localhost:8080/profile',this.email).toPromise().then(
    data => {
      Object.assign(this.photoURL,data);
      console.log(this.photoURL);
    }
  )
  .catch(x=> console.log(x))
   
  }

 
}
