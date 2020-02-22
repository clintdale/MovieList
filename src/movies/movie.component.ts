import { Component } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';


@Component ({
    selector: 'mv-list',
    templateUrl: './movie.component.html'



})
export class MovieListComponent{
    pageTitle: string = "Movies Now Playing";
    imgUrl: string = "https://image.tmdb.org/t/p/w500";
    movies: IMovie[] = [];

    constructor(private movieService: MovieService){
    this.movieService.getMovies().subscribe(movieObserved => {
      console.log(movieObserved);
      this.movies = movieObserved;
     });

    }

}