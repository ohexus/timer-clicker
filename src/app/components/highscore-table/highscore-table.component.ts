import { Component } from '@angular/core';
import { Highscore, HighscoreTableService } from '../../services/highscore-table-service/highscore-table.service';

@Component({
  selector: 'app-highscore-table',
  templateUrl: './highscore-table.component.html',
  styleUrls: ['./highscore-table.component.scss']
})
export class HighscoreTableComponent {
  highscoresArray: Highscore[];

  timeFilter = 10;
  sortCriteria = 'total';
  isAscending = false;

  fullscreen = false;

  constructor(private highscoreTableService: HighscoreTableService) {
    this.highscoreTableService.getHighscores().subscribe(scores => this.highscoresArray = scores);
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
  }

  changeTimeFilter(value: number) {
    this.timeFilter = value;
  }

  changeSortCriteria(value: string) {
    this.sortCriteria = value;
  }

  changeIsAscending(value: boolean) {
    this.isAscending = value;
  }

}
