import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params:Params) => {
        let recipeId = params['id'];
        this.id = +recipeId;
        this.editMode = recipeId != null;
      }
    )
   }

  ngOnInit() {
  }

}
