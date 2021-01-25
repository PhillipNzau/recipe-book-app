import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Noodles', 'Amazing noodles', 'https://picsum.photos/id/102/367/267')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
