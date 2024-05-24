import { Component } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],

})
export class MoviesComponent {

  movies: any = [];
  pageNumbers: number[] = [];
  currentPage: number = 1;
  term:string
  constructor(public _MovieService: MovieService) {
    for (let i = 1; i < 11; i++) {
      this.pageNumbers.push(i)
    }
    _MovieService.getMovies(this.currentPage).subscribe((data) => {
      this.movies = data.results;
    })
  }
  changePage(ind: number) {
    this.currentPage = ind;
    this._MovieService.getMovies(this.currentPage).subscribe((data) => {
      this.movies = data.results;
    })
  }
  prev() {
    this.changePage(this.currentPage -1)
  }
  next() {
    this.changePage(this.currentPage +1)
  }
}
