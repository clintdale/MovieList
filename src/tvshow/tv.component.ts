import { Component } from "@angular/core";
import { ITv } from './tv.interface';
import { TvService } from './tv.service';




@Component({
    selector: 'tv-list',
    templateUrl:'./tv.component.html'
})

export class TvlistComponent{
    pageTitle: string = "Popular TV Shows Right Now";
    imgUrl: string = "https://image.tmdb.org/t/p/w500";
    tvShows: ITv[]= []; 

    constructor(private tvService: TvService){
        this.tvService.getTvShows().subscribe(tvObserved =>{
            
            this.tvShows = tvObserved;
            console.log(this.tvShows);
        });
    }
    
}