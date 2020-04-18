import { Component, Output, EventEmitter, HostListener } from '@angular/core'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  timerTotalLength: number = 10
  timerCurrentValue: number = this.timerTotalLength

  widthMultiplier: number = 2
  timerWidth: string = `${this.timerTotalLength * this.widthMultiplier}rem`

  isTimerStarted: boolean = false

  @Output() timerEndEvent = new EventEmitter()
  @Output() timerLengthChangeEvent = new EventEmitter()

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.isTimerStarted) {
      const k = event.key
  
      if (k === 'w' || k === 'd' || k === 'ArrowUp' || k === 'ArrowRight') {
        this.increaseTimerLength()
      }
  
      if (k === 'a' || k === 's' || k === 'ArrowLeft' || k === 'ArrowDown') {
        this.decreaseTimerLength()
      }
    }
  }

  emitTimerEnd() {
    this.timerEndEvent.emit()
    this.timerCurrentValue = this.timerTotalLength
  }

  emitTimerLengthChange() {
    this.timerLengthChangeEvent.emit(this.timerTotalLength)
  }

  increaseTimerLength() {
    this.timerTotalLength++

    this.timerCurrentValue = this.timerTotalLength
    this.changeTimerWidth()

    this.emitTimerLengthChange()
  }

  decreaseTimerLength() {
    if (this.timerTotalLength > 1) {
      this.timerTotalLength--

      this.timerCurrentValue = this.timerTotalLength
      this.changeTimerWidth()

      this.emitTimerLengthChange()
    }
  }

  startTimer() {
    this.isTimerStarted = true
    const timerStep: number = 0.1

    let timerId = setInterval(() => {
      this.timerCurrentValue -= timerStep

      this.changeTimerWidth()

      if (this.timerCurrentValue < 0) {
        this.isTimerStarted = false
        this.timerWidth = this.multiplyTimerWidth(this.timerTotalLength).toString() + 'rem'

        this.emitTimerEnd()
        clearInterval(timerId)
      }
    }, timerStep * 1000)
  }

  convertTime(timeInSeconds: number) {
    const format = (num: number, size: number) => ('00' + num).slice(size * -1)
    const minutes = Math.floor(timeInSeconds / 60) % 60
    const seconds = Math.floor(timeInSeconds - minutes * 60)

    return `${format(minutes, 2)}:${format(seconds, 2)}`
  }

  changeTimerWidth() {
    this.timerWidth = this.multiplyTimerWidth(this.timerCurrentValue).toString() + 'rem'
  }

  multiplyTimerWidth = (value) => value * this.widthMultiplier
}
