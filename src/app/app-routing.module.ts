import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/game/game.component';
import { HighscoreTableComponent } from './components/highscore-table/highscore-table.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'game', component: GameComponent },
  { path: 'highscores', component: HighscoreTableComponent },
  { path: '**', component: GameComponent } // NotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
