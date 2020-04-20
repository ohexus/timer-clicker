import { Component, OnInit, Input } from '@angular/core';
import { UsernameService } from '../../services/username-service/username.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  @Input() isGameFinished: boolean

  username: string = ''

  isShown: boolean = false

  constructor(private usernameService: UsernameService) {}
  
  ngOnInit() {
    this.usernameService.getUsername().subscribe(username => {
      if (username !== this.username) {
        this.username = username
        this.showGreeting()
      }
    })
  }

  showGreeting() {
    this.isShown = true

    // seconds
    const animationLength = 3
    let animationCurrentSeconds = 0

    let timerId = setInterval(() => {
      if (animationCurrentSeconds < animationLength) {
        if (!this.isGameFinished) {
          this.isShown = false
          clearInterval(timerId)
        }

        animationCurrentSeconds++
      } else {
        this.isShown = false
        clearInterval(timerId)
      }
    }, 1000)
  }
}
