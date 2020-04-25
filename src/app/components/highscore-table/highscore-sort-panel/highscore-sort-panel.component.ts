import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-highscore-sort-panel',
  templateUrl: './highscore-sort-panel.component.html',
  styleUrls: ['./highscore-sort-panel.component.scss']
})
export class HighscoreSortPanelComponent {
  sortCriteria = 'total';
  isAscending = false;

  @Output() sortCriteriaEvent = new EventEmitter();
  @Output() isAscendingEvent = new EventEmitter();

  changeSortCriteria(value: string) {
    if (value === this.sortCriteria) {
      this.isAscending = !this.isAscending;
    } else {
      this.isAscending = value === 'owner' ? true : false;
      this.sortCriteria = value;

      this.sortCriteriaEvent.emit(this.sortCriteria);
    }

    this.isAscendingEvent.emit(this.isAscending);
  }

}
