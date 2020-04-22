import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpeedService } from '../speed-service/speed.service';
import { ClicksService } from '../clicks-service/clicks.service';
import { GameService } from '../game-service/game.service';


@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerTotalLength: BehaviorSubject<number>
  timerCurrentValue: BehaviorSubject<number>

  isTimerStarted: BehaviorSubject<boolean>

  timerId: any

  defaultTimerLength: number = 10

  constructor() {
    this.timerTotalLength = new BehaviorSubject<number>(this.defaultTimerLength)
    this.timerCurrentValue = new BehaviorSubject<number>(this.defaultTimerLength)
    this.isTimerStarted = new BehaviorSubject<boolean>(false)
  }

  increaseTimerLength() {
    const newTotalLength = this.timerTotalLength.getValue() + 1

    this.timerTotalLength.next(newTotalLength)
    this.timerCurrentValue.next(newTotalLength)
  }

  decreaseTimerLength() {
    const totalLength = this.timerTotalLength.getValue()

    if (totalLength > 1) {
      const newTotalLength = totalLength - 1

      this.timerTotalLength.next(newTotalLength)
      this.timerCurrentValue.next(newTotalLength)
    }
  }

  startTimer() {
    this.isTimerStarted.next(true)
    
    this.timerId = setInterval(() => {
      this.timerCurrentValue.next(this.timerCurrentValue.getValue() - 1)

      if (this.timerCurrentValue.getValue() <= 0) {
        this.finishTimer()
      }
    }, 1000)
  }

  finishTimer() {
    this.isTimerStarted.next(false)

    clearInterval(this.timerId)
    this.timerCurrentValue.next(this.timerTotalLength.getValue())
  }

  getTotalTime(): Observable<number> {
    return this.timerTotalLength.asObservable()
  }

  getCurrentTime(): Observable<number> {
    return this.timerCurrentValue.asObservable()
  }

  getIsTimerStarted(): Observable<boolean> {
    return this.isTimerStarted.asObservable()
  }
}
