import { Component, ViewChild } from '@angular/core'

import { TimerComponent }  from './timer/timer.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @ViewChild(TimerComponent)
  private timer: TimerComponent

  totalClicks: number = 0
  averageClicks: number = 0

  timerSeconds: number = 10

  isFinished: boolean = true

  isGameDelayed: boolean = false

  increaseTotalClicks() {
    this.totalClicks++
  }

  startGame() {
    this.increaseTotalClicks()
    this.timer.startTimer()
  }

  restartGame() {
    this.totalClicks = 0
    this.averageClicks = 0
    this.isFinished = false
    this.startGame()
  }

  finishGame() {
    this.isFinished = true
    this.averageClicks = this.totalClicks / this.timerSeconds
    this.toggleGameDelay()
  }

  toggleGameDelay() {
    this.isGameDelayed = true
    setTimeout(() => this.isGameDelayed = false, 2000);
  }
}
