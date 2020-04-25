import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from './components/game/greeting/greeting.component';
import { GameComponent } from './components/game/game.component';
import { ScoreComponent } from './components/game/score/score.component';
import { ClickButtonComponent } from './components/game/click-button/click-button.component';
import { TimerComponent } from './components/game/timer/timer.component';
import { HighscoreTableComponent } from './components/highscore-table/highscore-table.component';
import { HeaderButtonLinkComponent } from './components/header-button-link/header-button-link.component';

import { TimePipe } from './pipes/time/time.pipe';
import { FilterHighscoresPipe } from './pipes/filter-highscores/filter-highscores.pipe';
import { SortHighscoresPipe } from './pipes/sort-highscores/sort-highscores.pipe';
import { HighscoreTileComponent } from './components/highscore-table/highscore-tile/highscore-tile.component';
import { HighscoreSortPanelComponent } from './components/highscore-table/highscore-sort-panel/highscore-sort-panel.component';
import { HighscorePaginationComponent } from './components/highscore-table/highscore-pagination/highscore-pagination.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    GameComponent,
    ScoreComponent,
    ClickButtonComponent,
    TimerComponent,
    HighscoreTableComponent,
    HeaderButtonLinkComponent,
    TimePipe,
    FilterHighscoresPipe,
    SortHighscoresPipe,
    HighscoreTileComponent,
    HighscoreSortPanelComponent,
    HighscorePaginationComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
