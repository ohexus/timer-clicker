import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from './components/game/greeting/greeting.component';
import { GameComponent } from './components/game/game.component';
import { ScoreComponent } from './components/game/score/score.component';
import { ClickButtonComponent } from './components/game/click-button/click-button.component';
import { TimerComponent } from './components/game/timer/timer.component';
import { HighscoreTableComponent } from './components/highscore-table/highscore-table.component';
import { ToggleFullscreenButtonComponent } from './components/toggle-fullscreen-button/toggle-fullscreen-button.component';

import { TimePipe } from './pipes/time/time.pipe';
import { FilterHighscoresPipe } from './pipes/filter-highscores/filter-highscores.pipe';
import { SortHighscoresPipe } from './pipes/sort-highscores/sort-highscores.pipe';
import { HighscoreTileComponent } from './components/highscore-table/highscore-tile/highscore-tile.component';
import { HighscoreSortPanelComponent } from './components/highscore-table/highscore-sort-panel/highscore-sort-panel.component';
import { HighscorePaginationComponent } from './components/highscore-table/highscore-pagination/highscore-pagination.component';

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
    ToggleFullscreenButtonComponent,
    TimePipe,
    FilterHighscoresPipe,
    SortHighscoresPipe,
    HighscoreTileComponent,
    HighscoreSortPanelComponent,
    HighscorePaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
