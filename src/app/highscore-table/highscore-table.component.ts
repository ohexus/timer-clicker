import { Component, OnInit, Input } from '@angular/core';
import { Highscore } from '../services/highscore-table-service/highscore-table.service';

@Component({
  selector: 'app-highscore-table',
  templateUrl: './highscore-table.component.html',
  styleUrls: ['./highscore-table.component.scss']
})
export class HighscoreTableComponent implements OnInit {
  highscoreTable: Highscore[]

  fullscreen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen
  }
}
