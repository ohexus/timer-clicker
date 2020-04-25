import { Component } from '@angular/core';
import { UsernameService } from '../../../services/username-service/username.service';
import { GameService } from '../../../services/game-service/game.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {
  username = '';

  isInitGame: boolean;

  isShown = false;
  timerId: any;

  constructor(
    private usernameService: UsernameService,
    private gameService: GameService
  ) {
    this.usernameService.getUsername().subscribe(username => this.username = username);

    this.gameService.getIsInitGame().subscribe(is => {
      this.isInitGame = is;

      if (is !== false) {
        this.showGreeting();
      } else {
        this.closeGreeting();
      }
    });
  }

  showGreeting() {
    this.isShown = true;

    // seconds
    const animationLength = 3;
    let animationCurrentSeconds = 0;

    this.timerId = setInterval(() => {
      if (animationCurrentSeconds < animationLength) {
        animationCurrentSeconds++;
      } else {
        this.closeGreeting();
      }
    }, 1000);
  }

  closeGreeting() {
    this.isShown = false;
    clearInterval(this.timerId);
  }
}
