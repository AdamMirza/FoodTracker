import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  todaysListOfFood: Food[] = [];
  choiceListOfFood: Food[] = [];
  totalCalories: number;

  foodForm;

  constructor(private formBuilder: FormBuilder) {
    this.totalCalories = 0;
    this.foodForm = this.formBuilder.group({
      name: '',
      calories: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  addFood() {
    this.choiceListOfFood.push(new Food("test", 5, "test"));
  }

  moveFoodToChoiceList(index: number) {
    let temp = this.todaysListOfFood.splice(index, 1);
    let food = temp[0];
    this.choiceListOfFood.push(food);
    this.totalCalories = this.totalCalories - food.calories;
    console.log(this.totalCalories);

  }

  moveFoodToTodaysList(index: number) {
    let temp = this.choiceListOfFood.splice(index, 1);
    let food = temp[0];
    this.todaysListOfFood.push(food);
    this.totalCalories = this.totalCalories + food.calories;
    console.log(this.totalCalories);
  }

  addFoodToChoiceList(foodData) {
    console.log(foodData);
    let temp = new Food(foodData.name, foodData.calories, foodData.description);
    this.choiceListOfFood.push(temp);
  }

}

export class Food {
  // field
  name: string;
  calories: number;
  description: string;

  // constructor - not sure how this well translate to front-end code
  constructor(name: string, calories: number, description: string) {
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
