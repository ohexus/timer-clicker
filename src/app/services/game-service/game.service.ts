import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimerService } from '../timer-service/timer.service';
import { ClicksService } from '../clicks-service/clicks.service';
import { SpeedService } from '../speed-service/speed.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  isGameStarted: BehaviorSubject<boolean>
  isGameDelayed: BehaviorSubject<boolean>

  isInitGame: BehaviorSubject<boolean>

  constructor(
    private timerService: TimerService,
    private clicksService: ClicksService,
    private speedService: SpeedService
  ) {
    this.isGameStarted = new BehaviorSubject<boolean>(false)
    this.isGameDelayed = new BehaviorSubject<boolean>(false)

    this.isInitGame = new BehaviorSubject<boolean>(true)

    this.timerService.getIsTimerStarted().subscribe(is => {
      if (is === false) {
        this.finishGame()
      }
    })
  }

  startGame() {
    this.clicksService.resetClicks()

    this.speedService.startCalculateSpeed()
    this.timerService.startTimer()
    
    this.isGameStarted.next(true)
    this.isGameDelayed.next(false)
    this.isInitGame.next(false)
  }

  finishGame() {
    this.speedService.stopCalculateSpeed()

    this.clicksService.changeAverage()

    this.isGameStarted.next(false)
    this.toggleTimeoutGameDelay()
    this.isInitGame.next(false)
  }

  restartGame() {
    this.timerService.finishTimer()

    this.isGameStarted.next(false)
    this.isGameDelayed.next(false)
    this.isInitGame.next(true)
  }

  toggleTimeoutGameDelay() {
    this.isGameDelayed.next(true)
    setTimeout(() => this.isGameDelayed.next(false), 2000);
  }

  getIsGameStarted(): Observable<boolean> {
    return this.isGameStarted.asObservable()
  }

  getIsGameDelayed(): Observable<boolean> {
    return this.isGameDelayed.asObservable()
  }

  getIsInitGame(): Observable<boolean> {
    return this.isInitGame.asObservable()
  }
}
