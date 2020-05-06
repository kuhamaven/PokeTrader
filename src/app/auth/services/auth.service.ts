import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
@ViewChild('imageUser') inputImageUser: ElementRef;
  async login(email:string, password:string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
    return result;
  }
    catch(error){
      console.log(error);
    }
  }

  async register(email: string, password: string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    }
    catch(error){
      if(error.code=='auth/email-already-in-use') { alert(error.message)};
      if(error.code=='auth/weak-password') { alert(error.message)};
    }

  
  }
/* onAddUser(){
  this.authService.register(this.email,this.password);
  .then(res()=>{
    this.authService.isAuth().subscribe(
      user=> if(user){
        user.updateProfile({
          displayName: '';
          photoUrl:this.inputImageUser.nativeElement.value

        }).then(function(){
          console.log("USER UPDATED");
        }).catch(function(error){
          console.log('error',error);
        });

        }
      }),
  }).catch(err=> console.log('err',err.message));
} */
  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
  }

}
