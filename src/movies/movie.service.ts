import { IMovie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class MovieService{
        constructor(private http: HttpClient){ }
        movieUrl: string = "https://api.themoviedb.org/3/movie/popular?api_key=063751f9721881b7f83a82a2aad1f974&language=en-US&page=1";
        
        getMovies(): Observable<IMovie[]>{
            return this.http.get<IMovie[]>(this.movieUrl).pipe(map(result => result['results']));
            }

}