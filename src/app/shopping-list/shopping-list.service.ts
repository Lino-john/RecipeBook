import { Ingredient } from "../shared/ingredient.model";
// import { EventEmitter, Injectable } from "@angular/core";
// @Injectable()
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()
    private ingredients = [
        new Ingredient ("Apple", 5),
        new Ingredient ("Tomatoes", 10)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}