import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from 'src/movies/movie.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from 'src/Home/welcome.component';
import { HttpClientModule} from '@angular/common/http';
import { TvlistComponent } from 'src/tvshow/tv.component';

 



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    WelcomeComponent,
    TvlistComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forChild([
      {path: "movies", component : MovieListComponent },
      {path: "welcome", component: WelcomeComponent},
      {path: "tvshows", component: TvlistComponent},
      {path: '',redirectTo:"welcome", pathMatch:'full'},
      {path: '**',redirectTo:"welcome", pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
