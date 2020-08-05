import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
@ViewChild('imageUser') inputImageUser: ElementRef;
  async login(email:string, password:string,errorString:string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
    return result;
  }
    catch(error){
      errorString=error.message
      alert(error.message);
    }
  }

  async register(email: string, password: string,errorString:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    }
    catch(error){
      errorString=error.message;
     alert(error.message);
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
