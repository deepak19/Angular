import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'My Recipe', 'https://www.mercurynews.com/wp-content/uploads/2016/10/cct-chicken-1023-20.jpg'),
    new Recipe('A Test Recipe', 'My Recipe', 'https://www.mercurynews.com/wp-content/uploads/2016/10/cct-chicken-1023-20.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
