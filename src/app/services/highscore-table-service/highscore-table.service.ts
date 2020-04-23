import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Highscore {
  counterTime: number,
  total: number,
  average: number,
  owner: string,
  highscoreReached: Date
}

const defaultHighscores: Highscore[] = [
  {
    counterTime: 10,
    total: 120,
    average: 12,
    owner: 'Millero',
    highscoreReached: new Date()
  },
  {
    counterTime: 10,
    total: 100,
    average: 10,
    owner: 'Townwe',
    highscoreReached: new Date()
  },
  {
    counterTime: 10,
    total: 80,
    average: 8,
    owner: 'MediumSkater',
    highscoreReached: new Date()
  },
  {
    counterTime: 10,
    total: 60,
    average: 6,
    owner: 'Dancerly',
    highscoreReached: new Date()
  },
  {
    counterTime: 10,
    total: 40,
    average: 4,
    owner: 'Diagonalta',
    highscoreReached: new Date()
  }
]

@Injectable({
  providedIn: 'root'
})
export class HighscoreTableService {
  highscoresArray: BehaviorSubject<Highscore[]>

  constructor() {
    this.highscoresArray = new BehaviorSubject<Highscore[]>(this.sortTable(defaultHighscores))

    console.log(this.highscoresArray.getValue())
  }

  addHighscore(item: Highscore) {
    this.highscoresArray.next(this.sortTable([...this.highscoresArray.getValue(), item]))

    console.log(item)
    console.log(this.highscoresArray.getValue())
  }

  sortTable(array: Highscore[]) {
    return array.sort((a, b) => {
      if (a.counterTime === b.counterTime) {
        return a.total > b.total ? 1 : -1
      } else {
        return a.counterTime > b.counterTime ? 1 : -1
      }
    })
  }

  getHighscores(): Observable<Highscore[]> {
    return this.highscoresArray.asObservable()
  }

}
