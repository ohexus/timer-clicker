import { Pipe, PipeTransform } from '@angular/core';
import { Highscore } from '../../services/highscore-table-service/highscore-table.service';

@Pipe({
  name: 'sortHighscores'
})
export class SortHighscoresPipe implements PipeTransform {

  transform(highscores: Highscore[], criteria: string, isAscending: boolean): Highscore[] {
    const sorted = highscores.sort((a, b) => a[criteria] > b[criteria] ? 1 : -1);

    return isAscending ? sorted : sorted.reverse();
  }

}
