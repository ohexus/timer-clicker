import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-highscore-pagination',
  templateUrl: './highscore-pagination.component.html',
  styleUrls: ['./highscore-pagination.component.scss']
})
export class HighscorePaginationComponent {
  timeFilter = 10;

  @Output() timeFilterEvent = new EventEmitter();

  changeTimeFilter(status: string) {
    if (status === 'next') {
      this.timeFilter++;
    } else {
      if (this.timeFilter > 1) {
        this.timeFilter--;
      }
    }

    this.timeFilterEvent.emit(this.timeFilter);
  }

}
