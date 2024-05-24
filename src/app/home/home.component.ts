import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  pageNumbers: number[] = [];
  trendingAll = [];
  currentPage = 1;
  term: string;

  constructor(public _MovieService: MovieService) {
    for (let i = 1 ; i < 11 ; i++)
    {
      this.pageNumbers.push(i);
    }
    _MovieService.getTrendingAll(this.currentPage).subscribe((data) => {
       this.trendingAll = data.results;
    })
  }
  changePage(ind:number)
  {
    this.currentPage = ind;
    this._MovieService.getTrendingAll(this.currentPage).subscribe((data:any) => {
       this.trendingAll = data.results;
    })
  }
  prev() {
    this.changePage(this.currentPage -1)
  }
  next() {
    this.changePage(this.currentPage +1)
  }

}
