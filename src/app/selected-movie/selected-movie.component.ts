import { Component, OnInit, Injectable } from '@angular/core';
import { Url } from 'url';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css'],
})
export class SelectedMovieComponent implements OnInit {
  public movies: Movie[];
  public selectedMovieYtid: string;
  public selectedMovieUrl: Url;
  public selectedMovieTitle: string;
  public selectedMovieDescription: string;

  constructor(
    private readonly movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectedMovieYtid = this.activatedRoute.snapshot.paramMap.get('id');
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      movies.forEach((movie) => {
        if (movie.ytid === this.selectedMovieYtid) {
          this.selectedMovieTitle = movie.title;
          this.selectedMovieUrl = movie.url;
        }
      });
    });
  }
}
