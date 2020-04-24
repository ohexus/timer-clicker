import { Component, HostListener } from '@angular/core'
import { TimerService } from '../../../services/timer-service/timer.service'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  timerTotal: number
  timerCurrent: number

  widthMultiplier: number = 2
  timerWidth: string = `5rem`
  timerStep: number = 0.1

  isTimerStarted: boolean = false

  constructor(private timerService: TimerService) {
    this.timerService.getTotalTime().subscribe(res => {
      this.timerTotal = Number(res.toFixed(1))
    })

    this.timerService.getCurrentTime().subscribe(res => {
      this.timerCurrent = Number(res.toFixed(1))
      this.timerWidth = `${this.timerCurrent * this.widthMultiplier}rem`
    })

    this.timerService.getIsTimerStarted().subscribe(is => {
      this.isTimerStarted = is
    
      if (is !== false) {
        this.startTimerAnimation()
      }
    })
  }

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

  increaseTimerLength() {
    this.timerService.increaseTimerLength()

    this.changeTimerWidth()
  }

  decreaseTimerLength() {
    if (this.timerTotal > 1) {
      this.timerService.decreaseTimerLength()

      this.changeTimerWidth()
    }
  }

  startTimerAnimation() {
    let timerId = setInterval(() => {
      // correct time fix
      this.timerCurrent = parseFloat((this.timerCurrent - this.timerStep).toFixed(2))

      this.changeTimerWidth()

      if (this.timerCurrent <= 0) {
        clearInterval(timerId)
      }
    }, this.timerStep * 1000)
  }

  changeTimerWidth() {
    this.timerWidth = this.multTimerWidth().toString() + 'rem'
  }

  multTimerWidth = () => this.timerCurrent * this.widthMultiplier
}
