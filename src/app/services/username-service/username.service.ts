import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GameService } from '../game-service/game.service';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  username: BehaviorSubject<string>

  constructor(private gameService: GameService) {
    this.username = new BehaviorSubject<string>('')
  }

  setUsername(newName: string) {
    if (newName !== this.username.getValue()) {
      this.username.next(newName)

      this.gameService.restartGame()
    }
  }

  getUsername(): Observable<string> {
    return this.username.asObservable()
  }
}
