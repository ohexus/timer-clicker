import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './game/score/score.component';
import { ClickButtonComponent } from './game/click-button/click-button.component';
import { TimerComponent } from './game/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    GameComponent,
    ScoreComponent,
    ClickButtonComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
