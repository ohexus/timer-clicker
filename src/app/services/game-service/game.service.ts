import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimerService } from '../timer-service/timer.service';
import { ClicksService } from '../clicks-service/clicks.service';
import { SpeedService } from '../speed-service/speed.service';
import { HighscoreTableService, Highscore } from '../highscore-table-service/highscore-table.service';
import { UsernameService } from '../username-service/username.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  isGameStarted: BehaviorSubject<boolean>;
  isGameDelayed: BehaviorSubject<boolean>;

  isInitGame: BehaviorSubject<boolean>;

  // highscore values
  counterTime: number;
  owner: string;
  total: number;
  average: number;

  constructor(
    private timerService: TimerService,
    private clicksService: ClicksService,
    private speedService: SpeedService,
    private usernameService: UsernameService,
    private highscoreService: HighscoreTableService
  ) {
    this.isGameStarted = new BehaviorSubject<boolean>(false);
    this.isGameDelayed = new BehaviorSubject<boolean>(false);

    this.isInitGame = new BehaviorSubject<boolean>(true);

    this.timerService.getIsTimerStarted().subscribe(is => {
      if (is === false) {
        this.finishGame();
      }
    });

    this.timerService.getTotalTime().subscribe(time => this.counterTime = time);
    this.clicksService.getTotalClicks().subscribe(total => this.total = total);
    this.clicksService.getAverageClicks().subscribe(average => this.average = average);

    this.usernameService.getUsername().subscribe(username => {
      this.owner = username;

      this.restartGame();
    });
  }

  startGame() {
    this.clicksService.resetClicks();

    this.speedService.startCalculateSpeed();
    this.timerService.startTimer();

    this.isGameStarted.next(true);
    this.isGameDelayed.next(false);
    this.isInitGame.next(false);
  }

  finishGame() {
    this.speedService.stopCalculateSpeed();

    this.clicksService.changeAverage();

    this.isGameStarted.next(false);
    this.toggleTimeoutGameDelay();
    this.isInitGame.next(false);

    this.checkScore();
  }

  restartGame() {
    this.timerService.finishTimer();

    this.isGameStarted.next(false);
    this.isGameDelayed.next(false);
    this.isInitGame.next(true);
  }

  checkScore() {
    const date: Date = new Date();

    const newHighscore: Highscore = {
      counterTime: this.counterTime,
      owner: this.owner,
      total: this.total,
      average: this.average,
      reached: date
    };

    this.highscoreService.checkPlayersScore(newHighscore);
  }

  toggleTimeoutGameDelay() {
    this.isGameDelayed.next(true);
    setTimeout(() => this.isGameDelayed.next(false), 2000);
  }

  getIsGameStarted(): Observable<boolean> {
    return this.isGameStarted.asObservable();
  }

  getIsGameDelayed(): Observable<boolean> {
    return this.isGameDelayed.asObservable();
  }

  getIsInitGame(): Observable<boolean> {
    return this.isInitGame.asObservable();
  }
}
