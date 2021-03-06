import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe ;
  id : number;
  constructor(private recipeService: RecipeService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id)
    });
  }
  OnAddRecipeToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  OnEditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activatedRoute})
  }

}
