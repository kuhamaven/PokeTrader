import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errorString: string="";
  alertError:boolean=false;

  constructor(private authSvc: AuthService, private router: Router, private storage: AngularFireStorage,private http:HttpClient) { 
  }

  ngOnInit(): void {
  }
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  onUpload(e){
    //console.log("subir",e);
    const id = Math.random().toString(36).substring(2);
    const file=e.target.files[0];
    const filePath= `uploads/profile_${id}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    this.uploadPercent=task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage= ref.getDownloadURL())).subscribe();
  }
  
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  async onRegister(){
    const { email, password } = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password,this.errorString);
  
      if(this.errorString.length>0){
        this.alertError=true;
      }
      if(user){ 
        const url =(await this.urlImage.toPromise()).toString();
        const userData=[email,user.user.uid,url]
        user.user.getIdToken().then(
          result => {
            this.http.put('http://localhost:8080/register?tokenId='+result,JSON.stringify(userData)).toPromise().then( data => {
          }
        )      
        }
          )
          .catch(x => console.log(x))
        

        this.router.navigate(['/home']);
      }
    }
    catch(error){
      this.errorString=error.toString();
      this.alertError=true;
    }
  }

  passwordValidator(control: FormControl): { [s: string]: boolean } {
    let l = control.value.toString().trim().length;
    if (l > 0 && l < 6) {
      return {invalid: true};
    }
      return null;
    }

    turnOffError(){
      this.alertError=false;
      this.errorString="";
    }

}
