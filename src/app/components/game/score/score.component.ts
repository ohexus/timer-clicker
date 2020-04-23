import { Component } from '@angular/core';
import { UsernameService } from '../../../services/username-service/username.service';
import { ClicksService } from '../../../services/clicks-service/clicks.service';
import { GameService } from '../../../services/game-service/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  total: number
  average: number

  isGameStarted: boolean
  isInitGame: boolean

  username: string = ''
  
  constructor(
    private usernameService: UsernameService,
    private clicksService: ClicksService,
    private gameService: GameService
  ) {
    this.usernameService.getUsername().subscribe(username => {
      this.username = username
    })
    
    this.clicksService.getTotalClicks().subscribe(total => {
      this.total = total
    })
    
    this.clicksService.getAverageClicks().subscribe(average => {
      this.average = average
    })
    
    this.gameService.getIsGameStarted().subscribe(is => {
      this.isGameStarted = is
    })
    
    this.gameService.getIsInitGame().subscribe(is => {
      this.isInitGame = is
    })
  }
}
