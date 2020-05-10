import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  public movies: Movie[] = [];
  public selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }
}
