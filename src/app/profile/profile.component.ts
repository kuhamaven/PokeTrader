import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { User } from '../models/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {
  public user$: Observable<any> = this.authService.afAuth.user;
  public currentUser: any;
  public userData: string[] = [];
  cards: Card[] = [];
  public userEmail: string[] = [];
  public databaseUser: User = new User();
  customizeForm = new FormGroup({
    userName: new FormControl(''),
    bio: new FormControl(''),
    urlPhoto: new FormControl(''),
  });
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  public customizePopUp = false;
  public showCards = true;
  public showCustomize = false;
  public picture: boolean = false;
  userToken: string;


  constructor(private http: HttpClient, private authService: AuthService, private storage: AngularFireStorage) {
  }


  ngOnInit() {
    this.authService.afAuth.currentUser.then(
      user => {
        user.getIdToken().then(
          result => {
            this.userToken = result;
            this.userEmail.push(user.email)
            this.loadProfile();
          }
        )
      }
    ).catch(x => console.log(x))
  }




  loadProfile() {
    this.http.put('http://localhost:8080/profile?tokenId=' + this.userToken, JSON.stringify(this.userEmail)).toPromise().then(
      data => {

        Object.assign(this.databaseUser, data);

      }
    )
      .catch(x => console.log(x))

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

  closeAlert(): void {
    this.databaseUser.recentlyModified = false;
  }

  onUpload(e) {
    const id = this.userEmail[0];
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
    this.picture = true;
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

  async onUpdate() {
    const { userName, bio } = this.customizeForm.value;
    if (this.picture) {
      try {
        const url = (await this.urlImage.toPromise()).toString();
        const userData = [this.userEmail[0], userName, bio, url]
        this.http.put('http://localhost:8080/customize?tokenId=' + this.userToken, JSON.stringify(userData)).toPromise().then(data => {
          this.loadProfile();
        }
        )
          .catch(x => console.log(x))

      }
      catch (error) {
        console.log(error);
      }
      finally {

        this.loadProfile();
        this.alertsToggle();
      }
    }
    else {
      try {
        const url = '';
        const userData = [this.userEmail[0], userName, bio, url]
        this.http.put('http://localhost:8080/customize?tokenId=' + this.userToken, JSON.stringify(userData)).toPromise().then(data => {
          this.loadProfile();
        })
          .catch(x => console.log(x))
      }
      catch (error) {
        console.log(error);
      }
      finally {
        this.loadProfile();
        this.alertsToggle();
      }
    }
  }

  openCustomizer() {
    this.customizePopUp = true;
  }

  alertsToggle() {
    if (this.showCards) {
      this.showCards = false;
      this.showCustomize = true;
    }
    else {
      this.showCards = true;
      this.showCustomize = false;
    }
    return false;
  }

}
