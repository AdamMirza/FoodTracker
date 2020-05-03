import { Component, OnInit } from '@angular/core';
// import * as Collections from 'typescript-collections'; // this doesn't run for some reason

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  listOfFood: Food[] = [];
  otherListOfFood: Food[] = [];
  globalID: number;

  constructor() {
    this.globalID = 0;
  }

  ngOnInit() {
  }

  addFood() {
    this.listOfFood.push(new Food(this.globalID++, "test", 5, "test"));
  }

  moveFoodToList(index: number) {
    let temp = this.listOfFood.splice(index, 1);
    this.otherListOfFood.push(temp[0]);
  }
  
  moveFoodToOtherList(index: number) {
    let temp = this.otherListOfFood.splice(index, 1);
    this.listOfFood.push(temp[0]);
  }

}

export class Food {
  // field
  id: number;
  name: string;
  calories: number;
  description: string;

  // constructor - not sure how this well translate to front-end code
  constructor(id: number, name: string, calories: number, description: string) {
    this.id = id;
    this.name = name;
    this.calories = calories;
    this.description = description;
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
