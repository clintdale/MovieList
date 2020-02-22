import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITv } from './tv.interface';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class TvService{
    constructor(private http: HttpClient){}
    tvUrl: string = "https://api.themoviedb.org/3/tv/popular?api_key=063751f9721881b7f83a82a2aad1f974&language=en-US&page=1";

    getTvShows(): Observable<ITv[]>{

        return this.http.get<ITv[]>(this.tvUrl)
        .pipe(map(tvResult => tvResult['results']));
    }
}