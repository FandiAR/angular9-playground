import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  greeting: string = 'Hey';
  clickCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      isActive: this.clickCounter > 4,
      notActive: this.clickCounter <= 4,
    }
    return myClasses;
  }

}
