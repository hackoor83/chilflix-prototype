import { Component, OnInit } from '@angular/core';
import { Url } from 'url';
import { Category } from '../shared/models/category';
import { MovieService } from '../shared/services/movie.service';
import { CategoryService } from '../shared/services/category.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  public movieTitle: string;
  public youtubeId: string;
  public movieUrl: Url;
  public movieCategory: Category;
  public categories: Category[] = [];
  // public movies: Movie[] = [];

  constructor(
    private readonly movieService: MovieService,
    private readonly categoryService: CategoryService
  ) {}

  public addMovie() {
    const newMovie = {
      title: this.movieTitle,
      url: this.movieUrl,
      ytid: this.youtubeId,
      category: this.movieCategory,
    };

    this.movieService.addMovie(newMovie).subscribe((movie) => {
      alert(`Move added ${movie.title}`);
    });
  }

  ngOnInit(): void {
    const categories$ = this.categoryService.getCategories();
    categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }
}
