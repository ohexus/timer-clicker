import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './game/greeting/greeting.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './game/score/score.component';
import { ClickButtonComponent } from './game/click-button/click-button.component';
import { TimerComponent } from './game/timer/timer.component';
import { HighscoreTableComponent } from './highscore-table/highscore-table.component';
import { ToggleFullscreenButtonComponent } from './toggle-fullscreen-button/toggle-fullscreen-button.component';

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
    ToggleFullscreenButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
