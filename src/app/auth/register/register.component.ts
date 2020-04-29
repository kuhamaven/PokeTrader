import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private authSvc: AuthService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  async onRegister(){
    const { email, password } = this.registerForm.value;
    //if(password.length<6) { alert('El password debe ser mayor o igual a 6 caracteres!')}
    try{
      const user = await this.authSvc.register(email, password);
      if(user){
        this.router.navigate(['/home']);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  passwordValidator(control: FormControl): { [s: string]: boolean } {
    let l = control.value.toString().trim().length;
    if (l > 0 && l < 6) {
      return {invalid: true};
    }
      return null;
    }

}
