import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { UsernameService } from '../services/username-service/username.service'
import { ToggleFullscreenButtonComponent } from '../toggle-fullscreen-button/toggle-fullscreen-button.component'
import { GameService } from '../services/game-service/game.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild(ToggleFullscreenButtonComponent)
  private fullscreenButton: ToggleFullscreenButtonComponent

  title: string = 'timer clicker game'
  username: string = ''

  isWarningShow: boolean = false
  fullscreen:boolean = true

  isInitScreen: boolean = true

  timerId: any

  constructor(private usernameService: UsernameService) {}

  emitNewName(name: string) {
    this.usernameService.setUsername(name)
    this.username = ''
  }

  checkName() {
    const name = this.username.trim()

    if (name) {
      this.emitNewName(name)

      this.toggleFullscreen()
      this.isInitScreen = false
    } else {
      clearTimeout(this.timerId)

      this.isWarningShow = true

      this.timerId = setTimeout(() => {
        this.isWarningShow = false
      }, 3000)
    }
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen

    if (this.isInitScreen) {
      this.isInitScreen = false
      this.fullscreenButton.toggleFillHeaderStatus()
    }
  }
}
