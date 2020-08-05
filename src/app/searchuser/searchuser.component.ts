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
  friends: User[] = [];
  receivedRequests: User[]=[];
  pendingRequests: User[]=[];
  public userEmail: string[] = [];
  public databaseUser: User = new User();
  public alertOn: boolean = false;
  public profileOn: boolean = false;
  userToken: string;
  public  reqSent: boolean=false;
  public fl: boolean=true;// friend list
  public pr: boolean=false;/// pending requests
  public rr: boolean=false;// recieved requests
  public su: boolean=false;//search users

  constructor(private http: HttpClient, private route: ActivatedRoute, private authSvc: AuthService, private router: Router) {
    this.respondRequest = this.respondRequest.bind(this);
    this.authSvc.afAuth.currentUser.then(
      user => {
        user.getIdToken().then(
          result => {
            this.userToken = result;
            this.userEmail.push(this.route.snapshot.params.userEmail);
            if (this.route.snapshot.params.userEmail) {
              this.loadProfile();
              this.changeToSearchUsers()
            }
            else{
          this.loadFriendList();
          this.loadReceivedRequests();
          this.loadPendingRequests();
            }
          }
        )
      }
    )
    
  }

  ngOnInit(): void {}

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

  sendFriendRequest(friendEmail: string){
  var array:string[]=[]
  array.push(friendEmail);
    try {
      this.http.put('http://localhost:8080/friendrequest?tokenId=' + this.userToken, JSON.stringify(array)).toPromise().then(
        data => {
         this.reqSent=true;
         this.loadPendingRequests();
        }
      )
    }
    catch (error) {
      console.log(error);
    }
    return false; 

  }


  loadFriendList(){
    this.friends=[];
    try {
      this.http.get('http://localhost:8080/friend?tokenId='+this.userToken).toPromise().then(
        data => {
          Object.assign(this.friends, data)
        }
      )
    }
    catch (error) {
      console.log(error);
    }
  }

  changeToSearchUsers(){
    this.su=true;
    this.rr=false;
    this.pr=false;
    this.fl=false;
  }

  changeToFriendlist(){
    this.su=false;
    this.rr=false;
    this.pr=false;
    this.fl=true;

  }

  changeToPending(){
    this.su=false;
    this.rr=false;
    this.pr=true;
    this.fl=false;

  }

  changeToReceivedRequests(){
    this.su=false;
    this.rr=true;
    this.pr=false;
    this.fl=false;

  }

  respondRequest(userEmail: string,response:boolean){
    var array:string[]=[]
    array.push(userEmail);
    array.push(response.toString());
    try {
      this.http.put('http://localhost:8080/frr?tokenId=' + this.userToken, JSON.stringify(array)).toPromise().then(
        data => {

        this.loadReceivedRequests();
        this.loadFriendList();
        }
      )
    }
    catch (error) {
      console.log(error);
    }
    return false; 

  }

  loadReceivedRequests(){
    this.receivedRequests=[];
    var array:string[]=[]
    try {
      this.http.put('http://localhost:8080/receivedrequest?tokenId='+this.userToken,JSON.stringify(array)).toPromise().then(
        data => {
          Object.assign(this.receivedRequests, data)
        }
      )
    }
    catch (error) {
      console.log(error);
    }

  }

  loadPendingRequests(){
    this.pendingRequests=[];
    var array:string[]=[]
    try {
      this.http.put('http://localhost:8080/pendingrequest?tokenId='+this.userToken,JSON.stringify(array)).toPromise().then(
        data => {
          Object.assign(this.pendingRequests, data)
        }
      )
    }
    catch (error) {
      console.log(error);
    }

  }

  closeAlertReqSent(){
    this.reqSent=false;
  }



}
