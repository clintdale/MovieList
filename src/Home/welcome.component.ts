import { Component } from "@angular/core";
import { IMovie } from 'src/movies/movie';
import { MovieService } from 'src/movies/movie.service';
import { ITv } from 'src/tvshow/tv.interface';
import { TvService } from 'src/tvshow/tv.service';



@Component({
    templateUrl: './welcome.component.html'

})

export class WelcomeComponent{
    public pageTitle = "Movie/TVDB Project";
    movie: IMovie[] = [];
    imgUrl: string ="https://image.tmdb.org/t/p/w500";
    tvShow: ITv[] = [];

    constructor (private aMovie: MovieService, private aTvShow: TvService){
        this.aMovie.getMovies().subscribe(movieObserved =>{
            
            this.movie.push(movieObserved[0]);
            console.log(this.movie);
        });
        this.aTvShow.getTvShows().subscribe(tvObserved =>{
           
            this.tvShow.push(tvObserved[0]);
            console.log(this.tvShow);
        } )
    }



}