import { Component } from '@angular/core';
import { Highscore, HighscoreTableService } from '../../services/highscore-table-service/highscore-table.service';

@Component({
  selector: 'app-highscore-table',
  templateUrl: './highscore-table.component.html',
  styleUrls: ['./highscore-table.component.scss']
})
export class HighscoreTableComponent {
  highscoresArray: Highscore[]

  fullscreen: boolean = false

  constructor(private highscoreTableService: HighscoreTableService) {
    this.highscoreTableService.getHighscores().subscribe(scores => this.highscoresArray = scores)

    console.log(this.highscoresArray)
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen
  }
}
