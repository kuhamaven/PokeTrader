import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import AdminIds from './../../../assets/AdminIds.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent{
  private adminIDList: string [] = AdminIds;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public tradeDropdown: boolean=false;


  constructor(private authSvc: AuthService, private router: Router) { }

  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch(error){
      console.log(error)
    }
    
  }

  isAdmin(uid: string): boolean {
    if(this.adminIDList.indexOf(uid)>-1) {return true};
    return false;
  }

  openDropdown(){
    if(this.tradeDropdown){
      this.tradeDropdown=false;
    }
    else{
      this.tradeDropdown=true;
    }
    return false;
  }

}
