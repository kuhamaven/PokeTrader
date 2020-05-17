import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth/services/auth.service';
import {Observable} from 'rxjs';

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
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser=this.authService.afAuth.currentUser;
    this.photoURL=this.currentUser.photoURL;
    console.log(this.photoURL);
  }

  async setPhoto(url: string){
    try{
      var userToAlter = this.authService.afAuth.currentUser;
      console.log((await userToAlter).photoURL, 'before change');
      (await userToAlter).updateProfile({
        photoURL: url
      }).then(function(){
        console.log('Done!');
      })
    }
    catch(error){

    }
  }

}
