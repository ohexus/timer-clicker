import { Component } from '@angular/core';
import { SpeedService } from '../../../services/speed-service/speed.service';
import { ClicksService } from '../../../services/clicks-service/clicks.service';
import { GameService } from '../../../services/game-service/game.service';

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  styleUrls: ['./click-button.component.scss']
})
export class ClickButtonComponent {
  isGameDelayed: boolean
  isGameStarted: boolean

  isInitGame: boolean

  clicksSpeed: number

  circles: string[] = []

  constructor(
    private clicksService: ClicksService,
    private speedService: SpeedService,
    private gameService: GameService
  ) {
    this.gameService.getIsGameDelayed().subscribe(is => this.isGameDelayed = is)
    this.gameService.getIsGameStarted().subscribe(is => {
      this.isGameStarted = is
    
      if (is === false) {
        this.destroyCircles()
      }
    })

    this.gameService.getIsInitGame().subscribe(is => this.isInitGame = is)
    
    this.speedService.getSpeed().subscribe(speed => this.clicksSpeed = speed)
  }

  clickAction() {
    if (!this.isGameDelayed || this.isInitGame) {
      if (!this.isGameStarted) {
        this.gameService.startGame()
      }

      this.clicksService.increaseClicks()
      this.speedService.increaseClicks()

      this.runCircle()
    }
  }

  runCircle() {
    this.circles.push('circle')
  }

  destroyCircles() {
    // wait for last circle animation end
    setTimeout(() => {
      this.circles = []
    }, 1250)
  }
}
