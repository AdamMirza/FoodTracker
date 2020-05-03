import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  name: string;
  calories: number;
  description: string;

  constructor(name: string, calories: number, description: string) {
    this.name = name;
    this.calories = calories;
    this.description = description;
  }

  ngOnInit() {
  }

}
