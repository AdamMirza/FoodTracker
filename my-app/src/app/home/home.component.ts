import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count = 20;

  constructor() { }

  ngOnInit() {
    console.log("Initialized! The beginning count is + " + this.count);
  }

  plusOne() {
    this.count++;
  }

  minusOne() {
    this.count--;
    console.log(this.count);
  }

}
