import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  errorString: string="";
  alertError:boolean=false;

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const { email, password } = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password,this.errorString);
      if(this.errorString.length>0){
        this.alertError=true;
      }
      if (user){
        this.router.navigate(['/home']);
      }
    }
    catch(error){
      this.errorString=error.toString();
      this.alertError=true;
      
    }
    
  }

  turnOffError(){
    this.alertError=false;
    this.errorString="";
  }

}
