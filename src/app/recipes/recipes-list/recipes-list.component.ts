import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipes-item/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Output() recipes:Recipe[] = [
    new Recipe ("Recipe1","Description1","https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg"),
    new Recipe ("Recipe2","Description2","https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg")
  ];
  
  OnSelectRecipe(selectedRecipe:Recipe) {
    this.recipeWasSelected.emit(selectedRecipe);
  }
  constructor() { }

  ngOnInit() {
  }

}
