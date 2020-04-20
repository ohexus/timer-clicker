import { Component, Input, Output, EventEmitter } from '@angular/core'
import { UsernameService } from '../services/username-service/username.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Timer Clicker Game'
  username: string = ''

  isWarningShow: boolean = false
  fullscreen:boolean = true

  isInitScreen: boolean = true

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
      this.isWarningShow = true

      setTimeout(() => {
        this.isWarningShow = false
      }, 3000)
    }
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen
  }
}
