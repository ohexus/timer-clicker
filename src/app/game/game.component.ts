import { Component, ViewChild } from '@angular/core'

import { TimerComponent } from './timer/timer.component';
import { ParseError } from '@angular/compiler';

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
  clicksPerStep: number = 0

  timerLength: number = 10

  isFinished: boolean = true
  isGameDelayed: boolean = false

  increaseClicks() {
    this.totalClicks++
    this.clicksPerStep++
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
    this.averageClicks = parseFloat((this.totalClicks / this.timerLength).toFixed(2))
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
    let time: number = 1

    const timeStep: number = 0.1

    //clicks steps for smooth based on timeStep, from newest to oldest
    let clicksStep1: number = 0
    let clicksStep2: number = 0
    let clicksStep3: number = 0
    let clicksStep4: number = 0
    let clicksStep5: number = 0
    let clicksStep6: number = 0
    let clicksStep7: number = 0
    let clicksStep8: number = 0
    let clicksStep9: number = 0

    const changeStepsValues = (currentStep: number) => {
      clicksStep9 = clicksStep8
      clicksStep8 = clicksStep7
      clicksStep7 = clicksStep6
      clicksStep6 = clicksStep5
      clicksStep5 = clicksStep4
      clicksStep4 = clicksStep3
      clicksStep3 = clicksStep2
      clicksStep2 = clicksStep1
      clicksStep1 = currentStep
    }

    const sumSteps = (currentStep: number) => {
      return clicksStep9
        + clicksStep8
        + clicksStep7
        + clicksStep6
        + clicksStep5
        + clicksStep4
        + clicksStep3
        + clicksStep2
        + clicksStep1
        + currentStep
    }

    let timerId = setInterval(() => {
      if (time <= this.timerLength + 1) {
        this.clicksSpeed = parseFloat(sumSteps(this.clicksPerStep).toFixed(2))

        time += timeStep

        changeStepsValues(this.clicksPerStep)
        this.clicksPerStep = 0
      } else {
        clearInterval(timerId)
      }
    }, timeStep * 1000)
  }
}
