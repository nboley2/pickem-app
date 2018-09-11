import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatchupsService } from './matchups.service';
import { MatchupSelectionComponent } from './matchup-selection/matchup-selection.component';

export const ROUTES: Routes = [
  { path: 'matchups/:year/:week', component: MainComponent },
  { path: '', component: MainComponent},
  { path: 'matchupselection/', component: MatchupSelectionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MatchupSelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [MatchupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
