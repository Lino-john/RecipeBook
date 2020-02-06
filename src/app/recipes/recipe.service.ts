import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe ("Pork-Schnitzel",
                    "Pork schnitzel is an easy recipe and it’s perfect for busy weeknights",
                    "https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-7-600x900.jpg",
                    [new Ingredient ('boneless pork chops',1),
                     new Ingredient ('eggs',3)]),
        new Recipe ("Ground chicken burger",
                    "This ground chicken burger recipe is juicy, moist, and flavorful! No more dry chicken, and you can have these burgers on the table in half an hour.",
                    "https://www.saltandlavender.com/wp-content/uploads/2016/05/herbchickenburger1-680x1024.jpg",
                    [new Ingredient ('Ground chicken breast',1),
                     new Ingredient ('clove garlic minced',3)])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }
    constructor(private shoppingListService: ShoppingListService) {

    }
    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    } 
}