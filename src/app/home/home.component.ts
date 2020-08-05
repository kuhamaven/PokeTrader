import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
cards: Card[]=[];
start: boolean=false;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    try {
     
      let url = 'http://localhost:8080/homescreen';
      this.http.get(url).toPromise().then(
        data => {
       Object.assign(this.cards,data);
        this.start=true;

        }
      )
    }
    catch (error) {
      console.log(error);
    }
  }
   
  navigateToRegister()
  {
    this.router.navigate(['/register']);
  }

}
