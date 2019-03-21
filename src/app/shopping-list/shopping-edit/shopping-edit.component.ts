import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInuputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter <Ingredient>(); 
  constructor() { }

  ngOnInit() {
  }
  onAddItem () {
    const ingName = this.nameInuputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient (ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
