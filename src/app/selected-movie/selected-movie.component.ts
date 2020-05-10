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
  // public selectedMovieUrl: Url;

  constructor(
    private readonly movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  // public updateSelectedMovieInfo(movie: Movie) {
  //   this.selectedMovie = movie;
  //   console.log(`YtId in Selected-Movie component: ${this.selectedMovie}`);
  // }

  ngOnInit(): void {
    this.selectedMovieYtid = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
