import { Injectable } from '@angular/core';

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
  scoresArray: Highscore[]

  constructor() {
    this.scoresArray = this.sortTable(defaultHighscores)
    console.log(this.scoresArray)
  }

  addHighscore(item: Highscore) {
    this.scoresArray = this.sortTable([...this.scoresArray, item])

    console.log(this.scoresArray)
  }

  sortTable(array: Highscore[]) {
    console.log(array)
    return array.sort((a, b) => {
      if (a.counterTime === b.counterTime) {
        return a.total > b.total ? 1 : -1
      } else {
        return a.counterTime > b.counterTime ? 1 : -1
      }
    })
  }

}
