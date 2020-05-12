import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { LoginGuard } from './shared/services/login.guard';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'movies', component: MoviesContainerComponent },
  { path: 'login/movies/add', component: MovieFormComponent },
  { path: 'movies/selected/:id', component: MoviesContainerComponent },
  { path: 'login/categories/add', component: CategoriesFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
