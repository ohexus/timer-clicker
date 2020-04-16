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

  @Output() timerEndEvent = new EventEmitter()

  // changeTimerLength() {

  // }

  startTimer() {
    let timerId = setInterval(() => {
      this.timerCurrentValue -= this.timerStep

      if (this.timerCurrentValue < 0) {
        this.emitTimerEnd()
        clearInterval(timerId)
      }
    }, this.timerStep * 1000)
  }

  emitTimerEnd() {
    this.timerEndEvent.emit()
    this.timerCurrentValue = this.timerTotalLength
  }

  convertTime(timeInSeconds: number) {
    const format = (num: number, size: number) => ('00' + num).slice(size * -1)
    const minutes = Math.floor(timeInSeconds / 60) % 60
    const seconds = Math.floor(timeInSeconds - minutes * 60)

    return `${format(minutes, 2)}:${format(seconds, 2)}`;
  }

  getTimerRangePosition() {
    return (this.timerCurrentValue * 100) / this.timerTotalLength
  }
}
