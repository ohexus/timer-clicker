import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  timerTotalLength: number = 10
  timerCurrentValue: number = this.timerTotalLength
  
  @Output() timerEndEvent = new EventEmitter()

  // changeTimerLength() {

  // }

  startTimer() {
    let timerId = setInterval(() => {
      this.timerCurrentValue--

      if (this.timerCurrentValue < 0) {
        this.emitTimerEnd()
        clearInterval(timerId)
      }
    }, 1000)
  }

  emitTimerEnd() {
    this.timerEndEvent.emit()
    this.timerCurrentValue = this.timerTotalLength
  }

}
