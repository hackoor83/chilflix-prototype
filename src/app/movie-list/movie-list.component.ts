import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movies: Movie[] = [];

  public onDelete(movieToDelete: Movie) {
    if (
      confirm(
        `This will PERMANENTLY DELETE the movie entitled ${movieToDelete.title} from the database. Are you sure?`
      )
    ) {
      this.movieService.removeMovie(movieToDelete).subscribe(() => {
        this.movies = this.movies.filter(
          (movie) => movie.id !== movieToDelete.id
        );
        alert('Movie deleted!');
      });
    }
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }
}
