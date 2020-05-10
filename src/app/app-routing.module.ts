import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

const routes: Routes = [
  { path: 'movies', component: MoviesContainerComponent },
  { path: 'movies/add', component: MovieFormComponent },
  { path: 'movies/selected/:id', component: MoviesContainerComponent },
  { path: 'categories/add', component: CategoriesFormComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
