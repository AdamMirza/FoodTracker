import { Component, OnInit } from '@angular/core';
// import * as Collections from 'typescript-collections'; // this doesn't run for some reason

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  listOfFood: [];

  constructor() {
  }

  ngOnInit() {
  }

}

export class Food {
  // field
  name: string;
  calories: number;
  description: string;

  // constructor - not sure how this well translate to front-end code
  constructor(name: string, calories: number, description: string) {
  }

  /*toString() {
    return Collections.util.makeString(this);
  } */
}

// let foodVariable = new Food("Apple", 50, "fruit").toString());  // just a test
//console.log(new Food("Apple", 50, "fruit").toString());  // just a test

/* maybe use Array?
const arr: number[] = [];
arr.push(50)
for every new Food, add new Array item
maybe we could store Food types instead of numbers in array
*/
