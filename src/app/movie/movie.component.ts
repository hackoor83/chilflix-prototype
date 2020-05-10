import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input()
  public movie: Movie;

  @Output()
  public delete = new EventEmitter<Movie>();
  public onClickDelete() {
    this.delete.emit(this.movie);
  }
}
