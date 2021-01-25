import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './components/recipebook/recipebook.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './components/recipebook/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipebook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipebook/recipe-list/recipe-item/recipe-item.component';
import { ShoppinglistEditComponent } from './components/shoppinglist/shoppinglist-edit/shoppinglist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    RecipebookComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppinglistEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
