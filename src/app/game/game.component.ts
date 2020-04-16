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

  clicksSpeed: number = 0
  clicksInTheLastSecond: number = 0

  timerLength: number = 10

  isFinished: boolean = true
  isGameDelayed: boolean = false

  increaseClicks() {
    this.totalClicks++
    this.clicksInTheLastSecond++
  }

  startGame() {
    this.increaseClicks()
    this.timer.startTimer()
    this.calculateClicksSpeed()
  }

  restartGame() {
    this.totalClicks = 0
    this.averageClicks = 0
    this.isFinished = false
    this.startGame()
  }

  finishGame() {
    this.isFinished = true
    this.averageClicks = this.formatClicksNumber(this.totalClicks, this.timerLength)
    this.toggleGameDelay()
  }

  toggleGameDelay() {
    this.isGameDelayed = true
    setTimeout(() => this.isGameDelayed = false, 2000);
  }

  changeTimerLength(value: number) {
    this.timerLength = value
  }

  calculateClicksSpeed() {
    // 1 instead of 0 to avoid infinity
    let time = 1

    let timerId = setInterval(() => {
      if (time <= this.timerLength + 1) {
        this.clicksSpeed = this.formatClicksNumber(this.clicksInTheLastSecond, time)
        time++
      } else {
        clearInterval(timerId)
      }
      
      this.clicksInTheLastSecond = 0
    }, 1000)
  }

  formatClicksNumber(clicks: number, time: number) {
    return parseFloat((clicks / time).toFixed(2))
  }
}
