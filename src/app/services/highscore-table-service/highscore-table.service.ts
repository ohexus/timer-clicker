import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Highscore {
  counterTime: number,
  total: number,
  average: number,
  owner: string,
  reached: Date
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
]

@Injectable({
  providedIn: 'root'
})
export class HighscoreTableService {
  highscoresArray: BehaviorSubject<Highscore[]>

  constructor() {
    this.highscoresArray = new BehaviorSubject<Highscore[]>(defaultHighscores)

    console.log(this.highscoresArray.getValue())
  }

  addHighscore(item: Highscore) {
    this.highscoresArray.next([...this.highscoresArray.getValue(), item])

    console.log(item)
    console.log(this.highscoresArray.getValue())
  }

  getHighscores(): Observable<Highscore[]> {
    return this.highscoresArray.asObservable()
  }

}
