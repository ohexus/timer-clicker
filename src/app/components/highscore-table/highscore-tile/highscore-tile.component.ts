import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highscore-tile',
  templateUrl: './highscore-tile.component.html',
  styleUrls: ['./highscore-tile.component.scss']
})
export class HighscoreTileComponent {
  @Input() owner: string
  @Input() total: number
  @Input() average: number
  @Input() reached: string
}
