import { Component } from '@angular/core'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  totalClicks: number = 0
  averageClicks: number = 0

  timerSeconds: number = 10

  isFinished: boolean = true

  startGame() {
    this.increaseTotalClicks()
  }

  finishGame() {
    this.isFinished = true
    this.averageClicks = this.totalClicks / this.timerSeconds
  }

  restartGame() {
    this.totalClicks = 0
    this.averageClicks = 0
    this.isFinished = false
    this.startGame()
  }

  increaseTotalClicks() {
    this.totalClicks++
  }
}
