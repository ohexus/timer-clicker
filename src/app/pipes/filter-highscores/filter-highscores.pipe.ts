import { Pipe, PipeTransform } from '@angular/core';
import { Highscore } from '../../services/highscore-table-service/highscore-table.service';

@Pipe({
  name: 'filterHighscores'
})
export class FilterHighscoresPipe implements PipeTransform {

  transform(highscores: Highscore[], timeInSeconds: number): Highscore[] {
    return highscores.filter(h => h.counterTime === timeInSeconds)
  }

}
