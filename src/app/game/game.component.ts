import { Component, ViewChild, Input } from '@angular/core'

import { TimerComponent } from './timer/timer.component'
import { ClickButtonComponent } from './click-button/click-button.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @ViewChild(TimerComponent)
  private timer: TimerComponent
  
  @ViewChild(ClickButtonComponent)
  private clickButton: ClickButtonComponent
  
  @Input() name: string

  totalClicks: number = 0
  averageClicks: number = 0

  clicksSpeed: number = 0
  clicksPerStep: number = 0

  timerLength: number = 10

  isGameFinished: boolean = true
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
    this.isGameFinished = false
    this.startGame()
  }

  finishGame() {
    this.isGameFinished = true
    this.averageClicks = parseFloat((this.totalClicks / this.timerLength).toFixed(2))
    this.toggleGameDelay()
    this.clickButton.destroyCircles()
  }

  toggleGameDelay() {
    this.isGameDelayed = true
    setTimeout(() => this.isGameDelayed = false, 2000);
  }

  changeTimerLength(value: number) {
    this.timerLength = value
  }

  calculateClicksSpeed() {
    let time: number = 0
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
      if (time <= this.timerLength) {
        this.clicksSpeed = parseFloat(sumSteps(this.clicksPerStep).toFixed(2))

        time += timeStep

        changeStepsValues(this.clicksPerStep)
        this.clicksPerStep = 0
      } else {
        clearInterval(timerId)
        this.clicksSpeed = 0
      }
    }, timeStep * 1000)
  }
}
