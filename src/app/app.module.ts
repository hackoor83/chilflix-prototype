import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { CarouselsContainerComponent } from './carousels-container/carousels-container.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesContainerComponent,
    SelectedMovieComponent,
    CarouselsContainerComponent,
    CarouselComponent,
    CarouselItemComponent,
    MovieFormComponent,
    CategoriesFormComponent,
    MovieListComponent,
    MovieComponent,
    CategoriesListComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
