import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  timerTotalLength: number = 10
  timerCurrentValue: number = this.timerTotalLength

  timerStep: number = 0.1

  isTimerStarted: boolean = false

  @Output() timerEndEvent = new EventEmitter()
  @Output() timerLengthEvent = new EventEmitter()

  emitTimerEnd() {
    this.timerEndEvent.emit()
    this.timerCurrentValue = this.timerTotalLength
  }

  emitTimerLength() {
    this.timerLengthEvent.emit(this.timerTotalLength)
  }

  increaseTimerLength() {
    this.timerTotalLength++
    this.timerCurrentValue = this.timerTotalLength
    this.emitTimerLength()
  }
  
  decreaseTimerLength() {
    this.timerTotalLength--
    this.timerCurrentValue = this.timerTotalLength
    this.emitTimerLength()
  }

  startTimer() {
    this.isTimerStarted = true

    let timerId = setInterval(() => {
      this.timerCurrentValue -= this.timerStep

      if (this.timerCurrentValue < 0) {
        this.isTimerStarted = false
        this.emitTimerEnd()
        clearInterval(timerId)
      }
    }, this.timerStep * 1000)
  }

  convertTime(timeInSeconds: number) {
    const format = (num: number, size: number) => ('00' + num).slice(size * -1)
    const minutes = Math.floor(timeInSeconds / 60) % 60
    const seconds = Math.floor(timeInSeconds - minutes * 60)

    return `${format(minutes, 2)}:${format(seconds, 2)}`
  }

  getTimerRangePosition() {
    return (this.timerCurrentValue * 100) / this.timerTotalLength
  }
}
