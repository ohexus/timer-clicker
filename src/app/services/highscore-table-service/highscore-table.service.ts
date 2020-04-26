import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Highscore {
  counterTime: number;
  total: number;
  average: number;
  owner: string;
  reached: Date;
}

const defaultHighscores: Highscore[] = [
  {
    counterTime: 10,
    total: 120,
    average: 12,
    owner: 'Millero',
    reached: new Date()
  },
  {
    counterTime: 10,
    total: 100,
    average: 10,
    owner: 'Townwe',
    reached: new Date()
  },
  {
    counterTime: 10,
    total: 80,
    average: 8,
    owner: 'MediumSkater',
    reached: new Date()
  },
  {
    counterTime: 10,
    total: 60,
    average: 6,
    owner: 'Dancerly',
    reached: new Date()
  },
  {
    counterTime: 10,
    total: 40,
    average: 4,
    owner: 'Diagonalta',
    reached: new Date()
  }
];

@Injectable({
  providedIn: 'root'
})
export class HighscoreTableService {
  highscoresArray: BehaviorSubject<Highscore[]>;

  constructor() {
    const localHighscores: Highscore[] = this.getLocalHighscores() || defaultHighscores;

    this.highscoresArray = new BehaviorSubject<Highscore[]>([...defaultHighscores, ...localHighscores]);
  }

  addHighscore(newHighscore: Highscore) {
    this.highscoresArray.next([...this.highscoresArray.getValue(), newHighscore]);

    const localHighscores: Highscore[] = this.getLocalHighscores();

    localStorage.setItem('localHighscores', JSON.stringify([...localHighscores, newHighscore]));
  }

  changeHighscore(newHighscore: Highscore) {
    this.highscoresArray.next(this.highscoresArray.getValue().map(score => {
      if (score.owner === newHighscore.owner && score.counterTime === newHighscore.counterTime) {
        return newHighscore;
      }
      return score;
    }));

    localStorage.setItem('localHighscores', JSON.stringify(this.highscoresArray.getValue()));
  }

  checkPlayersScore(newHighscore: Highscore) {

    if (newHighscore.owner !== '') {
      const playerHighscoreByCurrentTime = this.highscoresArray.getValue()
        .filter(score => score.owner === newHighscore.owner)
        .find(score => score.counterTime === newHighscore.counterTime);

      if (playerHighscoreByCurrentTime) {
        if (newHighscore.total > playerHighscoreByCurrentTime.total) {
          this.changeHighscore(newHighscore);
        }
      } else {
        this.addHighscore(newHighscore);
      }
    }
  }

  getLocalHighscores(): Highscore[] {
    return JSON.parse(localStorage.getItem('localHighscores')) || [];
  }

  getHighscores(): Observable<Highscore[]> {
    return this.highscoresArray.asObservable();
  }

}
