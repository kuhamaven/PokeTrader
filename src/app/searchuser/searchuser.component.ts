import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss'],
  providers: [AuthService]

})
export class SearchuserComponent implements OnInit {
  public userData: string[] = [];
  cards: Card[] = [];
  public userEmail: string[] = [];
  public databaseUser: User = new User();
  public alertOn: boolean = false;
  public profileOn: boolean = false;
  userToken: string;


  constructor(private http: HttpClient, private route: ActivatedRoute, private authSvc: AuthService, private router: Router) {
    this.authSvc.afAuth.currentUser.then(
      user => {
        user.getIdToken().then(
          result => {
            this.userToken = result;
            this.userEmail.push(this.route.snapshot.params.userEmail);
            if (this.route.snapshot.params.userEmail) {
              this.loadProfile();
            }
          }
        )
      }
    )
  }

  ngOnInit(): void { }

  loadProfile() {
    this.http.put('http://localhost:8080/profile?tokenId=' + this.userToken, JSON.stringify(this.userEmail)).toPromise().then(
      data => {
        Object.assign(this.databaseUser, data);
        if (this.databaseUser.email == 'null field') {
          this.alertOn = true;
          this.profileOn = false;
        }
        else {
          this.loadCards();
        }
      }
    )
      .catch(x => console.log(x))
  }

  loadCards() {
    this.alertOn = false;
    this.profileOn = true;
    try {
      this.http.put('http://localhost:8080/collection?tokenId=' + this.userToken, JSON.stringify(this.userEmail)).toPromise().then(
        data => {
          Object.assign(this.cards, data)
        }
      )
    }
    catch (error) {
      console.log(error);
    }
  }

  searchUser(email: string) {
    this.cards = [];
    this.databaseUser = new User();
    this.setUserByEmail(email);
    return false;
  }

  setUserByEmail(email: string) {
    this.userEmail = [];
    this.userEmail.push(email);
    this.loadProfile();
  }

  closeAlert() {
    this.alertOn = false;
  }

}
